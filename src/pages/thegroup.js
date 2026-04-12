import React from "react"
import Layout from "../components/Layout"
import GroupMember from "../components/GroupMember"
import placeholderImage from "../images/placeholder.jpeg"

const photoHyeon = "/images/hyeon.png"
const photoNoh = "/images/sihyeong.jpg"
const photoMillard = "/images/clea.jpg"
const photoHwang = "/images/seunggyu.jpg"
const photoBen = "/images/benji_team.jpg"

const TheGroupPage = () => (
  <Layout>
    <h1>The Group</h1>


    <section>
    <h2>Benjamin L'Huillier, Assistant Professor</h2>
    <GroupMember
      name="Benjamin L'Huillier | 벤자민 르위예"
      period="2022-present"
      researchFocus={
  <>
    <p>
      I combine cosmological N-body simulations and advanced statistical methods to test the concordance model of cosmology, trying to understand:
    </p>
    <ul>
      <li>The Nature of Cosmic Acceleration:
Modified Gravity &amp; Dark Energy</li>
      <li>Inflation &amp; the Early Universe</li>
    </ul>
  </>
      }
      photo={photoBen}
      profileLinks={[
        { label: "Google Scholar", href: "https://scholar.google.com/citations?user=9n8sXoAAAAAJ&hl=en" },
        { label: "GitHub", href: "https://github.com/blhuillier" }
      ]}
    />
    </section>

    <section>
      <h2>Graduate Students</h2>
      <GroupMember
        name="M. Kim Hyeon | 김현"
        role="Integrated Graduate Student"
        period="Spring 2023-present"
        researchFocus="N-body simulations"
        photo={photoHyeon}
      />
      <GroupMember
        name="Ms. Cléa Millard | 클레아 밀라르"
        role="Ph.D Candidate"
        period="Fall 2024-present"
        researchFocus="Type Ia supernova cosmology"
        photo={photoMillard}
      />
      <GroupMember
        name="M. Si Hyeong Noh | 노시형"
        role="Post-Graduate Research Assistant"
        period="Spring 2023-present"
        researchFocus="Testing modified gravity"
        currentPosition="M.Sc. Sejong University, 2025"
        photo={photoNoh}
      />
    </section>



    <section>
      <h2>Interns &amp; Undergraduate Projects</h2>
      <GroupMember
        name="Tarik Ouadjou"
        role="Master's Intern"
        period="Spring 2026"
        researchFocus="Co-supervised with A. Rimmel (CentraleSupélec, France)"
      />
      <GroupMember
        name="Ussan Abassi"
        role="Master's Intern"
        period="Spring 2026"
        researchFocus="École Normale Supérieure, France"
      />
      <GroupMember
        name="Edwyn Howarth"
        role="Master's Intern"
        period="Spring 2026"
        researchFocus="Paris Sorbonne, France"
      />
    </section>

    <section>
      <h2>Alumni</h2>
      <GroupMember
        name="M. Seung-gyu Hwang | 황승규"
        role="Alumnus"
        period="Yonsei University M.Sc. 2019-2022; Graduate Research Assistant 2022-2025"
        researchFocus="Gaussian process regression in cosmology"
        currentPosition="PhD student at CosmoStat, CEA Saclay"
        profileLinks={[
          { label: "GitHub", href: "https://github.com/sghwang-cosmos" },
        ]}
        photo={photoHwang}
      />
      <GroupMember
        name="ManalIkram Bensahli"
        role="Undergraduate Intern"
        period="Summer 2023"
        researchFocus="Information theory and FERMI lightcurves (ESTACA)"
      />
      <GroupMember
        name="David Fernández Gil | 다비드 페르난데스 길"
        role="Alumnus"
        period="Post-Masters Researcher, 2022"
        researchFocus="Alignment of AGN and galaxies"
        currentPosition="PhD Candidate, Centro de Estudios de Fisica del Cosmos de Aragón, Teruel, Spain"
        profileLinks={[
          {
            label: "Profile",
            href: "https://theconversation.com/profiles/david-fernandez-gil-2215115",
          },
        ]}
        photo={placeholderImage}
      />
      <GroupMember
        name="M. Seokhyeon Yu | 유석현"
        role="Alumnus"
        period="B.Sc., 2022"
        researchFocus="Cosmological probes"
      />
      <GroupMember
        name="Ms. Sohee (Sophie) Chung | 정소희"
        role="Alumna"
        period="2019, Emory University summer project"
        researchFocus="Type Ia supernova cosmology"
        currentPosition="PhD Candidate, Washington University in St. Louis, USA"
      />
    </section>
  </Layout>
)

export default TheGroupPage
