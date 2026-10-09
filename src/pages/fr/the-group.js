import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import PageHero from "../../components/PageHero"
import GroupMember from "../../components/GroupMember"
import SocialBar from "../../components/SocialBar"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const TheGroupPageFr = () => (
  <Layout lang="fr">
    <PageHero
      title="Groupe de cosmologie physique"
      tagline="Université Sejong, Séoul"
      image="/images/thegroup_bw_edited.jpg"
    />

    <section className="section section--paper">
      <div className="wrap">
        <article className="pi-card">
          <img className="pi-card__photo" src="/images/benji_team-web.jpg" alt="Benjamin L’Huillier" />
          <div className="pi-card__body">
            <h2 className="pi-card__name">Benjamin L&apos;Huillier | 벤자민 루일리예</h2>
            <p className="pi-card__role">Professeur assistant</p>
            <p>
              Je combine simulations cosmologiques à N corps et méthodes statistiques avancées pour
              tester le modèle standard de la cosmologie, afin de comprendre&nbsp;:
            </p>
            <ul>
              <li>la nature de l’accélération cosmique — gravité modifiée et énergie noire&nbsp;;</li>
              <li>l’inflation et l’Univers primordial.</li>
            </ul>
            <SocialBar keys={["scholar", "orcid", "researchgate", "github", "x", "linkedin", "instagram"]} />
          </div>
        </article>
      </div>
    </section>

    <section className="section section--dark">
      <div className="wrap">
        <h2 className="section-title">L’équipe</h2>
        <p className="prose prose--center" style={{ maxWidth: "640px", margin: "0 auto 46px" }}>
          À partir de données et de simulations de pointe, nous cherchons à comprendre la nature de
          l’énergie noire et de la matière noire, ainsi que les conditions initiales et le contenu de
          l’Univers.
        </p>

        <div className="member-grid">
          <div id="clea">
            <GroupMember
              lang="fr"
              name="Cléa Millard | 클레아"
              role="Doctorante"
              period="Depuis l’automne 2024"
              researchFocus={<p>Cosmologie avec les supernovae de type Ia.</p>}
              photo="/images/clea.jpg"
              links={[{ kind: "email", href: "mailto:clea.millard@gmail.com", label: "E-mail" }]}
            />
          </div>

          <div id="hyeon">
            <GroupMember
              lang="fr"
              name="Hyeon Kim | 김현"
              role="Cursus intégré master–doctorat"
              period="Depuis le printemps 2023"
              researchFocus={
                <p>Simulations cosmologiques, cosmologie des amas, Univers primordial.</p>
              }
              photo="/images/hyeon-web.jpg"
              links={[
                { kind: "github", href: "https://github.com/HyeonKim1", label: "GitHub" },
                { kind: "email", href: "mailto:hyeon970526@gmail.com", label: "E-mail" },
              ]}
            />
          </div>

          <div id="sihyeong">
            <GroupMember
              lang="fr"
              name="Si Hyeong Noh | 노시형"
              role="Doctorant"
              period="Depuis l’automne 2026 (master 2023–2025)"
              researchFocus={
                <p>Théorie de la gravitation, tests de la gravité modifiée, analyse de données.</p>
              }
              photo="/images/sihyeong-web.jpg"
              links={[
                { kind: "web", href: "https://sites.google.com/view/starrynote88/", label: "Site web" },
                { kind: "github", href: "https://github.com/NohSiHyeong", label: "GitHub" },
                { kind: "email", href: "mailto:starrynote88@gmail.com", label: "E-mail" },
              ]}
            />
          </div>

          <div id="kangsoo">
            <GroupMember
              lang="fr"
              name="Kangsoo Lee | 이강수"
              role="Étudiant-chercheur de licence"
              period="Depuis septembre 2026"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section section--white">
      <div className="wrap">
        <h2 className="section-title">Stagiaires</h2>
        <div className="member-grid">
          <div id="mathias">
            <GroupMember
              light
              lang="fr"
              name="Mathias Tan"
              role="Stagiaire de master"
              period="Depuis septembre 2026"
              researchFocus={
                <p>Applications cosmologiques du transport optimal. CentraleSupélec, France.</p>
              }
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section section--paper">
      <div className="wrap--narrow">
        <h2 className="section-title">Anciens membres</h2>
        <ul className="alumni-list">
          <li id="tarik">
            <strong>Tarik Ouadjou</strong> — stagiaire de master, printemps 2026 (CentraleSupélec).
            Apprentissage automatique pour le Square Kilometre Array, co-encadré avec A. Rimmel.
          </li>
          <li id="ussan">
            <strong>Ussan Abbassi</strong> — stagiaire de master, printemps 2026 (École Normale
            Supérieure). Cosmologie avec les ondes gravitationnelles.
          </li>
          <li id="edwyn">
            <strong>Edwyn Howarth</strong> — stagiaire de master, printemps 2026 (Sorbonne
            Université).
          </li>
          <li>
            <strong>
              <a href="https://github.com/sghwang-cosmos" {...ext}>Seung-gyu Hwang</a> | 황승규
            </strong>{" "}
            — master à l’Université Yonsei (2019–2021), puis chercheur post-master à Sejong
            (2022–2025). Régression par processus gaussiens en cosmologie. Aujourd’hui doctorant au
            sein du groupe CosmoStat, CEA Saclay.
          </li>
          <li>
            <strong>
              <a href="https://theconversation.com/profiles/david-fernandez-gil-2215115" {...ext}>
                David Fernández Gil
              </a>{" "}
              | 다비드 페르난데스 길
            </strong>{" "}
            — chercheur post-master, 2022–2023. Alignement des AGN et des galaxies (co-encadré avec
            Jeff Hodgson, encadrant principal). Aujourd’hui doctorant au Centro de Estudios de
            Física del Cosmos de Aragón, Teruel (Espagne).
          </li>
          <li>
            <strong>Manal Ikram Bensahli</strong> — stagiaire de licence, été 2023. Théorie de
            l’information et courbes de lumière Fermi (ESTACA).
          </li>
          <li>
            <strong>Seokhyeon Yu | 유석현</strong> — licence, 2022. Sondes cosmologiques.
          </li>
          <li>
            <strong>Sohee (Sophie) Chun | 정소희</strong> — projet d’été, Emory University, 2019.
            Cosmologie avec les supernovae de type Ia. Aujourd’hui doctorante à la Washington
            University in St. Louis (États-Unis).
          </li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default TheGroupPageFr

export const Head = () => (
  <Seo
    title="Le groupe"
    pathname="/fr/the-group/"
    description="Le groupe de cosmologie physique de l’Université Sejong : doctorants, stagiaires et anciens membres travaillant sur l’énergie noire, la gravité modifiée et les simulations cosmologiques."
  />
)
