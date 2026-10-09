import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import PageHero from "../../components/PageHero"
import OutreachItem from "../../components/OutreachItem"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const OutreachPageFr = () => (
  <Layout lang="fr">
    <PageHero
      title="Médiation scientifique"
      tagline="la science en public, en deux langues"
      image="/images/outreach_edited.jpg"
    />

    <section className="section section--white">
      <div className="wrap--narrow prose">
        <p>
          Ma démarche de médiation mêle éducation, échanges culturels et expérimentation créative.
          De 2024 à 2026, j’ai encadré des lycéens préparant les Olympiades de Physique France, et je
          donne régulièrement des conférences dans des établissements scolaires et des lieux
          publics. J’ai animé des ateliers pratiques de cosmologie, contribué à des programmes
          éducatifs bilingues et donné des conférences invitées dans des écoles internationales et
          des centres culturels en Corée. Scientifique français installé à Séoul, je m’investis pour
          favoriser le dialogue scientifique et culturel entre la France et la Corée, en lien avec
          l’ambassade, les instituts culturels et les établissements d’enseignement.
        </p>
        <p>
          J’accueille aussi des lycéens du Lycée français pour de courts stages, qui leur offrent
          une première immersion dans le monde de la recherche&nbsp;: poser des questions, manipuler
          des données et découvrir comment la science se fait réellement. Avec des artistes, j’ai
          exploré de nouvelles façons de raconter la science&nbsp;: des expériences en réalité
          virtuelle qui revisitent les constellations traditionnelles coréennes sous un regard
          contemporain, ou encore des conseils pour des projets prospectifs de serres martiennes. Ces
          projets traduisent un engagement plus large&nbsp;: rendre la science visible et accessible,
          mais aussi encourager le dialogue, l’imagination et le questionnement, là où de nouvelles
          formes de compréhension peuvent émerger.
        </p>
      </div>
    </section>

    <section className="section section--paper">
      <div className="wrap">
        <OutreachItem
          meta="Lycée Français de Séoul · 2024–2026"
          title="Préparation aux Olympiades de Physique France"
          image="/images/lfs2-web.jpg"
          alt="Élèves du Lycée Français de Séoul"
        >
          <p>
            J’ai encadré des élèves du Lycée Français de Séoul pour les Olympiades de Physique France.
            L’équipe s’est qualifiée pour la finale et a remporté, en janvier 2026, le 3ᵉ prix et le
            prix de la Société Française d’Acoustique.
          </p>
          <p>
            <a href="https://pr.sejong.ac.kr/news/people/faculty.do?mode=view&articleNo=863364" {...ext}>
              Communiqué de presse de l’Université Sejong
            </a>
          </p>
        </OutreachItem>

        <OutreachItem
          meta="2024"
          title="Lycée Français de Séoul"
          href="https://lfseoul.org/en/"
          image="/images/lfs1-web.jpg"
          alt="Conférence au Lycée Français de Séoul"
        >
          <p>Conférence grand public sur la cosmologie.</p>
        </OutreachItem>

        <OutreachItem
          meta="Juin 2023"
          title="Lycée International Xavier"
          href="https://www.xavier.sc.kr/"
          image="/images/lix-web.jpg"
          alt="Conférence au Lycée International Xavier, Séoul"
        >
          <p>
            «&nbsp;Une brève histoire de l’Univers&nbsp;»&nbsp;: conférence pour des lycéens
            francophones.
          </p>
        </OutreachItem>

        <OutreachItem
          meta="Avril 2023"
          title="Centre culturel français"
          href="https://kr.ambafrance-culture.org"
          image="/images/ccl1-web.jpg"
          alt="Conférence au Centre culturel français de Séoul"
        >
          <p>
            «&nbsp;Une brève histoire de l’Univers&nbsp;»&nbsp;: conférence en français pour des
            apprenants de français, avec interprétation simultanée en coréen.
          </p>
        </OutreachItem>

        <OutreachItem
          meta="ISEA 2019, Gwangju, Corée"
          title="Redécouvrir le ciel ancien de la Corée en réalité virtuelle"
          href="https://www.cronopioz.com/projects/visualization-korea-gaia"
          image="/images/koreanskies.jpg"
          alt="Visualisation en réalité virtuelle des constellations traditionnelles coréennes"
        >
          <p>
            Collaboration avec l’artiste{" "}
            <a href="https://www.cronopioz.com" {...ext}>Sung-A Jang</a>. Nous avons identifié des
            constellations coréennes anciennes dans les catalogues Hipparcos et Gaia, et les avons
            représentées dans une carte 3D interactive en réalité virtuelle. Présenté à
            l’International Symposium on Electronic Art (ISEA) 2019 à Gwangju, en Corée.
          </p>
          <p>
            <a href="/images/jang_lhuillier_2019.pdf" {...ext}>Lire l’article ISEA 2019 (PDF, en anglais)</a>
          </p>
        </OutreachItem>

        <OutreachItem
          meta="Octobre 2016"
          title="Festival international des sciences de Daejeon — stand France"
          image="/images/daejeon2016-web.jpg"
          alt="Stand France au Festival international des sciences de Daejeon 2016"
        >
          <p>Présentation de la science et des scientifiques français, avec interprétation en coréen.</p>
        </OutreachItem>
      </div>
    </section>

    <section className="section section--white">
      <div className="wrap--narrow">
        <h2 className="section-title">Dans la presse</h2>
        <ul className="press-list">
          <li>
            <strong>Juillet 2026</strong> — <em>Le Petit Échotier</em> (Seoul Accueil, n°&nbsp;202)&nbsp;:
            «&nbsp;La science au-delà des frontières, Regards vers l’infini avec le Pr L’Huillier,
            cosmologiste français en Corée du Sud&nbsp;».{" "}
            <a href="https://www.seoulaccueil.com/wp-content/uploads/2026/06/PE202-online-version.pdf#page=60" {...ext}>Lire (PDF, p. 60–63)</a>
          </li>
          <li>
            <strong>Octobre 2026</strong> — Publication LinkedIn du Service scientifique de
            l’Ambassade de France en Corée sur la collaboration France–Corée PHC STAR.{" "}
            <a href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7513525563123347456" {...ext}>
              Voir sur LinkedIn
            </a>
          </li>
          <li>
            <strong>2026</strong> — Communiqué de presse de l’Université Sejong sur l’équipe des
            Olympiades de Physique.{" "}
            <a href="https://pr.sejong.ac.kr/news/people/faculty.do?mode=view&articleNo=863364" {...ext}>
              Lire
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default OutreachPageFr

export const Head = () => (
  <Seo
    title="Médiation scientifique"
    pathname="/fr/outreach/"
    description="Conférences grand public, préparation aux Olympiades de Physique, échanges scientifiques et culturels France–Corée, et collaborations art–science, dont une visualisation en réalité virtuelle des constellations traditionnelles coréennes."
  />
)
