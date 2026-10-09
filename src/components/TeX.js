import React from "react"
import katex from "katex"
import "katex/dist/katex.min.css"

const render = (math, displayMode) =>
  katex.renderToString(math, { displayMode, throwOnError: false, output: "html" })

/** A single formula: <TeX math={String.raw`\Omega_k`} /> or <TeX block math="…" />. */
const TeX = ({ math, block = false }) =>
  block ? (
    <div className="tex-block" dangerouslySetInnerHTML={{ __html: render(math, true) }} />
  ) : (
    <span className="tex-inline" dangerouslySetInnerHTML={{ __html: render(math, false) }} />
  )

/** Text with inline $…$ math, e.g. "we measure $H_0 r_\\mathrm{d}$ from BAO". */
export const RichText = ({ text }) => {
  if (!text || !text.includes("$")) return text || null
  return text.split(/(\$[^$]+\$)/).map((part, i) =>
    part.startsWith("$") && part.endsWith("$") && part.length > 2 ? (
      <TeX key={i} math={part.slice(1, -1)} />
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  )
}

const GREEK = {
  alpha: "α", beta: "β", gamma: "γ", delta: "δ", Delta: "Δ", mu: "μ", rho: "ρ",
  sigma: "σ", chi: "χ", Omega: "Ω", Theta: "Θ", Lambda: "Λ", odot: "☉",
  approx: "≈", lesssim: "≲", gtrsim: "≳", times: "×", pm: "±",
}

/** Plain-text version of a $…$ string, for alt text and <title>. */
export const plainText = (text = "") =>
  text.replace(/\$([^$]+)\$/g, (_, m) =>
    m
      .replace(/\\mathcal\{O\}/g, "O")
      .replace(/\\(?:mathrm|text)\{([^}]*)\}/g, "$1")
      .replace(/\\([A-Za-z]+)/g, (__, c) => GREEK[c] ?? "")
      .replace(/\\,/g, " ")
      .replace(/[{}^_]/g, "")
  )

export default TeX
