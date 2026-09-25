import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/PageHero"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const profiles = [
  {
    name: "NASA / ADS",
    description: "Complete publication record indexed by the Astrophysics Data System.",
    href: "https://ui.adsabs.harvard.edu/#search/q=%20author%3A%22L'Huillier%2C%20Benjamin%22&sort=date%20desc%2C%20bibcode%20desc",
  },
  {
    name: "InSPIRE / HEP",
    description: "High-energy physics and cosmology publication profile.",
    href: "http://inspirehep.net/author/profile/B.LHuillier.2",
  },
  {
    name: "Google Scholar",
    description: "Citation profile and publication list.",
    href: "https://scholar.google.com/citations?user=vksMsj0AAAAJ&hl=en",
  },
  {
    name: "ORCID",
    description: "0000-0003-2934-6243 — persistent researcher identifier.",
    href: "https://orcid.org/0000-0003-2934-6243",
  },
  {
    name: "ResearchGate",
    description: "Preprints, full texts, and project updates.",
    href: "https://www.researchgate.net/profile/Benjamin-Lhuillier",
  },
  {
    name: "arXiv",
    description: "Preprints as they are posted.",
    href: "https://arxiv.org/a/lhuillier_b_1",
  },
]

const PublicationsPage = () => (
  <Layout>
    <PageHero title="Publications" tagline="the record, kept where it is kept best" />

    <section className="section section--paper">
      <div className="wrap--narrow prose prose--center">
        <p>
          The most complete and up-to-date lists of my publications are maintained by the indexing
          services below.
        </p>
      </div>

      <div className="wrap" style={{ marginTop: "40px" }}>
        <div className="card-grid">
          {profiles.map((profile) => (
            <article className="card" key={profile.href}>
              <h3>{profile.name}</h3>
              <p>{profile.description}</p>
              <a className="card-link" href={profile.href} {...ext}>
                Open {profile.name} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
)

export default PublicationsPage

export const Head = () => (
  <Seo
    title="Publications"
    pathname="/publications/"
    description="Publication lists for Benjamin L'Huillier on NASA/ADS, InSPIRE/HEP, Google Scholar, ORCID, ResearchGate and arXiv."
  />
)
