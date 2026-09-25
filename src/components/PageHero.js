import React from "react"

const PageHero = ({ title, tagline, image }) => (
  <section
    className={`page-hero${image ? "" : " page-hero--plain"}`}
    style={image ? { backgroundImage: `url("${image}")` } : undefined}
  >
    <div className="page-hero__inner">
      <h1 className="page-hero__title">{title}</h1>
      {tagline && <p className="page-hero__tagline">{tagline}</p>}
    </div>
  </section>
)

export default PageHero
