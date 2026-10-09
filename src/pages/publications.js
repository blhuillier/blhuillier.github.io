import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/PageHero"
import { getPaper } from "../data/papers"
import { Authors, PaperLinks } from "../components/PaperSummary"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const profiles = [
  ["NASA/ADS", "https://ui.adsabs.harvard.edu/#search/q=%20author%3A%22L'Huillier%2C%20Benjamin%22&sort=date%20desc%2C%20bibcode%20desc"],
  ["InSPIRE/HEP", "http://inspirehep.net/author/profile/B.LHuillier.2"],
  ["Google Scholar", "https://scholar.google.com/citations?user=vksMsj0AAAAJ&hl=en"],
  ["ORCID: 0000-0003-2934-6243", "https://orcid.org/0000-0003-2934-6243"],
  ["ResearchGate", "https://www.researchgate.net/profile/Benjamin-Lhuillier"],
  ["arXiv", "https://arxiv.org/a/lhuillier_b_1"],
]

// Selected publications: ids from src/data/papers.js (the single source for all papers).
const groups = [
  {
    title: "Model-independent tests of the cosmological model",
    ids: [
      "millard2026-flrw",
      "lhuillier2025-litmus",
      "hwang2023-gp",
      "calderon2021-neglambda",
      "shafieloo2018-falsifying",
      "lhuillier2018-growth",
      "lhuillier2017-flrw",
    ],
  },
  {
    title: "Cosmological simulations and structure formation",
    ids: ["lhuillier2017-modgrav", "kim2015-hr4", "lhuillier2014-ic", "lhuillier2012-accretion"],
  },
  {
    title: "Galaxies and AGN",
    ids: ["fernandezgil2025-alignment"],
  },
]

const PublicationsPage = () => (
  <Layout>
    <PageHero title="Publications" />

    <section className="section section--paper">
      <div className="wrap--narrow">
        <h2 className="section-title">Selected publications</h2>
        <p className="pub-legend">
          * corresponding author · † student or junior researcher I supervised or co-supervised
        </p>

        {groups.map((g) => (
          <div className="pub-group" key={g.title}>
            <h3 className="pub-group__title">{g.title}</h3>
            <ol className="pub-list">
              {g.ids.map(getPaper).filter(Boolean).map((p) => (
                <li key={p.id}>
                  <span className="pub-authors"><Authors list={p.authors} /></span>{" "}
                  ({p.year}). <span className="pub-title">{p.title}</span>.{" "}
                  <em>{p.journal || "arXiv preprint"}</em>. <PaperLinks paper={p} />
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>

    <section className="section section--white">
      <div className="wrap--narrow prose prose--center">
        <h2 className="section-title">Full list</h2>
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
    description="Selected publications of Benjamin L'Huillier on model-independent tests of the cosmological model, cosmological simulations and AGN, with links to the full lists on NASA/ADS, InSPIRE/HEP and Google Scholar."
  />
)
