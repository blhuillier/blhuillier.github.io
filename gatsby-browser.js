// Parallax scrolling for image-backed sections, like the Wix "Parallax" strip effect.
//
// Two kinds of element are moved:
//   [data-parallax="bg"]  a background layer 30% taller than its container
//                         (.parallax-bg); shifted by up to +/-15% of the container height
//   [data-parallax="img"] an <img> that fills its container; scaled up 16% and shifted
//
// The image drifts at a fraction of the scroll speed, so text appears to float over it.
// Disabled when the visitor has asked their system to reduce motion.

const OVERHANG = 0.15 // background layers: fraction of container height on each side
const OVERHANG_IMG = 0.08 // <img> banners: smaller, since scaling also crops the sides

let ticking = false

function update() {
  ticking = false
  const vh = window.innerHeight
  document.querySelectorAll("[data-parallax]").forEach((el) => {
    const box = el.parentElement.getBoundingClientRect()
    if (box.bottom < 0 || box.top > vh) return // off-screen: leave as is
    // -1 when the container's centre is at the top of the screen, +1 at the bottom
    const progress = (box.top + box.height / 2 - vh / 2) / (vh / 2 + box.height / 2)
    const isImg = el.dataset.parallax === "img"
    const shift = -progress * (isImg ? OVERHANG_IMG : OVERHANG) * box.height
    el.style.transform = isImg
      ? `translate3d(0, ${shift.toFixed(1)}px, 0) scale(${1 + 2 * OVERHANG_IMG})`
      : `translate3d(0, ${shift.toFixed(1)}px, 0)`
  })
}

function requestUpdate() {
  if (!ticking) {
    ticking = true
    window.requestAnimationFrame(update)
  }
}

let enabled = false

export const onClientEntry = () => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
  if (reduce.matches) return
  enabled = true
  window.addEventListener("scroll", requestUpdate, { passive: true })
  window.addEventListener("resize", requestUpdate)
  window.addEventListener("load", requestUpdate)
}

// New page: position its images before the first scroll.
export const onRouteUpdate = () => {
  if (enabled) requestUpdate()
}
