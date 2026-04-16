import React from "react"
import Layout from "../components/Layout"
import SummaryFrame from "../components/SummaryFrame"
import SectionFrame from "../components/SectionFrame"

const ResearchPage = () => (
  <Layout>
    <SummaryFrame
      title="Research"
      summary="I study structure formation, from galaxies to the large-scale structures of the Universe. I use cosmological simulations and advanced statistical tools to test the concordance model of cosmology, probe the nature of dark energy and gravity, and understand how galaxies form and evolve."
    />

    <SectionFrame
      title="Testing the Concordance Model of Cosmology"
      description={
        <>
          <p>
            The standard model of cosmology (ΛCDM) rests on assumptions of isotropy and homogeneity,
            a flat FLRW metric, and a cosmological constant as dark energy. I test these assumptions
            using large-scale structure observations, supernovae, and galaxy clusters.
          </p>
          <ul>
            <li>Is the Universe isotropic and homogeneous?</li>
            <li>Is the metric FLRW?</li>
            <li>What is the nature of Dark Energy — is it a cosmological constant?</li>
            <li>What is the curvature of the Universe?</li>
          </ul>
        </>
      }
    />

    <SectionFrame
      title="Cosmology beyond the Concordance Model"
      description={
        <>
          <p>
            I explore extensions to the standard model that could explain the accelerated expansion
            of the Universe without a cosmological constant, and test whether Einstein's General
            Relativity holds on cosmological scales.
          </p>
          <ul>
            <li>What is dark energy?</li>
            <li>Is gravity correctly described by Einstein's General Theory of Relativity?</li>
            <li>Is the primordial power spectrum a pure power law?</li>
          </ul>
        </>
      }
    />

    <SectionFrame
      title="Cosmological Simulations"
      description={
        <>
          <p>
            I use cosmological N-body simulations to study the evolution of galaxies and dark matter
            halos within the Universe's large-scale structure. I contributed to the design and
            analysis of{" "}
            <a href="http://cosmology.kias.re.kr/HR4/" target="_blank" rel="noopener noreferrer">
              Horizon Run 4
            </a>
            , one of the largest cosmological simulations at the time of its release.
          </p>
          <p>
            Simulations allow us to build mock catalogues, test analysis pipelines, and interpret
            observational data in a controlled theoretical framework.
          </p>
        </>
      }
    />

    <SectionFrame
      title="Galaxy Formation & Evolution"
      description={
        <>
          <p>
            I study how galaxies assemble their mass and evolve within the cosmic web, using both
            simulations and observations.
          </p>
          <ul>
            <li>How do galaxies assemble their mass?</li>
            <li>How do galaxies evolve within the large-scale structure?</li>
            <li>What is the connection between AGN activity and host galaxy properties?</li>
          </ul>
        </>
      }
    />

    <SectionFrame
      title="Publications"
      description={
        <>
          <p>My complete list of publications can be found at:</p>
          <ul>
            <li>
              <a
                href="https://ui.adsabs.harvard.edu/#search/q=%20author%3A%22L'Huillier%2C%20Benjamin%22&sort=date%20desc%2C%20bibcode%20desc"
                target="_blank"
                rel="noopener noreferrer"
              >
                NASA/ADS
              </a>
            </li>
            <li>
              <a
                href="http://inspirehep.net/author/profile/B.LHuillier.2"
                target="_blank"
                rel="noopener noreferrer"
              >
                InSPIRE/HEP
              </a>
            </li>
            <li>
              <a
                href="https://scholar.google.com/citations?user=vksMsj0AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar
              </a>
            </li>
            <li>
              ORCID:{" "}
              <a
                href="https://orcid.org/0000-0003-2934-6243"
                target="_blank"
                rel="noopener noreferrer"
              >
                0000-0003-2934-6243
              </a>
            </li>
          </ul>
        </>
      }
    />
  </Layout>
)

export default ResearchPage
