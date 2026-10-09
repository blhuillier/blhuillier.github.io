import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ParallaxBg from "../components/ParallaxBg"
import NewsList from "../components/NewsList"
import { news } from "../data/news"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const IndexPage = () => (
  <Layout>
    <section className="home-hero">
      <img
        className="home-hero__img"
        data-parallax="img"
        src="/images/aboutmefinal1.jpg"
        alt="Illustration of Benjamin L'Huillier running, working at a laptop, and playing music, against a cosmology blackboard"
      />
      <div className="home-hero__overlay">
        <h1 className="home-hero__name">Benjamin L&apos;Huillier</h1>
        <p className="home-hero__tagline">French cosmologist in South Korea</p>
      </div>
    </section>

    <section className="section section--paper">
      <div className="wrap">
        <figure className="timeline-figure">
          <a className="bare" href="/images/timeline_draft6.png" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/timeline_draft6.png"
              alt="Timeline of Benjamin L'Huillier's career from 2007 to 2026: transition from engineering, PhD in Paris, KIAS, KASI, Yonsei, and Sejong University"
            />
          </a>
          <figcaption className="timeline-figure__hint">Tap to enlarge</figcaption>
        </figure>
      </div>

      <div className="wrap--narrow">
        <h2 className="section-title">My science journey redux</h2>

        <div className="prose">
          <p>
            I am an Assistant Professor in the{" "}
            <a href="https://sejong.elsevierpure.com/en/organisations/department-of-physics-and-astronomy" {...ext}>
              Department of Physics and Astronomy
            </a>{" "}
            at <a href="https://en.sejong.ac.kr/eng/index.do" {...ext}>Sejong University</a> in
            Seoul, South Korea. I use advanced statistical methods to test the concordance model of
            cosmology and its underlying hypotheses using state-of-the-art data and simulations.
          </p>
          <p>
            <Link to="/research/">My research</Link> is supported by the{" "}
            <a href="https://www.nrf.re.kr/eng/main" {...ext}>National Research Foundation of Korea</a>.
            I explore the limits of the concordance ΛCDM model using N-body simulations—both within
            and beyond the standard model—and apply advanced statistical methods to test its
            assumptions. I was also a member of the{" "}
            <a href="http://desi.lbl.gov/" {...ext}>DESI collaboration</a>, contributing to the time
            domain and the cosmological simulations working groups.
          </p>
          <p>
            I completed my PhD at{" "}
            <a href="https://lux.observatoiredeparis.psl.eu/" {...ext}>LUX</a>, Paris Observatory and{" "}
            <a href="https://www.sorbonne-universite.fr/" {...ext}>Paris Sorbonne University</a>,
            working in the{" "}
            <a href="http://lerma.obspm.fr/spip.php?article4&lang=fr" {...ext}>Galaxies and Cosmology</a>{" "}
            group with{" "}
            <a href="http://aramis.obspm.fr/~combes" {...ext}>Françoise Combes</a> and{" "}
            <a href="http://aramis.obspm.fr/~semelin" {...ext}>Benoit Semelin</a>, and as a member of
            the <a href="http://aramis.obspm.fr/~combes/ERC-momentum/" {...ext}>Momentum project</a>.
            During that time, I also taught physics and data analysis as a teaching assistant at the{" "}
            <a href="https://u-paris.fr/" {...ext}>Université Paris Cité</a>.
          </p>
          <p>
            Since 2012, I have been based in South Korea—a growing hub for research, in particular in
            astronomy and cosmology. I was a Research Fellow from 2012 to 2016 at the{" "}
            <a href="http://www.kias.re.kr/" {...ext}>Korea Institute for Advanced Study</a> (KIAS),
            working with Profs.{" "}
            <a href="http://astro.kias.re.kr/cbp/" {...ext}>Changbom Park</a> and{" "}
            <a href="http://astro.kias.re.kr/~kjhan/" {...ext}>Juhan Kim</a> in the{" "}
            <a href="https://astro.kias.re.kr/" {...ext}>Astrophysics and Cosmology group</a> on
            cosmological structure formation using numerical simulations such as{" "}
            <a href="http://sdss.kias.re.kr/astro/Horizon-Runs/" {...ext}>Horizon Run 4</a>. I then
            joined the <a href="http://cosmology.kasi.re.kr/" {...ext}>CosKASI</a> group at the{" "}
            <a href="https://www.kasi.re.kr/eng/index" {...ext}>Korea Astronomy and Space Science Institute</a>{" "}
            in Daejeon, working with{" "}
            <a href="http://cosmology.kasi.re.kr/shafieloo/index.html" {...ext}>Arman Shafieloo</a>,
            before becoming Research Professor and{" "}
            <a href="https://ui.adsabs.harvard.edu/abs/1948PA.....56..119B/abstract" {...ext}>W. C. Rufus</a>{" "}
            Fellow working with{" "}
            <a href="http://narnia.yonsei.ac.kr/mediawiki/index.php/Main_Page" {...ext}>James Jee</a>{" "}
            at Yonsei University.
          </p>
        </div>

        <p className="inline-links">
          <a href="https://sites.google.com/view/9kjwde/home?authuser=0" {...ext}>
            Korea-Japan workshop on DE
          </a>
          <span>•</span>
          Friends of Sejong workshop{" "}
          <a href="https://sites.google.com/view/friends-of-sejong-2023/home" {...ext}>2023</a> &amp;{" "}
          <a href="https://sites.google.com/view/friends-of-sejong2024" {...ext}>2024</a>
          <span>•</span>
          <a href="https://phc-star.ias.universite-paris-saclay.fr/home" {...ext}>
            PHC-STAR France-Korea project
          </a>
          <span>•</span>
          <a href="https://sites.google.com/view/frkrcosmo2025/home" {...ext}>
            2025 France-Korea Workshop on Cosmology
          </a>
        </p>
      </div>
    </section>

    <section className="section section--white">
      <div className="wrap">
        <h2 className="section-title">News</h2>

        <div
          className="news-feature"
        >
          <ParallaxBg image="/images/file-20241111-15-3hrrqd.avif" />
          <div className="news-feature__inner">
            <h3 className="news-feature__title">
              Detection of an orthogonal alignment between parsec-scale AGN jets and their host
              galaxies
            </h3>
            <p className="news-feature__sub">
              Egg-shaped galaxies may be aligned to the black holes at their hearts.
            </p>
            <a
              className="btn"
              href="https://www.nature.com/articles/s41550-024-02407-4"
              {...ext}
            >
              Read article
            </a>
          </div>
        </div>

        <NewsList items={news} />
      </div>
    </section>

    <section className="section section--warm">
      <div className="wrap--narrow contact-band">
        <h2 className="section-title">Where to find me</h2>
        <p className="label">Address</p>
        <p>Department of Physics and Astronomy, Sejong University</p>
        <p>Gwangjin-gu, Neungdong-ro 209, Seoul 05006, South Korea</p>
        <p style={{ marginTop: "1.4em" }} className="label">Email</p>
        <p>
          <a href="mailto:benjamin@sejong.ac.kr">benjamin@sejong.ac.kr</a>
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => (
  <Seo
    pathname="/"
    description="Benjamin L'Huillier is a French cosmologist and Assistant Professor at Sejong University, Seoul. He tests the concordance model of cosmology with N-body simulations and advanced statistical methods."
  />
)
