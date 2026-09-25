import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/PageHero"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const GalaxyFormationPage = () => (
  <Layout>
    <PageHero
      title="Galaxy Formation & Evolution"
      image="/images/HR4_1919_1199.jpg"
    />

    <section className="section section--white">
      <div className="wrap--narrow prose">
        <p>
          How do galaxies assemble their mass? How do galaxies evolve within the large-scale
          structure?
        </p>
        <p>
          I used multi-zoom cosmological hydrodynamical simulations to quantify the mass assembled
          through mergers and through smooth gas accretion (
          <a href="https://ui.adsabs.harvard.edu/abs/2012A%26A...544A..68L/abstract" {...ext}>
            L&apos;Huillier, Combes &amp; Semelin 2012
          </a>
          ).
        </p>

        <figure className="figure">
          <img
            src="/images/zoom_t91_long.jpg"
            alt="Zoom on a galaxy cluster in a hydrodynamical simulation"
          />
          <figcaption>
            Zoom on a cluster in a hydrodynamical simulation, from L&apos;Huillier, Combes &amp;
            Semelin (2012), A&amp;A.
          </figcaption>
        </figure>

        <p>
          Using the Horizon Run 4 simulation (
          <a href="https://ui.adsabs.harvard.edu/abs/2015JKAS...48..213K/abstract" {...ext}>
            Kim et al. 2015
          </a>
          ), I quantified the interaction rate — mergers and flybys (
          <a href="https://ui.adsabs.harvard.edu/abs/2015MNRAS.451..527L/abstract" {...ext}>
            L&apos;Huillier, Park &amp; Kim 2015
          </a>
          ) — and the alignments (
          <a href="https://ui.adsabs.harvard.edu/abs/2017MNRAS.466.4875L/abstract" {...ext}>
            L&apos;Huillier, Park &amp; Kim 2017
          </a>
          ) of haloes as a function of their environment (mass and large-scale density).
        </p>
        <p>
          In a study led by David Fernández Gil and published in Nature Astronomy, we detected a weak
          but significant alignment between the central region of AGN jets, as seen by very long
          baseline interferometry, and the optical shape of their host galaxies from various surveys
          (
          <a href="https://ui.adsabs.harvard.edu/abs/2025NatAs...9..302F/abstract" {...ext}>
            Fernández Gil et al. 2025, Nat. Astron.
          </a>
          ).
        </p>

        <p className="back-link">
          <Link to="/research/">← Back to research</Link>
        </p>
      </div>
    </section>
  </Layout>
)

export default GalaxyFormationPage

export const Head = () => (
  <Seo
    title="Galaxy Formation and Evolution"
    pathname="/galaxy-formation-and-evolution/"
    description="Galaxy mass assembly through mergers and smooth accretion, halo interactions and alignments in Horizon Run 4, and AGN–host galaxy alignments."
  />
)
