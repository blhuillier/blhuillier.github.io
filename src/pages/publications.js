import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/PageHero"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const profiles = [
  ["NASA/ADS", "https://ui.adsabs.harvard.edu/#search/q=%20author%3A%22L'Huillier%2C%20Benjamin%22&sort=date%20desc%2C%20bibcode%20desc"],
  ["InSPIRE/HEP", "http://inspirehep.net/author/profile/B.LHuillier.2"],
  ["Google Scholar", "https://scholar.google.com/citations?user=vksMsj0AAAAJ&hl=en"],
  ["ORCID: 0000-0003-2934-6243", "https://orcid.org/0000-0003-2934-6243"],
  ["ResearchGate", "https://www.researchgate.net/profile/Benjamin-Lhuillier"],
  ["arXiv", "https://arxiv.org/a/lhuillier_b_1"],
]

const PublicationsPage = () => (
  <Layout>
    <PageHero title="Publications" />

    <section className="section section--paper">
      <div className="wrap--narrow prose prose--center">
        <p>My complete and up-to-date list of publications can be found on:</p>
        <ul className="plain-links">
          {profiles.map(([label, href]) => (
            <li key={href}>
              <a href={href} {...ext}>{label}</a>
            </li>
          ))}
        </ul>
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
