import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/PageHero"
import SectionFrame from "../components/SectionFrame"

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
          style={{ margin: "0 auto 46px", maxWidth: "820px" }}
        />
      </div>

      <div className="wrap--narrow prose prose--center">
        <p>
          I study structure formation, from galaxies to the large-scale structures of the Universe.
          I use cosmological simulations and advanced statistical tools to answer questions such as:
        </p>
        <ul className="question-list">
          <li>How do galaxies form and evolve?</li>
          <li>What drives the accelerated expansion of the Universe?</li>
          <li>Is Einstein&apos;s General Relativity the correct description of gravity?</li>
          <li>What are the initial conditions of the Universe?</li>
        </ul>
        <p style={{ marginTop: "2em" }}>
          My complete list of publications can be found on{" "}
          <a href="https://ui.adsabs.harvard.edu/#search/q=%20author%3A%22L'Huillier%2C%20Benjamin%22&sort=date%20desc%2C%20bibcode%20desc" {...ext}>NASA/ADS</a>,{" "}
          <a href="http://inspirehep.net/author/profile/B.LHuillier.2" {...ext}>InSPIRE/HEP</a>,{" "}
          <a href="https://scholar.google.com/citations?user=vksMsj0AAAAJ&hl=en" {...ext}>Google Scholar</a>, and{" "}
          <a href="https://orcid.org/0000-0003-2934-6243" {...ext}>ORCID 0000-0003-2934-6243</a> —
          see also the <Link to="/publications/">publications page</Link>.
        </p>
      </div>
    </section>

    <SectionFrame
      title="Testing the Concordance Model of Cosmology"
      image="/images/2param_inverted_edited_edited.png"
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
      description={
        <ul>
          <li>How do galaxies assemble their mass?</li>
          <li>How do galaxies evolve within the large-scale structure?</li>
          <li>What is the connection between AGN activity and host galaxy properties?</li>
        </ul>
      }
    />
  </Layout>
)

export default ResearchPage

export const Head = () => (
  <Seo
    title="Research"
    pathname="/research/"
    description="Testing the concordance model of cosmology, cosmology beyond ΛCDM, cosmological N-body simulations, and galaxy formation and evolution."
  />
)
