import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/PageHero"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const SimulationsPage = () => (
  <Layout>
    <PageHero
      title="Cosmological Simulations"
      image="/images/zoom_t91_long.jpg"
    />

    <section className="section section--white">
      <div className="wrap--narrow prose">
        <p>
          My main research tool is cosmological simulations, which I use to study the evolution of
          galaxies and their dark matter haloes within the large-scale structure of the Universe.
        </p>
        <ul>
          <li>
            I studied the effects of the initial conditions on the large-scale structure — the
            matter power spectrum, the halo mass function, and the distribution of structures (
            <a href="https://ui.adsabs.harvard.edu/abs/2014NewA...30...79L/abstract" {...ext}>
              L&apos;Huillier, Park &amp; Kim 2014
            </a>
            ).
          </li>
          <li>
            I participated in the design and analysis of the Horizon Run 4 simulation (HR4,{" "}
            <a href="https://ui.adsabs.harvard.edu/abs/2015JKAS...48..213K/abstract" {...ext}>
              Kim et al. 2015
            </a>
            ).
          </li>
          <li>
            I used HR4 to study galaxy evolution within its environment (
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
            I studied the effect of the primordial power spectrum on the large-scale structure at low
            redshift (
            <a href="https://ui.adsabs.harvard.edu/abs/2018MNRAS.477.2503L/abstract" {...ext}>
              L&apos;Huillier et al. 2018
            </a>
            ).
          </li>
        </ul>
        <p className="back-link">
          <Link to="/research/">← Back to research</Link>
        </p>
      </div>
    </section>
  </Layout>
)

export default SimulationsPage

export const Head = () => (
  <Seo
    title="Cosmological Simulations"
    pathname="/simulations/"
    description="Cosmological N-body simulations: initial conditions, the Horizon Run 4 simulation, halo environment, and the primordial power spectrum."
  />
)
