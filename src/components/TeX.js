import React from "react"
import katex from "katex"
import "katex/dist/katex.min.css"

/**
 * LaTeX rendered at build time with KaTeX (no client-side script).
 *   <TeX math={String.raw`\Omega_m`} />          inline
 *   <TeX block math={String.raw`f = \Omega_m^\gamma`} />   display
 * Use String.raw so backslashes survive.
 */
const TeX = ({ math, block = false }) => {
  const html = katex.renderToString(math, {
    displayMode: block,
    throwOnError: false, // a typo shows the source in red instead of breaking the build
    output: "html",
  })
  return block ? (
    <div className="tex-block" dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <span className="tex-inline" dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default TeX
