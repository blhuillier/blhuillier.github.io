import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/PageHero"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const ModelTestingPage = () => (
  <Layout>
    <PageHero
      title="Testing the Concordance Model of Cosmology"
      image="/images/2param_inverted_edited_edited.png"
    />

    <section className="section section--white">
      <div className="wrap--narrow prose">
        <p>The concordance model of cosmology is built on several assumptions:</p>
        <ul>
          <li>the Universe is homogeneous and isotropic;</li>
          <li>gravity is described by General Relativity (GR).</li>
        </ul>
        <p>
          Under these assumptions, the metric of the Universe is the
          Friedmann–Lemaître–Robertson–Walker (FLRW) metric, describing an expanding universe.
        </p>
        <p>
          Within this framework, the current concordance model is ΛCDM: the energy budget is
          dominated by the cosmological constant Λ, responsible for the late-time acceleration of the
          expansion, and matter is dominated by a cold, smooth, non-baryonic component — dark matter.
          However, neither component has been directly detected, and neither is part of the standard
          model of particle physics. One may therefore question the underlying hypotheses: Is FLRW
          the correct metric? Is the Universe isotropic and homogeneous? Is dark energy a
          cosmological constant?
        </p>

        <h2 className="section-title" style={{ marginTop: "2.4em" }}>
          Testing the FLRW metric &amp; the curvature
        </h2>
        <p>
          Combining model-independent reconstructions of the expansion history h(z) = H(z)/H
          <sub>0</sub> from the Joint Light-curve Analysis (JLA) supernovae with baryon acoustic
          oscillation measurements from the Baryon Oscillation Spectroscopic Survey (SDSS-III/BOSS),
          Arman Shafieloo and I measured, in a model-independent way, the combination of the Hubble
          constant H<sub>0</sub> and the sound horizon at the drag epoch r<sub>d</sub>. We then
          introduced a new litmus test of the flat-FLRW metric, Θ(z), related to the Clarkson test
          through O<sub>k</sub>(z) = (Θ<sup>2</sup>(z) − 1) / D<sup>2</sup>(z). For a flat FLRW
          universe, Θ = 1 and O<sub>k</sub> = 0.
        </p>
        <p>
          Our results are consistent with a flat-FLRW Universe, but show some hint of tension in the
          CMASS subsample (
          <a href="https://ui.adsabs.harvard.edu/abs/2017JCAP...01..015L/abstract" {...ext}>
            L&apos;Huillier &amp; Shafieloo, JCAP 01 (2017) 015
          </a>
          ).
        </p>

        <h2 className="section-title" style={{ marginTop: "2.4em" }}>
          Model-independent test of GR
        </h2>
        <p>
          With Arman Shafieloo and Hyungjin Kim (University of Waterloo), we combined these
          independent reconstructions with growth measurements from redshift-space distortions, and
          put model-independent constraints on the matter density Ω<sub>m</sub>, the rms fluctuation
          σ<sub>8</sub>, and the growth index γ. For GR, γ = 0.55. Our results are consistent with
          ΛCDM + GR (
          <a href="https://ui.adsabs.harvard.edu/abs/2018MNRAS.476.3263L/abstract" {...ext}>
            L&apos;Huillier, Shafieloo &amp; Kim 2018, MNRAS 476, 3263
          </a>
          ).
        </p>
        <p>
          With Arman Shafieloo and Alexei Starobinsky, we then combined the latest type Ia supernova
          data (Pantheon) with growth measurements (including eBOSS DR14Q) and obtained more
          stringent constraints, still consistent with ΛCDM + GR (
          <a href="https://ui.adsabs.harvard.edu/abs/2018PhRvD..98h3526S/abstract" {...ext}>
            Shafieloo, L&apos;Huillier &amp; Starobinsky 2018, PRD 98, 083526
          </a>
          ).
        </p>

        <figure className="figure figure--narrow">
          <img
            src="/images/lcdm-tests-2018.png"
            alt="Constraints on the growth index gamma and sigma_8 from model-independent tests of ΛCDM"
          />
          <figcaption>
            Tests of the ΛCDM model — Shafieloo, L&apos;Huillier &amp; Starobinsky (2018), Physical
            Review D.
          </figcaption>
        </figure>

        <p className="back-link">
          <Link to="/research/">← Back to research</Link>
        </p>
      </div>
    </section>
  </Layout>
)

export default ModelTestingPage

export const Head = () => (
  <Seo
    title="Testing the Concordance Model of Cosmology"
    pathname="/modeltesting/"
    description="Model-independent tests of the FLRW metric, spatial curvature and General Relativity using supernovae, BAO and growth data."
  />
)
