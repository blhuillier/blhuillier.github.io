import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import PageHero from "../../components/PageHero"
import { PaperList } from "../../components/PaperSummary"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const SimulationsPageFr = () => (
  <Layout lang="fr">
    <PageHero title="Simulations cosmologiques" image="/images/zoom_t91_long.jpg" />

    <section className="section section--white">
      <div className="wrap--narrow prose">
        <p>
          Mon principal outil de recherche est la simulation cosmologique, que j’utilise pour
          étudier l’évolution des galaxies et de leurs halos de matière noire au sein de la structure
          à grande échelle de l’Univers.
        </p>
        <ul>
          <li>
            J’ai étudié l’effet des conditions initiales sur la structure à grande échelle — le
            spectre de puissance de la matière, la fonction de masse des halos et la distribution des
            structures (
            <a href="https://ui.adsabs.harvard.edu/abs/2014NewA...30...79L/abstract" {...ext}>
              L&apos;Huillier, Park &amp; Kim 2014
            </a>
            ).
          </li>
          <li>
            J’ai participé à la conception et à l’analyse de la simulation Horizon Run 4 (HR4,{" "}
            <a href="https://ui.adsabs.harvard.edu/abs/2015JKAS...48..213K/abstract" {...ext}>
              Kim et al. 2015
            </a>
            ).
          </li>
          <li>
            J’ai utilisé HR4 pour étudier l’évolution des galaxies dans leur environnement (
            <a href="https://ui.adsabs.harvard.edu/abs/2015MNRAS.451..527L/abstract" {...ext}>
              L&apos;Huillier et al. 2015
            </a>
            ,{" "}
            <a href="https://ui.adsabs.harvard.edu/abs/2017MNRAS.466.4875L/abstract" {...ext}>
              2017a
            </a>
            ).
          </li>
          <li>
            J’ai étudié l’effet du spectre de puissance primordial sur la structure à grande échelle
            à bas redshift (
            <a href="https://ui.adsabs.harvard.edu/abs/2018MNRAS.477.2503L/abstract" {...ext}>
              L&apos;Huillier et al. 2018
            </a>
            ).
          </li>
        </ul>
        <h2 className="section-title" style={{ marginTop: "2.4em" }}>
          Articles fondés sur des simulations
        </h2>
        <p className="pub-legend">Les résumés des articles sont en anglais.</p>
        <PaperList tag="simulations" lang="fr" />

        <p className="back-link">
          <Link to="/fr/research/">← Retour à la recherche</Link>
        </p>
      </div>
    </section>
  </Layout>
)

export default SimulationsPageFr

export const Head = () => (
  <Seo
    title="Simulations cosmologiques"
    pathname="/fr/simulations/"
    description="Simulations cosmologiques à N corps : conditions initiales, la simulation Horizon Run 4, l’environnement des halos et le spectre de puissance primordial."
  />
)
