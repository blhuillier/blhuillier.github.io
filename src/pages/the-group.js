import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/PageHero"
import GroupMember from "../components/GroupMember"
import SocialBar from "../components/SocialBar"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const TheGroupPage = () => (
  <Layout>
    <PageHero
      title="Physical Cosmology Group"
      tagline="Sejong University, Seoul"
      image="/images/thegroup_bw_edited.jpg"
    />

    <section className="section section--paper">
      <div className="wrap">
        <article className="pi-card">
          <img
            className="pi-card__photo"
            src="/images/benji_team.jpg"
            alt="Benjamin L'Huillier"
          />
          <div className="pi-card__body">
            <h2 className="pi-card__name">Benjamin L&apos;Huillier | 벤자민 르위예</h2>
            <p className="pi-card__role">Assistant Professor</p>
            <p>
              I combine cosmological N-body simulations and advanced statistical methods to test the
              concordance model of cosmology, trying to understand:
            </p>
            <ul>
              <li>the nature of cosmic acceleration — modified gravity &amp; dark energy;</li>
              <li>inflation and the early Universe.</li>
            </ul>
            <SocialBar keys={["scholar", "orcid", "researchgate", "github", "x", "linkedin", "instagram"]} />
          </div>
        </article>
      </div>
    </section>

    <section className="section section--dark">
      <div className="wrap">
        <h2 className="section-title">Team</h2>
        <p className="prose prose--center" style={{ maxWidth: "640px", margin: "0 auto 46px" }}>
          Using state-of-the-art data and simulations, we aim to understand the nature of dark energy
          and dark matter, and the initial conditions and contents of the Universe.
        </p>

        <div className="member-grid">
          <div id="clea">
            <GroupMember
              name="Cléa Millard | 클레아"
              role="PhD Candidate"
              period="Fall 2024 – present"
              researchFocus={<p>Type Ia supernova cosmology.</p>}
              photo="/images/clea.jpg"
              links={[{ kind: "email", href: "mailto:clea.millard@gmail.com", label: "Email" }]}
            />
          </div>

          <div id="hyeon">
            <GroupMember
              name="Hyeon Kim | 김현"
              role="Integrated Master–PhD"
              period="Spring 2023 – present"
              researchFocus={<p>Cosmological simulations, cluster cosmology, the early Universe.</p>}
              photo="/images/hyeon-web.jpg"
              links={[
                { kind: "github", href: "https://github.com/HyeonKim1", label: "GitHub" },
                { kind: "email", href: "mailto:hyeon970526@gmail.com", label: "Email" },
              ]}
            />
          </div>

          <div id="sihyeong">
            <GroupMember
              name="Si Hyeong Noh | 노시형"
              role="Post-Graduate Research Assistant"
              period="Spring 2023 – present"
              researchFocus={<p>Gravitational theory, testing modified gravity, data analysis.</p>}
              currentPosition="M.Sc., Sejong University, 2025"
              photo="/images/sihyeong-web.jpg"
              links={[
                { kind: "web", href: "https://sites.google.com/view/starrynote88/", label: "Website" },
                { kind: "github", href: "https://github.com/NohSiHyeong", label: "GitHub" },
                { kind: "email", href: "mailto:starrynote88@gmail.com", label: "Email" },
              ]}
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section section--white">
      <div className="wrap">
        <h2 className="section-title">Interns &amp; undergraduate projects</h2>
        <div className="member-grid">
          <div id="tarik">
            <GroupMember
              light
              name="Tarik Ouadjou"
              role="Master's Intern"
              period="Spring 2026"
              researchFocus={
                <p>
                  Machine learning for the SKA. Co-supervised with A. Rimmel, CentraleSupélec,
                  France.
                </p>
              }
            />
          </div>
          <div id="ussan">
            <GroupMember
              light
              name="Ussan Abbassi"
              role="Master's Intern"
              period="Spring 2026"
              researchFocus={
                <p>Cosmology with gravitational waves. École Normale Supérieure, France.</p>
              }
            />
          </div>
          <div id="edwyn">
            <GroupMember
              light
              name="Edwyn Howarth"
              role="Master's Intern"
              period="Spring 2026"
              researchFocus={<p>Paris Sorbonne, France.</p>}
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section section--paper">
      <div className="wrap--narrow">
        <h2 className="section-title">Alumni</h2>
        <ul className="alumni-list">
          <li>
            <strong>
              <a href="https://github.com/sghwang-cosmos" {...ext}>Seung-gyu Hwang</a> | 황승규
            </strong>{" "}
            — Yonsei University M.Sc. 2019–2022; Sejong post-Master&apos;s researcher 2022–2025.
            Gaussian process regression in cosmology. Now a PhD student at CosmoStat, CEA Saclay.
          </li>
          <li>
            <strong>
              <a href="https://theconversation.com/profiles/david-fernandez-gil-2215115" {...ext}>
                David Fernández Gil
              </a>{" "}
              | 다비드 페르난데스 길
            </strong>{" "}
            — Post-Master&apos;s researcher, 2022. Alignment of AGN and galaxies (co-supervised with
            Jeff Hodgson, main supervisor). Now a PhD candidate at Centro de Estudios de Física del
            Cosmos de Aragón, Teruel, Spain.
          </li>
          <li>
            <strong>Manal Ikram Bensahli</strong> — Undergraduate intern, Summer 2023. Information
            theory and Fermi light curves (ESTACA).
          </li>
          <li>
            <strong>Seokhyeon Yu | 유석현</strong> — B.Sc., 2022. Cosmological probes.
          </li>
          <li>
            <strong>Sohee (Sophie) Chun | 정소희</strong> — Emory University summer project, 2019.
            Type Ia supernova cosmology. Now a PhD candidate at Washington University in St. Louis,
            USA.
          </li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default TheGroupPage

export const Head = () => (
  <Seo
    title="The Group"
    pathname="/the-group/"
    description="The physical cosmology group at Sejong University: current students, interns, and alumni working on dark energy, modified gravity, and cosmological simulations."
  />
)
