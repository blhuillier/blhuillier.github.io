import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/PageHero"
import SocialBar from "../components/SocialBar"

const ContactPage = () => (
  <Layout>
    <PageHero title="Contact" tagline="where to find me" />

    <section className="section section--paper">
      <div className="wrap--narrow contact-band">
        <p className="label">Address</p>
        <p>Department of Physics and Astronomy</p>
        <p>Sejong University</p>
        <p>Gwangjin-gu, Neungdong-ro 209</p>
        <p>Seoul 05006, South Korea</p>

        <p className="label" style={{ marginTop: "2em" }}>Email</p>
        <p>
          <a href="mailto:benjamin@sejong.ac.kr">benjamin@sejong.ac.kr</a>
        </p>

        <p className="label" style={{ marginTop: "2em" }}>Elsewhere</p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: ".6em" }}>
          <SocialBar />
        </div>

        <p style={{ marginTop: "2.4em" }}>
          I am always happy to hear from motivated students and from potential collaborators. If you
          are interested in joining the group, please write with a short description of your
          interests and a CV.
        </p>
      </div>
    </section>
  </Layout>
)

export default ContactPage

export const Head = () => (
  <Seo
    title="Contact"
    pathname="/contact/"
    description="Contact Benjamin L'Huillier — Department of Physics and Astronomy, Sejong University, Seoul, South Korea."
  />
)
