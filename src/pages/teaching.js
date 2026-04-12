import React from "react"
import Layout from "../components/Layout"
import SummaryFrame from "../components/SummaryFrame"
import SectionFrame from "../components/SectionFrame"

// Placeholder images for sections where available
// Remove the `cosmology.jpg` import to use a dark background instead

const TeachingPage = () => (
  <Layout>
    {/* Summary Section */}
    <SummaryFrame 
      title="Teaching"
      summary="Passing knowledge to a new generation. During my career, I had the opportunity to teach different topics (physics, data analysis, cosmological simulations) in different languages (French and English) and at different levels (Undergrad to Ph.D. level). Since 2021, I have been teaching both at the undergraduate (Physics, Astronomy for non-science majors) and graduate (Statistics, Cosmology, Instrumentation) levels. Before that, I gave a lecture on cosmological simulations at Kyunghee University, and hands-on sessions on cosmological simulations at the Pyeongchang Summer Institute 2015. I was also invited to the Indian Institute for Astrophysics (Bangalore) to teach cosmological simulations. During my Ph.D., I was a teaching assistant at the Université Paris 7 Denis Diderot. I gave tutorials in Physics and in data analysis for Earth sciences."
    />

    {/* 1. Assistant Professor Section at Sejong University */}
    <SectionFrame
      title="Assistant Professor at Sejong University"
      dateRange="Since 2021"
      description={
        <>
          <h4>Graduate Courses</h4>
          <ul>
            <li><strong>Mathematical Astronomy:</strong> Fall 2022, Spring 2024</li>
            <li><strong>Cosmology:</strong> Fall 2021</li>
            <li><strong>Astronomical Data Analysis:</strong> Spring 2021, Fall 2025</li>
            <li><strong>Advanced Astronomical Instruments:</strong> Fall 2023</li>
          </ul>
          <h4>Undergraduate Courses</h4>
          <ul>
            <li><strong>Mathematical Physics II:</strong> Fall 2025</li>
            <li><strong>Mathematical Physics I:</strong> Spring 2025, Spring 2026</li>
            <li><strong>General Physics I:</strong> Spring 2022, Spring 2023, Spring 2024</li>
            <li><strong>Intro to Astronomy:</strong> Fall 2023</li>
            <li><strong>Physics of Everyday Life:</strong> Fall 2024</li>
          </ul>
        </>
      }
    />

    {/* 2. Invited Lectures Section */}
    <SectionFrame
      title="Invited Lectures"
      dateRange="2015-"
      description={
        <>
          <p><strong>July 2025:</strong> Gaussian Process by Example, STAR Summer School 2025, Indian Institute of Astrophysics (online).</p>
          <p><strong>June 2023:</strong> Cosmology, Summer School on Theoretical Physics, Institute of Physics and Technology, Mongolian Academy of Sciences (online).</p>
          <p><strong>Nov. 2015:</strong> Large-Scale Structures and Cosmological Simulations (8 hours), Indian Institute of Astrophysics, Bangalore, India.</p>
          <p><strong>July 2015:</strong> Lecture and hands-on session on cosmological simulations (4 hours), Pyeongchang Summer Institute, KIAS, Korea.</p>
          <p><strong>Nov. 2013:</strong> 1-hour lecture on cosmological simulations to undergraduate astronomy students, Kyunghee University, Suwon, Korea.</p>
        </>
      }
    />

    {/* 3. Teaching Assistant Section at Université Paris Diderot */}
    <SectionFrame
      title="Teaching Assistant at Université Paris Diderot"
      dateRange="2008 - 2011"
      description={
        <>
          <h4>1. Physics</h4>
          <p><strong>2010-2011:</strong> Tutorials of physics for first-year BSc students (L1) with François Vannucci: Hydrostatics, hydrodynamics, kinematics.</p>
          <p><strong>2009-2010:</strong> Tutorials of physics for first-year BSc students (L1) with Sébastien Charnoz: Hydrostatics, hydrodynamics, energy.</p>
          <p><strong>2008-2009:</strong> Experimental work in mechanics.</p>
          
          <h4>2. Data Analysis in Earth Science</h4>
          <p><strong>2008 - 2011:</strong> Computing tutorials in data analysis with MATLAB for first-year master’s (M1) students in Earth Science with Olivier de Viron: Frequency analysis, statistics, least square methods, wavelets.</p>
        </>
      }
    />
  </Layout>
)

export default TeachingPage
