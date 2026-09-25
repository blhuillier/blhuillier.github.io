import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/PageHero"
import SummaryFrame from "../components/SummaryFrame"
import SectionFrame from "../components/SectionFrame"

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

    <SectionFrame
      title="Courses at Sejong University"
      dateRange="Since 2021"
      image="/images/structure%20bg_edited_edited.jpg"
      align="left"
      description={
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "28px" }}>
          <div>
            <p className="section-frame__dates" style={{ marginBottom: ".6em" }}>Graduate school</p>
            <ul>
              <li>Fall 2025 — Astronomical Data Analysis</li>
              <li>Spring 2024 — Mathematical Astronomy</li>
              <li>Fall 2023 — Advanced Astronomical Instrumentation</li>
              <li>Fall 2022 — Mathematical Astronomy</li>
              <li>Fall 2021 — Cosmology</li>
              <li>Spring 2021 — Astronomical Data Analysis</li>
            </ul>
          </div>
          <div>
            <p className="section-frame__dates" style={{ marginBottom: ".6em" }}>Undergraduate</p>
            <ul>
              <li>Spring 2026 — Mathematical Physics I</li>
              <li>Fall 2025 — Mathematical Physics II</li>
              <li>Spring 2025 — Mathematical Physics I</li>
              <li>Fall 2024 — Physics of Everyday Life</li>
              <li>Spring 2024 — General Physics I</li>
              <li>Fall 2023 — Introduction to Astronomy</li>
              <li>Spring 2023 — General Physics I</li>
              <li>Spring 2022 — General Physics I</li>
            </ul>
          </div>
        </div>
      }
    />

    <SectionFrame
      title="Cosmological Simulations — invited lectures"
      dateRange="2013 →"
      image="/images/zoom_t91_edited_edited.png"
      align="left"
      description={
        <ul>
          <li>
            <strong>July 2025</strong> — “Gaussian Process by Example”, STAR Summer School 2025,
            Indian Institute of Astrophysics (online).
          </li>
          <li>
            <strong>June 2023</strong> — Cosmology, Summer School on Theoretical Physics, Institute
            of Physics and Technology, Mongolian Academy of Sciences (online).
          </li>
          <li>
            <strong>Nov. 2015</strong> — Invited lecture on cosmological simulations for PhD
            candidates, Indian Institute of Astrophysics, Bangalore, India. Theory and hands-on
            session with Gadget-2 (8 hours).
          </li>
          <li>
            <strong>July 2015</strong> — Pyeongchang Summer Institute 2015: tutorials on
            cosmological N-body simulations using the GOTPM code — designing initial conditions,
            running the simulation, visualising and analysing the outputs (4 hours).
          </li>
          <li>
            <strong>Nov. 2013</strong> — One-hour lecture on cosmological simulations to
            undergraduate astronomy students, Kyunghee University, Suwon, Korea.
          </li>
        </ul>
      }
    />

    <SectionFrame
      title="Student supervision"
      light
      align="left"
      description={
        <>
          <p>I am always happy to work with motivated students.</p>
          <ul style={{ listStyle: "disc", paddingLeft: "1.2em" }}>
            <li><strong>2023 → now</strong> — Si Hyeong Noh, Hyeon Kim, Cléa Millard</li>
            <li>
              <strong>2022</strong> — Co-supervision of David Fernández Gil (Post-Master&apos;s
              researcher): alignment of AGN and galaxies
            </li>
            <li>
              <strong>Dec. 2019 → 2025</strong> — Seung-gyu Hwang (Yonsei, Master&apos;s): testing
              gravity with the large-scale structure
            </li>
            <li><strong>Summer 2019</strong> — Sohee Chun (Emory, rising sophomore): SN Ia cosmology</li>
            <li>
              <strong>Summer 2017</strong> — Co-supervision of Hyungjin Kim (Waterloo,
              Master&apos;s): using redshift-space distortions and supernovae to constrain gravity
            </li>
          </ul>
        </>
      }
    />

    <SectionFrame
      title="Teaching Assistant, Université Paris Diderot"
      dateRange="2008 – 2011"
      light
      align="left"
      description={
        <>
          <p><strong>Physics</strong></p>
          <ul style={{ listStyle: "disc", paddingLeft: "1.2em" }}>
            <li>
              <strong>2010–2011</strong> — Tutorials in physics, first-year BSc (L1), with François
              Vannucci: hydrostatics, hydrodynamics, kinematics.
            </li>
            <li>
              <strong>2009–2010</strong> — Tutorials in physics, first-year BSc (L1), with Sébastien
              Charnoz: hydrostatics, hydrodynamics, energy.
            </li>
            <li><strong>2008–2009</strong> — Experimental work in mechanics.</li>
          </ul>
          <p style={{ marginTop: "1.4em" }}><strong>Data analysis in Earth science</strong></p>
          <ul style={{ listStyle: "disc", paddingLeft: "1.2em" }}>
            <li>
              <strong>2008–2011</strong> — Computing tutorials in data analysis with MATLAB,
              first-year Master&apos;s (M1) in Earth Science, with Olivier de Viron: frequency
              analysis, statistics, least-squares methods, wavelets.
            </li>
          </ul>
        </>
      }
    />
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
