import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import PageHero from "../../components/PageHero"
import { getPaper } from "../../data/papers"
import { Authors, PaperLinks } from "../../components/PaperSummary"
import { RichText } from "../../components/TeX"
import { profiles, groups } from "../../data/selected"

const ext = { target: "_blank", rel: "noopener noreferrer" }

// Same order as the groups in src/data/selected.js
const groupTitles = [
  "Tests du modèle cosmologique indépendants de tout modèle",
  "Simulations cosmologiques et formation des structures",
  "Galaxies et AGN",
]

const PublicationsPageFr = () => (
  <Layout lang="fr">
    <PageHero title="Publications" />

    <section className="section section--paper">
      <div className="wrap--narrow">
        <h2 className="section-title">Publications choisies</h2>
        <p className="pub-legend">
          * auteur correspondant · † étudiant ou jeune chercheur que j’ai encadré ou co-encadré
        </p>

        {groups.map((g, gi) => (
          <div className="pub-group" key={g.title}>
            <h3 className="pub-group__title">{groupTitles[gi] || g.title}</h3>
            <ol className="pub-list">
              {g.ids.map(getPaper).filter(Boolean).map((p) => (
                <li key={p.id}>
                  <span className="pub-authors"><Authors list={p.authors} /></span>{" "}
                  ({p.year}). <span className="pub-title"><RichText text={p.title} /></span>.{" "}
                  <em>{p.journal || "prépublication arXiv"}</em>. <PaperLinks paper={p} />
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>

    <section className="section section--white">
      <div className="wrap--narrow prose prose--center">
        <h2 className="section-title">Liste complète</h2>
        <p>La liste complète et à jour de mes publications est disponible sur&nbsp;:</p>
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

export default PublicationsPageFr

export const Head = () => (
  <Seo
    title="Publications"
    pathname="/fr/publications/"
    description="Publications choisies de Benjamin L’Huillier : tests du modèle cosmologique indépendants de tout modèle, simulations cosmologiques et AGN, avec liens vers les listes complètes sur NASA/ADS, InSPIRE/HEP et Google Scholar."
  />
)
