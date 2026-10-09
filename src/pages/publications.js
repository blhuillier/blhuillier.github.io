import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/PageHero"
import { getPaper } from "../data/papers"
import { Authors, PaperLinks } from "../components/PaperSummary"
import { RichText } from "../components/TeX"
import { profiles, groups } from "../data/selected"

const ext = { target: "_blank", rel: "noopener noreferrer" }

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
                  ({p.year}). <span className="pub-title"><RichText text={p.title} /></span>.{" "}
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
