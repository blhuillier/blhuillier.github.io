import React from "react"

// A background image layer that drifts more slowly than the page on scroll.
// It is taller than its container (see .parallax-bg in layout.css) and is moved
// by the scroll handler in gatsby-browser.js. The parent must be position:relative
// with overflow:hidden.
const ParallaxBg = ({ image }) => (
  <div
    className="parallax-bg"
    data-parallax="bg"
    aria-hidden="true"
    style={{ backgroundImage: `url("${image}")` }}
  />
)

export default ParallaxBg
