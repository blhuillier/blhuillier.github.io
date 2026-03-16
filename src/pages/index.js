import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const sections = [
  {
    title: "Research",
    description:
      "Current research themes, cosmological tests, simulations, and publication links.",
    to: "/research",
  },
  {
    title: "Teaching",
    description:
      "Courses, supervision, and teaching philosophy across undergraduate and graduate levels.",
    to: "/teaching",
  },
  {
    title: "The Group",
    description:
      "Physical cosmology group members, current students, and alumni.",
    to: "/thegroup",
  },
  {
    title: "Outreach",
    description:
      "Public talks, science communication, and art-science collaborations.",
    to: "/outreach",
  },
]

const newsItems = [
  {
    date: "2026-01-29",
    text: "Cléa Millard's first paper on tests of the FLRW model was submitted to arXiv.",
  },
  {
    date: "2025-11-17 to 2025-11-21",
    text: "The France-Korea Workshop on Cosmology was hosted at Sejong University.",
  },
  {
    date: "2024-11-14",
    text: "Work on black hole jet alignment with host galaxies was published in Nature Astronomy.",
  },
]

const IndexPage = () => (
  <Layout>
    <div className="homepage">
      <section className="hero">
        <div>
          <p className="hero__eyebrow">Cosmology • Sejong University</p>
          <h1 className="hero__title">Benjamin L&apos;Huillier</h1>
          <p className="hero__subtitle">
            Cosmologist, Assistant Professor, French researcher based in Seoul
          </p>
          <p className="hero__summary">
            I study structure formation and the foundations of cosmology using
            simulations, large-scale structure, and advanced statistical
            methods. My work focuses on testing the concordance model, probing
            gravity, and understanding how galaxies and cosmic structures
            evolve.
          </p>
          <ul className="hero__links">
            <li>
              <a href="https://scholar.google.com/citations?user=vksMsj0AAAAJ">
                Google Scholar
              </a>
            </li>
            <li>
              <a href="https://ui.adsabs.harvard.edu/">NASA ADS</a>
            </li>
            <li>
              <a href="https://orcid.org/0000-0003-2934-6243">ORCID</a>
            </li>
            <li>
              <a href="https://github.com/blhuillier">GitHub</a>
            </li>
          </ul>
        </div>

        <div className="hero__portrait">
          <img
            alt="Portrait placeholder for Benjamin L'Huillier"
            src="/images/profile.jpg"
          />
        </div>
      </section>

      <div className="homepage-grid">
        <section className="stack">
          <div className="content-section">
            <p className="section-label">Overview</p>
            <h2>Current Position and Research Direction</h2>
            <p>
              I am an Assistant Professor in the{" "}
              <a href="https://sejong.elsevierpure.com/en/organisations/department-of-physics-and-astronomy">
                Department of Physics and Astronomy
              </a>{" "}
              at <a href="https://en.sejong.ac.kr/eng/index.do">Sejong University</a>.
              My research is supported by the National Research Foundation of
              Korea and centers on tests of LCDM, dark energy, modified gravity,
              and the use of cosmological simulations to interpret observations.
            </p>
          </div>

          <div className="cards-grid">
            {sections.map((section) => (
              <article className="feature-card" key={section.to}>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <Link className="feature-card__link" to={section.to}>
                  Explore {section.title}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <aside className="stack">
          <section className="news-panel">
            <p className="section-label">Selected Highlights</p>
            <h2>Recent News</h2>
            <ul className="news-list">
              {newsItems.map((item) => (
                <li key={item.date + item.text}>
                  <strong>{item.date}</strong>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="aside-panel">
            <p className="section-label">Affiliations</p>
            <h2>Institutional Links</h2>
            <ul className="link-list">
              <li>
                <a className="link-pill" href="https://en.sejong.ac.kr/eng/index.do">
                  Sejong University
                </a>
              </li>
              <li>
                <a className="link-pill" href="https://kias.re.kr/">
                  KIAS
                </a>
              </li>
              <li>
                <a className="link-pill" href="https://gwuniverse.snu.ac.kr/">
                  CGWU at SNU
                </a>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  </Layout>
)

export default IndexPage
