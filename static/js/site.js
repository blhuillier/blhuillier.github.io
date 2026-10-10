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
