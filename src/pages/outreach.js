import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageHero from "../components/PageHero"
import OutreachItem from "../components/OutreachItem"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const OutreachPage = () => (
  <Layout>
    <PageHero
      title="Public Outreach"
      tagline="science, in public, in two languages"
      image="/images/outreach_edited.jpg"
    />

    <section className="section section--white">
      <div className="wrap--narrow prose">
        <p>
          My approach to outreach blends education, cultural exchange, and creative experimentation.
          I currently mentor high-school students preparing for physics olympiads, and regularly give
          talks in schools and public venues. I&apos;ve led hands-on workshops in cosmology,
          contributed to bilingual educational programmes, and given invited lectures at
          international schools and cultural centres in Korea. As a French scientist based in Seoul,
          I&apos;ve been actively involved in fostering scientific and cultural dialogue between
          France and Korea—through collaborations with embassies, cultural institutes, and
          educational organisations.
        </p>
        <p>
          I also host high-school students from the French school for short internships, offering
          them a first immersion into the world of scientific research—encouraging them to ask
          questions, engage with data, and experience how science is actually done. Through
          collaborations with artists, I&apos;ve explored new forms of storytelling that bring
          scientific ideas to life—co-creating VR experiences that revisit traditional Korean
          constellations through a contemporary lens, and consulting on speculative Martian
          greenhouse designs. These projects reflect a broader commitment—not only to making science
          visible and approachable, but to encouraging public dialogue, imagination, and
          questioning—spaces where new forms of understanding can emerge.
        </p>
      </div>
    </section>

    <section className="section section--paper">
      <div className="wrap">
        <OutreachItem
          meta="Seoul French School · ongoing"
          title="Mentoring for the French National Physics Olympiad"
          image="/images/lfs2-web.jpg"
          alt="Students at the Lycée Français de Seoul"
        >
          <p>
            I mentor students from the Seoul French School for the French National Physics Olympiad.
            The team qualified for the finals and was awarded 3rd prize.
          </p>
          <p>
            <a href="https://pr.sejong.ac.kr/news/people/faculty.do?mode=view&articleNo=863364" {...ext}>
              Sejong University press release
            </a>
          </p>
        </OutreachItem>

        <OutreachItem
          meta="2024"
          title="Seoul French School"
          href="https://lfseoul.org/en/"
          image="/images/lfs1-web.jpg"
          alt="Public talk at the Lycée Français de Seoul"
        >
          <p>Public talk on cosmology.</p>
        </OutreachItem>

        <OutreachItem
          meta="June 2023"
          title="Lycée International Xavier"
          href="https://www.xavier.sc.kr/"
          image="/images/lix-web.jpg"
          alt="Public talk at the Lycée International Xavier in Seoul"
        >
          <p>
            “A Brief History of the Universe”: public talk to French-speaking high-school students.
          </p>
        </OutreachItem>

        <OutreachItem
          meta="April 2023"
          title="French Cultural Center"
          href="https://kr.ambafrance-culture.org"
          image="/images/ccl1-web.jpg"
          alt="Public talk at the French Cultural Center in Seoul"
        >
          <p>
            “A Brief History of the Universe”: public talk in French for French learners, with
            simultaneous interpretation into Korean.
          </p>
        </OutreachItem>

        <OutreachItem
          meta="ISEA 2019, Gwangju, Korea"
          title="Rediscovering Korean Ancient Skies in Virtual Reality"
          href="https://www.cronopioz.com/projects/visualization-korea-gaia"
          image="/images/koreanskies.jpg"
          alt="Virtual reality visualization of traditional Korean constellations"
        >
          <p>
            Collaboration with artist{" "}
            <a href="https://www.cronopioz.com" {...ext}>Sung-A Jang</a>. We identified ancient
            Korean constellations in the Hipparcos and Gaia catalogues, and visualised them in an
            interactive 3D map built in virtual reality. Presented at the International Symposium on
            Electronic Art (ISEA) 2019 in Gwangju, Korea.
          </p>
          <p>
            <a href="/images/jang_lhuillier_2019.pdf" {...ext}>Read the ISEA 2019 paper (PDF)</a>
          </p>
        </OutreachItem>

        <OutreachItem
          meta="October 2016"
          title="Daejeon International Science Festival — France booth"
        >
          <p>Presentation of French science and scientists, with Korean interpretation.</p>
        </OutreachItem>

        <OutreachItem
          meta="Seoul"
          title="Public talks on the history of the Universe"
        >
          <p>
            Talks on the history of our Universe delivered at the Seoul French School, the Lycée
            International Xavier, and the French Cultural Center.
          </p>
        </OutreachItem>
      </div>
    </section>
  </Layout>
)

export default OutreachPage

export const Head = () => (
  <Seo
    title="Outreach"
    pathname="/outreach/"
    description="Public talks, physics olympiad mentoring, France–Korea science and culture exchange, and art–science collaborations including a VR visualization of traditional Korean constellations."
  />
)
