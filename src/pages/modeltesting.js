import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/PageHero"
import { PaperList } from "../components/PaperSummary"
import TeX from "../components/TeX"

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
          Within this framework, the current concordance model is <TeX math={String.raw`\Lambda`} />CDM: the energy budget is
          dominated by the cosmological constant <TeX math={String.raw`\Lambda`} />, responsible for the late-time acceleration of the
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
          Combining model-independent reconstructions of the expansion history <TeX math={String.raw`h(z) = H(z)/H_0`} /> from the Joint Light-curve Analysis (JLA) supernovae with baryon acoustic
          oscillation measurements from the Baryon Oscillation Spectroscopic Survey (SDSS-III/BOSS),
          Arman Shafieloo and I measured, in a model-independent way, the combination of the Hubble
          constant <TeX math={String.raw`H_0`} /> and the sound horizon at the drag epoch <TeX math={String.raw`r_\mathrm{d}`} />. We then
          introduced a new litmus test of the flat-FLRW metric, <TeX math={String.raw`\Theta(z)`} />, related to the
          Clarkson test <TeX math={String.raw`\mathcal{O}_k(z)`} /> through
        </p>
        <TeX block math={String.raw`\mathcal{O}_k(z) = \frac{\Theta^2(z) - 1}{\mathcal{D}^2(z)}, \qquad \Theta(z) \equiv h(z)\,\mathcal{D}'(z) \overset{\text{FLRW}}{=} \sqrt{1 + \Omega_{k,0}\,\mathcal{D}^2(z)},`} />
        <p>
          where <TeX math={String.raw`\mathcal{D}`} /> is the comoving distance in units of{" "}
          <TeX math={String.raw`c/H_0`} />. In an FLRW universe{" "}
          <TeX math={String.raw`\mathcal{O}_k = \Omega_{k,0}`} /> at all redshifts; if it is also
          flat, <TeX math={String.raw`\Theta = 1`} /> and <TeX math={String.raw`\mathcal{O}_k = 0`} />.
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
          put model-independent constraints on the matter density <TeX math={String.raw`\Omega_\mathrm{m}`} />, the rms
          fluctuation <TeX math={String.raw`\sigma_8`} />, and the growth index <TeX math={String.raw`\gamma`} />, defined by
        </p>
        <TeX block math={String.raw`f(z) \equiv \frac{\mathrm{d}\ln\delta}{\mathrm{d}\ln a} \simeq \Omega_\mathrm{m}(z)^{\gamma},`} />
        <p>
          with <TeX math={String.raw`\gamma \simeq 0.55`} /> in GR. Our results are consistent with <TeX math={String.raw`\Lambda`} />CDM + GR (
          <a href="https://ui.adsabs.harvard.edu/abs/2018MNRAS.476.3263L/abstract" {...ext}>
            L&apos;Huillier, Shafieloo &amp; Kim 2018, MNRAS 476, 3263
          </a>
          ).
        </p>
        <p>
          With Arman Shafieloo and Alexei Starobinsky, we then combined the latest type Ia supernova
          data (Pantheon) with growth measurements (including eBOSS DR14Q) and obtained more
          stringent constraints, still consistent with <TeX math={String.raw`\Lambda`} />CDM + GR (
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

        <h2 className="section-title" style={{ marginTop: "2.4em" }}>
          Papers on testing the cosmological model
        </h2>
        <PaperList tag="model-testing" />

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
