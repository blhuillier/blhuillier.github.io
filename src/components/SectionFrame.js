import React from "react"
import "./SectionFrame.css"

const SectionFrame = ({ title, dateRange, description, image, light, align }) => (
  <section
    className={`section-frame${light ? " section-frame--light" : ""}`}
    style={image ? { backgroundImage: `url("${image}")` } : undefined}
  >
    <div className="section-frame__content">
      {title && <h2 className="section-frame__title">{title}</h2>}
      {dateRange && <p className="section-frame__dates">{dateRange}</p>}
      <div
        className={`section-frame__body${align === "left" ? " section-frame__body--left" : ""}`}
      >
        {description}
      </div>
    </div>
  </section>
)

export default SectionFrame
