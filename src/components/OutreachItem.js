import React from "react"
import "./OutreachItem.css"

const OutreachItem = ({ title, href, meta, image, alt, children }) => (
  <article className="outreach-item">
    {image ? (
      <img className="outreach-item__media" src={image} alt={alt || title} loading="lazy" />
    ) : (
      <div className="outreach-item__media outreach-item__media--empty" aria-hidden="true" style={{ background: "var(--paper-warm)" }} />
    )}
    <div className="outreach-item__body">
      {meta && <p className="outreach-item__meta">{meta}</p>}
      <h2 className="outreach-item__title">
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          title
        )}
      </h2>
      {children}
    </div>
  </article>
)

export default OutreachItem
