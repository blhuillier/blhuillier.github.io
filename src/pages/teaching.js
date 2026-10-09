import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/PageHero"
import SummaryFrame from "../components/SummaryFrame"
import SectionFrame from "../components/SectionFrame"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const NOW = "Fall 2026"

// Grouped by course, most recent first. Terms listed oldest → newest.
const graduate = [
  { name: "Stellar Dynamics and Gravitation", terms: ["Fall 2026"] },
  { name: "Astronomical Data Analysis", terms: ["Spring 2021", "Fall 2025"] },
  { name: "Mathematical Astronomy", terms: ["Fall 2022", "Spring 2024"] },
  { name: "Advanced Astronomical Instrumentation", terms: ["Fall 2023"] },
  { name: "Cosmology", terms: ["Fall 2021"] },
]

const undergraduate = [
  { name: "Gravitation and General Relativity", terms: ["Fall 2026"] },
  {
    name: "Mathematical Physics I",
    terms: ["Spring 2025", "Spring 2026"],
    link: "https://github.com/blhuillier/MathPhysI",
  },
  { name: "Mathematical Physics II", terms: ["Fall 2025"] },
  { name: "Physics of Everyday Life", terms: ["Fall 2024"] },
  { name: "General Physics I", terms: ["Spring 2022", "Spring 2023", "Spring 2024"] },
  { name: "Introduction to Astronomy", terms: ["Fall 2023"] },
]

const CourseList = ({ heading, courses }) => (
  <div>
    <h3>{heading}</h3>
    <ul className="course-list">
      {courses.map((c) => (
        <li key={c.name}>
          <span className="course-name">
            {c.link ? <a href={c.link} {...ext}>{c.name}</a> : c.name}
          </span>
          {c.terms.includes(NOW) && <span className="course-now">Now</span>}
          <span className="course-terms">
            {c.terms.filter((t) => t !== NOW).join(" · ")}
          </span>
        </li>
      ))}
    </ul>
  </div>
)

const TeachingPage = () => (
  <Layout>
    <PageHero
      title="Teaching"
      tagline="fostering curiosity and critical thinking"
      image="/images/ccl2-web.jpg"
    />

    <SummaryFrame title="Teaching philosophy">
      <p>
        Over the years, I&apos;ve taught a wide range of subjects—from physics and astronomy to
        statistics and cosmological simulations—across all levels, in both French and English. Since
        2021, I&apos;ve designed and taught courses spanning general physics, astronomy for
        undergraduate non-science majors, and statistics, cosmology, and instrumentation for
        astrophysics graduate students. I&apos;ve also led hands-on workshops on cosmological
        simulations, including invited sessions at Kyunghee University, the Pyeongchang Summer
        Institute, and the Indian Institute of Astrophysics in Bangalore.
      </p>
      <p>
        What began during my PhD at Université Paris Diderot—where I led tutorials in physics and
        Earth science data analysis—has grown into a deeper investment not just to train future
        researchers, but to share a way of thinking: curious, analytical, open to uncertainty, and
        rooted in evidence. I see teaching as a way to foster habits of inquiry that help students
        ask better questions, challenge assumptions, and think more clearly about the world around
        them. In turn, it sharpens my own thinking and often brings fresh perspectives that feed
        back into my research.
      </p>
    </SummaryFrame>

    <section className="section section--paper">
      <div className="wrap tile-grid tile-grid--gap">
        <SectionFrame
          className="tile--wide"
          title="Courses at Sejong University"
          dateRange="Since 2021"
          image="/images/structure%20bg_edited_edited.jpg"
          align="left"
          description={
            <div className="split-cols">
              <CourseList heading="Graduate school" courses={graduate} />
              <CourseList heading="Undergraduate" courses={undergraduate} />
            </div>
          }
        />

        <SectionFrame
          title="Student supervision"
          light
          align="left"
          description={
            <>
              <p>I am always happy to work with motivated students.</p>
              <h3 className="supervision-h">Current graduate students</h3>
              <ul style={{ listStyle: "disc", paddingLeft: "1.2em" }}>
                <li>
                  <strong>Sept. 2026 → now</strong> — Si Hyeong Noh, PhD (M.Sc. 2023–2025,
                  weak-lensing cosmology)
                </li>
                <li>
                  <strong>Sept. 2024 → now</strong> — Cléa Millard, PhD: Type Ia supernova cosmology
                </li>
                <li>
                  <strong>2023 → now</strong> — Hyeon Kim, integrated Master–PhD: N-body simulations
                </li>
              </ul>
              <h3 className="supervision-h">Former students</h3>
              <ul style={{ listStyle: "disc", paddingLeft: "1.2em" }}>
                <li>
                  <strong>2019 → 2025</strong> — Seung-gyu Hwang: M.Sc. at Yonsei (2019–2021), then
                  post-Master researcher at Sejong (2022–2025). Gaussian process regression in
                  cosmology. Now a PhD student at CosmoStat, CEA Saclay
                </li>
              </ul>
              <h3 className="supervision-h">Research projects and internships</h3>
              <ul style={{ listStyle: "disc", paddingLeft: "1.2em" }}>
                <li>
                  <strong>Sept. 2026 → now</strong> — Mathias Tan (Master&apos;s, CentraleSupélec):
                  cosmological applications of optimal transport
                </li>
                <li>
                  <strong>Spring 2026</strong> — Tarik Ouadjou (CentraleSupélec, co-supervised with
                  A. Rimmel), Ussan Abbassi (ENS Paris), Edwyn Howarth (Sorbonne)
                </li>
                <li>
                  <strong>Summer 2023</strong> — Manal Ikram Bensahli (ESTACA, undergraduate):
                  information theory and Fermi light curves
                </li>
                <li>
                  <strong>Spring 2023</strong> — Cléa Millard (Master&apos;s, Strasbourg): Type Ia
                  supernova cosmology
                </li>
                <li>
                  <strong>2022 → 2023</strong> — David Fernández Gil (post-Master project,
                  co-supervised with J. Hodgson): alignment of AGN jets and their host galaxies,
                  published in <em>Nature Astronomy</em>
                </li>
                <li>
                  <strong>2021 → 2022</strong> — Seokhyeon Yoo and Hyeon Kim (Sejong undergraduates):
                  cosmological probes
                </li>
                <li>
                  <strong>Summer 2019</strong> — Sohee Chun (Emory): Type Ia supernova cosmology
                </li>
                <li>
                  <strong>Summer 2017</strong> — Hyungjin Kim (Master&apos;s, Waterloo,
                  co-supervised): redshift-space distortions and supernovae to constrain gravity
                </li>
              </ul>
            </>
          }
        />

        <SectionFrame
          title="Invited lectures"
          dateRange="2013 →"
          image="/images/zoom_t91_edited_edited.png"
          align="left"
          description={
            <ul>
              <li>
                <strong>July 2025</strong> — “Gaussian Process by Example”, STAR Summer School
                2025, Indian Institute of Astrophysics (online).
              </li>
              <li>
                <strong>June 2023</strong> — Cosmology, Summer School on Theoretical Physics,
                Institute of Physics and Technology, Mongolian Academy of Sciences (online).
              </li>
              <li>
                <strong>Nov. 2015</strong> — Cosmological simulations for PhD candidates,{" "}
                <a href="https://www.iiap.res.in/" {...ext}>Indian Institute of Astrophysics</a>,
                Bangalore: theory and hands-on session with Gadget-2 (8 hours).
              </li>
              <li>
                <strong>July 2015</strong> —{" "}
                <a href="http://psi.kias.re.kr/2015/sub03/sub03_01.php" {...ext}>Pyeongchang Summer Institute</a>:
                tutorials on cosmological N-body simulations with GOTPM — initial conditions,
                running, visualising and analysing (4 hours).
              </li>
              <li>
                <strong>Nov. 2013</strong> — Lecture on cosmological simulations for undergraduate
                astronomy students, Kyunghee University, Suwon.
              </li>
            </ul>
          }
        />

        <SectionFrame
          className="tile--wide"
          title="Teaching Assistant, Université Paris Diderot"
          dateRange="2008 – 2011"
          light
          align="left"
          description={
            <div className="split-cols">
              <div>
                <h3>Physics</h3>
                <ul style={{ listStyle: "disc", paddingLeft: "1.2em" }}>
                  <li>
                    <strong>2010–2011</strong> — Tutorials, first-year BSc (L1), with François
                    Vannucci: hydrostatics, hydrodynamics, kinematics.
                  </li>
                  <li>
                    <strong>2009–2010</strong> — Tutorials, first-year BSc (L1), with Sébastien
                    Charnoz: hydrostatics, hydrodynamics, energy.
                  </li>
                  <li><strong>2008–2009</strong> — Experimental work in mechanics.</li>
                </ul>
              </div>
              <div>
                <h3>Data analysis in Earth science</h3>
                <ul style={{ listStyle: "disc", paddingLeft: "1.2em" }}>
                  <li>
                    <strong>2008–2011</strong> — Computing tutorials in data analysis with MATLAB,
                    first-year Master&apos;s (M1) in Earth Science, with Olivier de Viron: frequency
                    analysis, statistics, least-squares methods, wavelets.
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

export default TeachingPage

export const Head = () => (
  <Seo
    title="Teaching"
    pathname="/teaching/"
    description="Courses at Sejong University, invited lectures on cosmological simulations, student supervision, and teaching philosophy."
  />
)
