import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import PageHero from "../../components/PageHero"
import SocialBar from "../../components/SocialBar"

const ContactPageFr = () => (
  <Layout lang="fr">
    <PageHero title="Contact" tagline="où me trouver" />

    <section className="section section--paper">
      <div className="wrap--narrow contact-band">
        <p className="label">Adresse</p>
        <p>Département de physique et d’astronomie</p>
        <p>Université Sejong</p>
        <p>Gwangjin-gu, Neungdong-ro 209</p>
        <p>Séoul 05006, Corée du Sud</p>

        <p className="label" style={{ marginTop: "2em" }}>E-mail</p>
        <p>
          <a href="mailto:benjamin@sejong.ac.kr">benjamin@sejong.ac.kr</a>
        </p>

        <p className="label" style={{ marginTop: "2em" }}>Sur le web</p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: ".6em" }}>
          <SocialBar />
        </div>

        <p style={{ marginTop: "2.4em" }}>
          Je suis toujours heureux d’échanger avec des étudiants motivés et de futurs
          collaborateurs. Si vous souhaitez rejoindre le groupe, écrivez-moi en décrivant brièvement
          vos centres d’intérêt et en joignant un CV.
        </p>
      </div>
    </section>
  </Layout>
)

export default ContactPageFr

export const Head = () => (
  <Seo
    title="Contact"
    pathname="/fr/contact/"
    description="Contacter Benjamin L’Huillier — Département de physique et d’astronomie, Université Sejong, Séoul, Corée du Sud."
  />
)
