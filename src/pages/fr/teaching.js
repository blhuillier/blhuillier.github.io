import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import PageHero from "../../components/PageHero"
import SummaryFrame from "../../components/SummaryFrame"
import SectionFrame from "../../components/SectionFrame"
import CourseList from "../../components/CourseList"
import { graduate, undergraduate } from "../../data/courses"

const ext = { target: "_blank", rel: "noopener noreferrer" }
const disc = { listStyle: "disc", paddingLeft: "1.2em" }

const TeachingPageFr = () => (
  <Layout lang="fr">
    <PageHero
      title="Enseignement"
      tagline="cultiver la curiosité et l’esprit critique"
      image="/images/ccl2-web.jpg"
    />

    <SummaryFrame title="Ma vision de l’enseignement">
      <p>
        Au fil des années, j’ai enseigné des sujets très variés — de la physique et de l’astronomie
        aux statistiques et aux simulations cosmologiques — à tous les niveaux, en français comme en
        anglais. Depuis 2021, j’ai conçu et enseigné des cours allant de la physique générale à
        l’astronomie pour les étudiants de licence non scientifiques, ainsi que les statistiques, la
        cosmologie et l’instrumentation pour les étudiants de master et de doctorat en astrophysique.
        J’ai aussi animé des ateliers pratiques sur les simulations cosmologiques, notamment à
        l’Université Kyunghee, au Pyeongchang Summer Institute et à l’Indian Institute of
        Astrophysics de Bangalore.
      </p>
      <p>
        Ce qui a commencé pendant ma thèse à l’Université Paris Diderot — où j’encadrais des
        travaux dirigés de physique et d’analyse de données en sciences de la Terre — est devenu un
        engagement plus profond : non seulement former de futurs chercheurs, mais transmettre une
        manière de penser curieuse, analytique, ouverte à l’incertitude et fondée sur les faits.
        J’enseigne pour aider les étudiants à poser de meilleures questions, à remettre en cause les
        idées reçues et à penser plus clairement le monde qui les entoure. En retour, cela affûte ma
        propre réflexion et nourrit souvent ma recherche de perspectives nouvelles.
      </p>
    </SummaryFrame>

    <section className="section section--paper">
      <div className="wrap tile-grid tile-grid--gap">
        <SectionFrame
          className="tile--wide"
          title="Cours à l’Université Sejong"
          dateRange="Depuis 2021"
          image="/images/structure%20bg_edited_edited.jpg"
          align="left"
          description={
            <div className="split-cols">
              <CourseList lang="fr" heading="Master et doctorat" courses={graduate} />
              <CourseList lang="fr" heading="Licence" courses={undergraduate} />
            </div>
          }
        />

        <SectionFrame
          className="tile--wide"
          title="Encadrement d’étudiants"
          light
          align="left"
          description={
            <>
              <p className="supervision-intro">
                J’accueille toujours avec plaisir les étudiants motivés.
              </p>
              <div className="split-cols">
                <div>
                  <h3 className="supervision-h">Doctorants actuels</h3>
                  <ul style={disc}>
                    <li>
                      <strong>Depuis sept. 2026</strong> — Si Hyeong Noh, doctorat (master
                      2023–2025, cosmologie par lentillage faible)
                    </li>
                    <li>
                      <strong>Depuis sept. 2024</strong> — Cléa Millard, doctorat&nbsp;: cosmologie
                      avec les supernovae de type Ia
                    </li>
                    <li>
                      <strong>Depuis 2023</strong> — Hyeon Kim, cursus intégré master–doctorat&nbsp;:
                      simulations à N corps
                    </li>
                  </ul>
                  <h3 className="supervision-h">Anciens étudiants</h3>
                  <ul style={disc}>
                    <li>
                      <strong>2019 → 2025</strong> — Seung-gyu Hwang&nbsp;: master à Yonsei
                      (2019–2021), puis chercheur post-master à Sejong (2022–2025). Régression par
                      processus gaussiens en cosmologie. Aujourd’hui doctorant au sein du groupe
                      CosmoStat, CEA Saclay
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="supervision-h">Projets de recherche et stages</h3>
                  <ul style={disc}>
                    <li>
                      <strong>Depuis sept. 2026</strong> — Kangsoo Lee (licence, 4ᵉ année, Sejong)
                    </li>
                    <li>
                      <strong>Depuis sept. 2026</strong> — Mathias Tan (master, CentraleSupélec)&nbsp;:
                      applications cosmologiques du transport optimal
                    </li>
                    <li>
                      <strong>Printemps 2026</strong> — Tarik Ouadjou (CentraleSupélec, co-encadré
                      avec A. Rimmel), Ussan Abbassi (ENS Paris), Edwyn Howarth (Sorbonne)
                    </li>
                    <li>
                      <strong>Été 2023</strong> — Manal Ikram Bensahli (ESTACA, licence)&nbsp;:
                      théorie de l’information et courbes de lumière Fermi
                    </li>
                    <li>
                      <strong>Printemps 2023</strong> — Cléa Millard (master, Strasbourg)&nbsp;:
                      cosmologie avec les supernovae de type Ia
                    </li>
                    <li>
                      <strong>2022 → 2023</strong> — David Fernández Gil (projet post-master,
                      co-encadré avec J. Hodgson)&nbsp;: alignement des jets d’AGN et de leurs
                      galaxies hôtes, publié dans <em>Nature Astronomy</em>
                    </li>
                    <li>
                      <strong>2021 → 2022</strong> — Seokhyeon Yoo et Hyeon Kim (licence,
                      Sejong)&nbsp;: sondes cosmologiques
                    </li>
                    <li>
                      <strong>Été 2019</strong> — Sohee Chun (Emory)&nbsp;: cosmologie avec les
                      supernovae de type Ia
                    </li>
                    <li>
                      <strong>Été 2017</strong> — Hyungjin Kim (master, Waterloo, co-encadré)&nbsp;:
                      distorsions dans l’espace des redshifts et supernovae pour contraindre la
                      gravitation
                    </li>
                  </ul>
                </div>
              </div>
            </>
          }
        />

        <SectionFrame
          title="Cours invités"
          dateRange="Depuis 2013"
          image="/images/zoom_t91_edited_edited.png"
          align="left"
          description={
            <ul>
              <li>
                <strong>Juillet 2025</strong> — «&nbsp;Gaussian Process by Example&nbsp;», STAR
                Summer School 2025, Indian Institute of Astrophysics (en ligne).
              </li>
              <li>
                <strong>Juin 2023</strong> — Cosmologie, école d’été de physique théorique, Institut
                de physique et de technologie, Académie des sciences de Mongolie (en ligne).
              </li>
              <li>
                <strong>Nov. 2015</strong> — Simulations cosmologiques pour doctorants,{" "}
                <a href="https://www.iiap.res.in/" {...ext}>Indian Institute of Astrophysics</a>,
                Bangalore&nbsp;: cours et travaux pratiques avec Gadget-2 (8&nbsp;heures).
              </li>
              <li>
                <strong>Juillet 2015</strong> —{" "}
                <a href="http://psi.kias.re.kr/2015/sub03/sub03_01.php" {...ext}>Pyeongchang Summer Institute</a>&nbsp;:
                travaux pratiques de simulations cosmologiques à N corps avec GOTPM — conditions
                initiales, exécution, visualisation et analyse (4&nbsp;heures).
              </li>
              <li>
                <strong>Nov. 2013</strong> — Cours sur les simulations cosmologiques pour les
                étudiants de licence en astronomie, Université Kyunghee, Suwon.
              </li>
            </ul>
          }
        />

        <SectionFrame
          title="Moniteur, Université Paris Diderot"
          dateRange="2008 – 2011"
          light
          align="left"
          description={
            <div className="stacked-lists">
              <div>
                <h3>Physique</h3>
                <ul style={disc}>
                  <li>
                    <strong>2010–2011</strong> — TD de physique en L1, avec François
                    Vannucci&nbsp;: hydrostatique, hydrodynamique, cinématique.
                  </li>
                  <li>
                    <strong>2009–2010</strong> — TD de physique en L1, avec Sébastien
                    Charnoz&nbsp;: hydrostatique, hydrodynamique, énergie.
                  </li>
                  <li><strong>2008–2009</strong> — TP de mécanique.</li>
                </ul>
              </div>
              <div>
                <h3>Analyse de données en sciences de la Terre</h3>
                <ul style={disc}>
                  <li>
                    <strong>2008–2011</strong> — TD d’analyse de données avec MATLAB, M1 de sciences
                    de la Terre, avec Olivier de Viron&nbsp;: analyse fréquentielle, statistiques,
                    moindres carrés, ondelettes.
                  </li>
                </ul>
              </div>
            </div>
          }
        />
      </div>
    </section>
  </Layout>
)

export default TeachingPageFr

export const Head = () => (
  <Seo
    title="Enseignement"
    pathname="/fr/teaching/"
    description="Cours à l’Université Sejong, cours invités sur les simulations cosmologiques, encadrement d’étudiants et vision de l’enseignement."
  />
)
