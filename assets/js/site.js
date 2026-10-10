// Site behaviour: mobile menu, compact header on scroll, parallax backgrounds, news "show all".
(function () {
  "use strict"
  var root = document.documentElement

  // Mobile menu
  var toggle = document.querySelector(".nav-toggle")
  var nav = document.getElementById("primary-nav")
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = !nav.classList.contains("is-open")
      nav.classList.toggle("is-open", open)
      toggle.classList.toggle("is-open", open)
      toggle.setAttribute("aria-expanded", open ? "true" : "false")
      toggle.setAttribute("aria-label", open ? toggle.dataset.labelClose : toggle.dataset.labelOpen)
    })
  }

  // Compact phone header while reading (hysteresis avoids flicker)
  function updateScrolled() {
    if (window.scrollY > 80) root.classList.add("is-scrolled")
    else if (window.scrollY < 20) root.classList.remove("is-scrolled")
  }
  window.addEventListener("scroll", updateScrolled, { passive: true })
  updateScrolled()

  // News: show all / show fewer
  document.querySelectorAll("[data-news-toggle]").forEach(function (btn) {
    var list = btn.parentElement.previousElementSibling
    var all = false
    btn.addEventListener("click", function () {
      all = !all
      list.querySelectorAll("li").forEach(function (li, i) {
        if (i >= 8) li.classList.toggle("is-collapsed", !all)
      })
      btn.textContent = all ? btn.dataset.labelFewer : btn.dataset.labelAll
    })
  })


  // Research page: label chips filter the paper boxes (the chips are also links to the label pages).
  // Several labels can be selected: a paper is shown if it has any of them (OR).
  // The page opens on the key papers; the first label clicked from that state replaces it.
  document.querySelectorAll("[data-paper-filter]").forEach(function (box) {
    var items = [].slice.call(box.querySelectorAll(".paper-filter__item"))
    var chips = [].slice.call(box.querySelectorAll(".label-chip[data-label]"))
    var bar = box.querySelector(".label-bar")
    var barChips = chips.filter(function (c) { return bar.contains(c) })
    var status = box.querySelector("[data-filter-status]")
    var section = box.closest("section")
    var known = barChips.map(function (c) { return c.dataset.label }).filter(Boolean)
    var sel = [box.dataset.default], pristine = true
    function has(item, labels) {
      var l = " " + item.dataset.labels + " "
      return !labels.length || labels.some(function (x) { return l.indexOf(" " + x + " ") >= 0 })
    }
    function apply(push) {
      var n = 0
      items.forEach(function (it) { var ok = has(it, sel); it.hidden = !ok; if (ok) n++ })
      var names = []
      chips.forEach(function (c) {
        var label = c.dataset.label
        var on = label ? sel.indexOf(label) >= 0 : sel.length === 0
        c.classList.toggle("is-active", on)
        c.setAttribute("aria-pressed", on ? "true" : "false")
        if (on && label && bar.contains(c)) names.push(c.firstChild.textContent.trim())
      })
      status.textContent = sel.length ? status.dataset.shown.replace("%n", n).replace("%l", names.join(status.dataset.or)) : status.dataset.all
      if (push) history.replaceState(null, "", "#" + (sel.join("+") || "all"))
    }
    chips.forEach(function (c) {
      c.addEventListener("click", function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return
        e.preventDefault()
        var label = c.dataset.label
        if (!bar.contains(c)) { sel = [label]; section.scrollIntoView({ behavior: "smooth" }) }   // chip inside a paper box
        else if (!label) sel = []                                                                 // "All"
        else if (sel.indexOf(label) >= 0) sel = sel.filter(function (x) { return x !== label })
        else sel = pristine ? [label] : sel.concat(label)
        pristine = false
        apply(true)
      })
    })
    function fromHash() {
      var h = decodeURIComponent(location.hash.slice(1))
      var want = h === "all" ? [] : h.split("+").filter(function (x) { return known.indexOf(x) >= 0 })
      if (h === "all" || want.length) { sel = want; pristine = false; apply(false); section.scrollIntoView() }
      else apply(false)
    }
    fromHash()
    window.addEventListener("hashchange", fromHash)
  })

  // Parallax: [data-parallax="bg"] layers and [data-parallax="img"] banners drift on scroll
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
  var OVERHANG = 0.15, OVERHANG_IMG = 0.08, ticking = false
  function update() {
    ticking = false
    var vh = window.innerHeight
    document.querySelectorAll("[data-parallax]").forEach(function (el) {
      var box = el.parentElement.getBoundingClientRect()
      if (box.bottom < 0 || box.top > vh) return
      var progress = (box.top + box.height / 2 - vh / 2) / (vh / 2 + box.height / 2)
      var isImg = el.dataset.parallax === "img"
      var shift = -progress * (isImg ? OVERHANG_IMG : OVERHANG) * box.height
      el.style.transform = isImg
        ? "translate3d(0, " + shift.toFixed(1) + "px, 0) scale(" + (1 + 2 * OVERHANG_IMG) + ")"
        : "translate3d(0, " + shift.toFixed(1) + "px, 0)"
    })
  }
  function requestUpdate() { if (!ticking) { ticking = true; window.requestAnimationFrame(update) } }
  window.addEventListener("scroll", requestUpdate, { passive: true })
  window.addEventListener("resize", requestUpdate)
  window.addEventListener("load", requestUpdate)
  requestUpdate()
})()
