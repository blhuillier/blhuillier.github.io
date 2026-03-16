import React from "react"
import Layout from "../components/Layout"
import GroupMember from "../components/GroupMember"
import placeholderImage from "../images/placeholder.jpeg"

import photoHyeon   from "../static/images/hyeon.png"
import photoNoh     from "../static/images/sihyeong.jpg"
import photoMillard from "../static/images/clea.jpg"
import photoHwang   from "../static/images/seunggyu.jpg"
import photoBen     from "../static/images/benji_team.jpg"

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
        name="M. Si Hyeong Noh | 노시형"
        role="M.Sc. Candidate"
        period="Spring 2023-Fall 2025"
        researchFocus="Testing modified gravity"
        photo={photoNoh}
      />
      <GroupMember
        name="Ms. Cléa Millard | 클레아 밀라르"
        role="Ph.D Candidate"
        period="Fall 2024-present"
        researchFocus="Type Ia supernova cosmology"
        photo={photoMillard}
      />
    </section>

    <section>
      <h2>Alumni</h2>
      <GroupMember
        name="M. Seung-gyu Hwang"
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
        name="M. Seokhyeon Yu"
        role="Alumnus"
        period="B.Sc., 2022"
        researchFocus="Cosmological probes"
      />
      <GroupMember
        name="Ms. Sohee (Sophie) Chung"
        role="Alumna"
        period="2019, Emory University summer project"
        researchFocus="Type Ia supernova cosmology"
        currentPosition="PhD Candidate, Washington University in St. Louis, USA"
      />
      <GroupMember
        name="David Fernández Gil"
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
    </section>
  </Layout>
)

export default TheGroupPage
