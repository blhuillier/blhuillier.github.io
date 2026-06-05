import React from "react"
import Layout from "../components/Layout"

const publicationProfiles = [
  {
    name: "NASA/ADS",
    description: "Complete publication record indexed by the Astrophysics Data System.",
    href: "https://ui.adsabs.harvard.edu/#search/q=%20author%3A%22L'Huillier%2C%20Benjamin%22&sort=date%20desc%2C%20bibcode%20desc",
  },
  {
    name: "InSPIRE/HEP",
    description: "High-energy physics and cosmology publication profile.",
    href: "http://inspirehep.net/author/profile/B.LHuillier.2",
  },
  {
    name: "Google Scholar",
    description: "Citation profile and publication list maintained by Google Scholar.",
    href: "https://scholar.google.com/citations?user=vksMsj0AAAAJ&hl=en",
  },
]

const PublicationsPage = () => (
  <Layout>
    <h1 className="page-title">Publications</h1>
    <p className="page-intro">
      The most complete and up-to-date lists of my publications are maintained
      by the research indexing services below.
    </p>

    <section className="cards-grid" aria-label="Publication profiles">
      {publicationProfiles.map((profile) => (
        <article className="feature-card" key={profile.href}>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
          <a
            className="feature-card__link"
            href={profile.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            View {profile.name}
          </a>
        </article>
      ))}
    </section>
  </Layout>
)

export default PublicationsPage
