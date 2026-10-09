import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import PageHero from "../../components/PageHero"
import { PaperList } from "../../components/PaperSummary"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const GalaxyFormationPageFr = () => (
  <Layout lang="fr">
    <PageHero title="Formation et évolution des galaxies" image="/images/HR4_1919_1199.jpg" />

    <section className="section section--white">
      <div className="wrap--narrow prose">
        <p>
          Comment les galaxies assemblent-elles leur masse&nbsp;? Comment évoluent-elles au sein de
          la structure à grande échelle&nbsp;?
        </p>
        <p>
          J’ai utilisé des simulations cosmologiques hydrodynamiques multi-zoom pour quantifier la
          masse assemblée par fusions et par accrétion diffuse de gaz (
          <a href="https://ui.adsabs.harvard.edu/abs/2012A%26A...544A..68L/abstract" {...ext}>
            L&apos;Huillier, Combes &amp; Semelin 2012
          </a>
          ).
        </p>

        <figure className="figure">
          <img
            src="/images/zoom_t91_long.jpg"
            alt="Zoom sur un amas de galaxies dans une simulation hydrodynamique"
          />
          <figcaption>
            Zoom sur un amas dans une simulation hydrodynamique, d’après L&apos;Huillier, Combes
            &amp; Semelin (2012), A&amp;A.
          </figcaption>
        </figure>

        <p>
          À l’aide de la simulation Horizon Run 4 (
          <a href="https://ui.adsabs.harvard.edu/abs/2015JKAS...48..213K/abstract" {...ext}>
            Kim et al. 2015
          </a>
          ), j’ai quantifié le taux d’interaction des halos — fusions et passages rapprochés (
          <a href="https://ui.adsabs.harvard.edu/abs/2015MNRAS.451..527L/abstract" {...ext}>
            L&apos;Huillier, Park &amp; Kim 2015
          </a>
          ) — et leurs alignements (
          <a href="https://ui.adsabs.harvard.edu/abs/2017MNRAS.466.4875L/abstract" {...ext}>
            L&apos;Huillier, Park &amp; Kim 2017
          </a>
          ) en fonction de leur environnement (masse et densité à grande échelle).
        </p>
        <p>
          Dans une étude menée par David Fernández Gil et publiée dans Nature Astronomy, nous avons
          détecté un alignement faible mais significatif entre la région centrale des jets d’AGN,
          observée par interférométrie à très longue base, et la forme optique de leurs galaxies
          hôtes dans plusieurs relevés (
          <a href="https://ui.adsabs.harvard.edu/abs/2025NatAs...9..302F/abstract" {...ext}>
            Fernández Gil et al. 2025, Nat. Astron.
          </a>
          ).
        </p>

        <h2 className="section-title" style={{ marginTop: "2.4em" }}>
          Articles sur les galaxies et les AGN
        </h2>
        <p className="pub-legend">Les résumés des articles sont en anglais.</p>
        <PaperList tags={["galaxies", "agn"]} lang="fr" />

        <p className="back-link">
          <Link to="/fr/research/">← Retour à la recherche</Link>
        </p>
      </div>
    </section>
  </Layout>
)

export default GalaxyFormationPageFr

export const Head = () => (
  <Seo
    title="Formation et évolution des galaxies"
    pathname="/fr/galaxy-formation-and-evolution/"
    description="Assemblage de la masse des galaxies par fusions et accrétion diffuse, interactions et alignements des halos dans Horizon Run 4, et alignements entre AGN et galaxies hôtes."
  />
)
