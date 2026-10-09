import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/PageHero"
import SectionFrame from "../components/SectionFrame"
import TeX from "../components/TeX"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const ResearchPage = () => (
  <Layout>
    <PageHero
      title="Research"
      tagline="from forces that shape cosmic expansion to the birth of galaxies"
    />

    <section className="section section--dark section--tight">
      <div className="wrap">
        <img
          src="/images/researchareas_draft03_darker.png"
          alt="Diagram connecting the research areas: dark energy, modified gravity, inflation, large-scale structure and galaxy formation"
          style={{ margin: "0 auto 46px", width: "100%", maxWidth: "820px" }}
        />
      </div>

      <div className="wrap--narrow prose prose--center">
        <p>
          The standard model of cosmology, ΛCDM, is usually tested by fitting it to data, which
          assumes the model is right and then measures its parameters. I take the opposite route:
          reconstruct the history of cosmic expansion and structure growth directly from
          observations, without assuming a model, and check whether ΛCDM is consistent with what
          we find. Alongside these tests, I use cosmological N-body simulations to understand how
          dark matter haloes and galaxies form within the large-scale structure.
        </p>
        <ul className="question-list">
          <li>Is the Universe homogeneous, isotropic and flat?</li>
          <li>What drives the accelerated expansion of the Universe?</li>
          <li>Is Einstein&apos;s General Relativity the correct description of gravity?</li>
          <li>How do galaxies and their black holes grow within the cosmic web?</li>
        </ul>
        <p style={{ marginTop: "2em" }}>
          Key papers are on the <Link to="/publications/">publications page</Link>.
        </p>
      </div>
    </section>

    <section className="section--dark">
      <div className="tile-grid">
        <SectionFrame
          title="Testing the Concordance Model of Cosmology"
          image="/images/2param_inverted_edited_edited.png"
          link="/modeltesting/"
          description={
            <ul>
              <li>Is the Universe isotropic and homogeneous? Is the metric FLRW?</li>
              <li>What is the nature of dark energy? Is it a cosmological constant?</li>
              <li>What is the curvature of the Universe?</li>
            </ul>
          }
        />

        <SectionFrame
          title="Cosmology beyond the Concordance Model"
          image="/images/darkenergy1_edited.jpg"
          description={
            <ul>
              <li>What is dark energy?</li>
              <li>Is gravity correctly described by Einstein&apos;s General Theory of Relativity?</li>
              <li>Is the primordial power spectrum a pure power law?</li>
            </ul>
          }
        />

        <SectionFrame
          title="Cosmological Simulations"
          image="/images/zoom_t91_long.jpg"
          link="/simulations/"
          description={
            <p>
              I use cosmological N-body simulations to study the evolution of galaxies and dark matter
              halos within the Universe&apos;s large-scale structure, and contributed to the design and
              analysis of{" "}
              <a href="http://sdss.kias.re.kr/astro/Horizon-Runs/" {...ext}>Horizon Run 4</a>, one of the
              largest cosmological simulations at the time of its release. Simulations let us build mock
              catalogues, test analysis pipelines, and interpret observations within a controlled
              theoretical framework.
            </p>
          }
        />

        <SectionFrame
          title={"Galaxy Formation & Evolution"}
          image="/images/HR4_1919_1199.jpg"
          link="/galaxy-formation-and-evolution/"
          description={
            <ul>
              <li>How do galaxies assemble their mass?</li>
              <li>How do galaxies evolve within the large-scale structure?</li>
              <li>What is the connection between AGN activity and host galaxy properties?</li>
            </ul>
          }
        />
      </div>
    </section>
    <section className="section section--white">
      <div className="wrap">
        <h2 className="section-title">Selected results</h2>
        <div className="card-grid">
          <article className="card">
            <h3>Is the Universe flat? A test with DESI DR2</h3>
            <p>
              Combining Pantheon+ supernovae with DESI DR2 baryon acoustic oscillations, and
              without assuming any dark energy model, we measure the spatial curvature
              <TeX math={String.raw`\Omega_{k,0} = 0.045^{+0.045}_{-0.081}`} />, consistent with a flat
              FLRW Universe and with Planck 2018.
            </p>
            <a className="card-link" href="https://doi.org/10.1088/1475-7516/2026/08/016" {...ext}>
              Millard, L&apos;Huillier &amp; Douspis, JCAP 2026 →
            </a>
          </article>

          <article className="card">
            <h3>Litmus tests for Rubin and DESI</h3>
            <p>
              Forecasts with LSST supernovae and DESI data show that our reconstruction can
              constrain the curvature and <TeX math={String.raw`c/(H_0 r_\mathrm{d})`} /> to within ±4% and ±0.1,
              without assuming any form of dark energy.
            </p>
            <a className="card-link" href="https://doi.org/10.1088/1475-7516/2025/05/030" {...ext}>
              L&apos;Huillier et al., JCAP 2025 →
            </a>
          </article>

          <article className="card">
            <h3>Testing ΛCDM without assuming it</h3>
            <p>
              Model-independent diagnostics of the FLRW metric and flatness, and of the
              consistency between the expansion history and the growth of structure, applied to
              BAO, supernova and growth data.
            </p>
            <a className="card-link" href="https://doi.org/10.1088/1475-7516/2017/01/015" {...ext}>
              JCAP 2017 · MNRAS 2018 · PRD 2018 →
            </a>
          </article>

          <article className="card">
            <h3>Gaussian processes, done right</h3>
            <p>
              A zero mean function gives unphysical reconstructions and a best-fit ΛCDM mean
              biases them. Marginalising over a family of mean functions and over the
              hyperparameters gives robust results.
            </p>
            <a className="card-link" href="https://doi.org/10.1088/1475-7516/2023/02/014" {...ext}>
              Hwang, L&apos;Huillier et al., JCAP 2023 →
            </a>
          </article>

          <article className="card">
            <h3>Black-hole jets know their host galaxy</h3>
            <p>
              In about 6,000 galaxy–AGN pairs, the parsec-scale jet seen with VLBI is weakly but
              significantly aligned with the minor axis of its kiloparsec-scale host galaxy.
            </p>
            <a className="card-link" href="https://doi.org/10.1038/s41550-024-02407-4" {...ext}>
              Fernández Gil et al., Nature Astronomy 2025 →
            </a>
          </article>

          <article className="card">
            <h3>Haloes beyond General Relativity</h3>
            <p>
              In N-body simulations of f(R) gravity, DGP and coupled dark energy, only strongly
              coupled dark energy raises the rate of halo interactions, and f(R) gravity enhances
              halo spin while weakening spin alignment in interacting pairs.
            </p>
            <a className="card-link" href="https://doi.org/10.1093/mnras/stx700" {...ext}>
              L&apos;Huillier et al., MNRAS 2017 →
            </a>
          </article>
        </div>
      </div>
    </section>

    <section className="section section--paper">
      <div className="wrap--narrow prose">
        <h2 className="section-title">Next five years</h2>
        <p>
          <strong>Gravitational waves as an independent check.</strong> Merging black holes and
          neutron stars give distances through an entirely different physical principle. Adding
          them to the reconstruction gives a cross-check of the expansion history that does not
          rely on supernovae or galaxy clustering.
        </p>
        <p>
          <strong>Model-independent tests at Stage-IV scale.</strong> DESI, the Vera C. Rubin
          Observatory and Euclid will increase data volumes by orders of magnitude. With students
          in my group, I am exploring machine learning and optimal transport to scale
          non-parametric reconstructions to these surveys.
        </p>
        <p>
          <strong>Galaxy clusters and lensing.</strong> Non-parametric estimates of the baryon gas
          fraction and of cosmological bias from clusters, and reconstructions of the matter
          distribution from CMB lensing and 3×2pt data.
        </p>
        <p>
          <strong>France–Korea collaboration.</strong> Building on the PHC STAR partnership with
          the Institut d&apos;Astrophysique Spatiale (CNRS / Université Paris-Saclay) and on joint
          work with KASI, combining early- and late-Universe probes.
        </p>
      </div>
    </section>
  </Layout>
)

export default ResearchPage

export const Head = () => (
  <Seo
    title="Research"
    pathname="/research/"
    description="Model-independent tests of the standard cosmological model with DESI, supernovae and Stage-IV surveys, cosmological N-body simulations, and galaxy and AGN evolution: key results and research programme."
  />
)
