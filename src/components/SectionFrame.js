import React from "react"
import { Link } from "gatsby"
import "./SectionFrame.css"

const SectionFrame = ({ title, dateRange, description, image, light, align, link }) => (
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
      {link && (
        <p className="section-frame__more">
          <Link className="btn" to={link}>Read more</Link>
        </p>
      )}
    </div>
  </section>
)

export default SectionFrame
