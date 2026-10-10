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


  // Publications: label chips filter the list of papers (the chips are also links to the label pages)
  document.querySelectorAll("[data-paper-filter]").forEach(function (box) {
    var items = box.querySelectorAll(".pub-list--all li")
    var chips = box.querySelectorAll(".label-chip[data-label]")
    var status = box.querySelector("[data-filter-status]")
    var reset = box.querySelector("[data-filter-reset]")
    function apply(label, push) {
      var n = 0, name = ""
      items.forEach(function (li) {
        var ok = !label || (" " + li.dataset.labels + " ").indexOf(" " + label + " ") >= 0
        li.hidden = !ok
        if (ok) n++
      })
      chips.forEach(function (c) {
        var on = c.dataset.label === label
        c.classList.toggle("is-active", on)
        if (on) { c.setAttribute("aria-pressed", "true"); name = c.firstChild.textContent.trim() }
        else c.removeAttribute("aria-pressed")
      })
      status.textContent = label ? status.dataset.shown.replace("%n", n).replace("%l", name) : status.dataset.all
      reset.hidden = !label
      if (push) history.replaceState(null, "", label ? "#" + label : location.pathname)
    }
    chips.forEach(function (c) {
      c.addEventListener("click", function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return
        e.preventDefault()
        apply(c.classList.contains("is-active") ? "" : c.dataset.label, true)
      })
    })
    reset.addEventListener("click", function () { apply("", true) })
    var h = decodeURIComponent(location.hash.slice(1))
    if (h && box.querySelector('.label-chip[data-label="' + h + '"]')) {
      apply(h, false)
      box.closest("section").scrollIntoView()
    }
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
