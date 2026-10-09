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

// Selected publications. Authors as on the paper; "me" is set in bold.
// role: "*" = corresponding author; trainee: supervised student / junior researcher (marked †)
const ME = "L'Huillier, B."

const groups = [
  {
    title: "Model-independent tests of the cosmological model",
    papers: [
      {
        authors: ["Millard, C.†", ME + "*", "Douspis, M."],
        year: 2026,
        title: "Model independent test of the FLRW metric and the curvature in light of DESI DR2",
        journal: "JCAP 08 (2026) 016",
        doi: "10.1088/1475-7516/2026/08/016",
        arxiv: "2601.20293",
      },
      {
        authors: [ME, "Mitra, A.", "Shafieloo, A.", "Keeley, R. E.", "Koo, H."],
        year: 2025,
        title: "Litmus tests of the flat ΛCDM model and model-independent measurement of H₀r_d with LSST and DESI",
        journal: "JCAP 05 (2025) 030",
        doi: "10.1088/1475-7516/2025/05/030",
        arxiv: "2407.07847",
      },
      {
        authors: ["Hwang, S.†", ME + "*", "Keeley, R. E.", "Jee, M. J.", "Shafieloo, A."],
        year: 2023,
        title: "How to use GP: effects of the mean function and hyperparameter selection on Gaussian process regression",
        journal: "JCAP 02 (2023) 014",
        doi: "10.1088/1475-7516/2023/02/014",
        arxiv: "2206.15081",
      },
      {
        authors: ["Calderón, R.", "Gannouji, R.", ME + "*", "Polarski, D."],
        year: 2021,
        title: "Negative cosmological constant in the dark sector?",
        journal: "Phys. Rev. D 103 (2021) 023526",
        doi: "10.1103/PhysRevD.103.023526",
        arxiv: "2008.10237",
      },
      {
        authors: ["Shafieloo, A.", ME + "*", "Starobinsky, A. A."],
        year: 2018,
        title: "Falsifying ΛCDM: model-independent tests of the concordance model with eBOSS DR14Q and Pantheon",
        journal: "Phys. Rev. D 98 (2018) 083526",
        doi: "10.1103/PhysRevD.98.083526",
        arxiv: "1804.04320",
      },
      {
        authors: [ME, "Shafieloo, A.", "Kim, H.†"],
        year: 2018,
        title: "Model-independent cosmological constraints from growth and expansion",
        journal: "MNRAS 476 (2018) 3263",
        doi: "10.1093/mnras/sty398",
        arxiv: "1712.04865",
      },
      {
        authors: [ME, "Shafieloo, A."],
        year: 2017,
        title: "Model-independent test of the FLRW metric, the flatness of the Universe, and non-local measurement of H₀r_d",
        journal: "JCAP 01 (2017) 015",
        doi: "10.1088/1475-7516/2017/01/015",
        arxiv: "1606.06832",
      },
    ],
  },
  {
    title: "Cosmological simulations and structure formation",
    papers: [
      {
        authors: [ME, "Winther, H. A.", "Mota, D. F.", "Park, C.", "Kim, J."],
        year: 2017,
        title: "Dark matter haloes in modified gravity and dark energy: interaction rate, small- and large-scale alignment",
        journal: "MNRAS 468 (2017) 3174",
        doi: "10.1093/mnras/stx700",
        arxiv: "1703.07357",
      },
      {
        authors: ["Kim, J.", "Park, C.", ME, "Hong, S. E."],
        year: 2015,
        title: "Horizon Run 4 simulation: coupled evolution of galaxies and large-scale structures of the Universe",
        journal: "J. Korean Astron. Soc. 48 (2015) 213",
        doi: "10.5303/JKAS.2015.48.4.213",
        arxiv: "1508.05107",
      },
      {
        authors: [ME, "Park, C.", "Kim, J."],
        year: 2014,
        title: "Effects of the initial conditions on cosmological N-body simulations",
        journal: "New Astron. 30 (2014) 79",
        doi: "10.1016/j.newast.2014.01.007",
        arxiv: "1401.6180",
      },
      {
        authors: [ME, "Combes, F.", "Semelin, B."],
        year: 2012,
        title: "Mass assembly of galaxies: smooth accretion versus mergers",
        journal: "A&A 544 (2012) A68",
        doi: "10.1051/0004-6361/201117924",
        arxiv: "1108.4247",
      },
    ],
  },
  {
    title: "Galaxies and AGN",
    papers: [
      {
        authors: ["Fernández Gil, D.†", "Hodgson, J. A.", ME, "Asorey, J.", "Saulder, C.", "Finner, K.", "et al."],
        year: 2025,
        title: "Detection of an orthogonal alignment between parsec-scale AGN jets and their host galaxies",
        journal: "Nature Astronomy 9 (2025) 302",
        doi: "10.1038/s41550-024-02407-4",
        arxiv: "2411.09099",
      },
    ],
  },
]

const Authors = ({ list }) =>
  list.map((a, i) => (
    <React.Fragment key={a + i}>
      {i > 0 && ", "}
      {a.startsWith(ME) ? <strong>{a}</strong> : a}
    </React.Fragment>
  ))

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
              {g.papers.map((p) => (
                <li key={p.doi}>
                  <span className="pub-authors"><Authors list={p.authors} /></span>{" "}
                  ({p.year}). <span className="pub-title">{p.title}</span>.{" "}
                  <em>{p.journal}</em>.{" "}
                  <span className="pub-links">
                    <a href={`https://doi.org/${p.doi}`} {...ext}>DOI</a>
                    {" · "}
                    <a href={`https://arxiv.org/abs/${p.arxiv}`} {...ext}>arXiv:{p.arxiv}</a>
                  </span>
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
