import React from "react"
import "./SummaryFrame.css"

const SummaryFrame = ({ title, summary, children }) => (
  <section className="summary-frame">
    <div className="summary-frame__inner">
      {title && <h2>{title}</h2>}
      {summary && <p>{summary}</p>}
      {children}
    </div>
  </section>
)

export default SummaryFrame
