import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const ext = { target: "_blank", rel: "noopener noreferrer" }

// Korean press coverage of the 2024 Nature Astronomy paper
const pressKr = [
  ["Asia Times", "https://www.asiatime.co.kr/article/20241115500214#_mobwcvr"],
  ["Chosun Ilbo", "https://lifenlearning.chosun.com/pan/site/data/html_dir/2024/11/15/2024111501066.html"],
  ["Daily Smart", "https://www.dailysmart.co.kr/news/articleView.html?idxno=100222"],
  ["Digital Times", "https://www.dt.co.kr/contents.html?article_no=2024111502109954056001&ref=naver"],
  ["Dong-A", "https://edu.donga.com/news/articleView.html?idxno=78511"],
  ["ENews Today", "https://www.enewstoday.co.kr/news/articleView.html?idxno=2200326"],
  ["Kyosu.net", "https://www.kyosu.net/news/articleView.html?idxno=127472"],
  ["Money Today", "https://news.mt.co.kr/mtview.php?no=2024111510543598127"],
  ["Minju Sinmun", "https://www.iminju.net/news/articleView.html?idxno=112247"],
  ["Newsis", "https://www.newsis.com/view/NISX20241115_0002960360"],
  ["NewsTNT", "https://www.newstnt.com/news/articleView.html?idxno=431479"],
  ["Newswell", "https://www.newswell.co.kr/news/articleView.html?idxno=10536"],
  ["ONews", "https://www.onews.tv/news/articleView.html?idxno=225414"],
  ["PS News", "https://www.psnews.co.kr/news/articleView.html?idxno=2072912"],
  ["UNN", "https://news.unn.net/news/articleView.html?idxno=571092"],
  ["Veritas-a", "https://www.veritas-a.com/news/articleView.html?idxno=529635"],
  ["W Sobi", "http://www.wsobi.com/news/articleView.html?idxno=260206"],
]

const news = [
  {
    date: "2026-06-04",
    body: (
      <>
        <Link to="/the-group/#clea">Cléa Millard</Link>&apos;s paper was accepted. Congratulations Cléa!
      </>
    ),
  },
  {
    date: "2026-04-08",
    body: (
      <>
        <Link to="/the-group/#ussan">Ussan Abbassi</Link> (
        <a href="https://www.ens.psl.eu/" {...ext}>École Normale Supérieure</a>) joins the group to
        work on cosmology with gravitational waves.
      </>
    ),
  },
  {
    date: "2026-03-22",
    body: (
      <>
        <Link to="/the-group/#hyeon">Hyeon Kim</Link>&apos;s paper on the non-parametric estimation
        of the baryon gas fraction and the cosmological bias with clusters was submitted:{" "}
        <a href="https://arxiv.org/abs/2603.13763" {...ext}>arXiv:2603.13763</a>.
      </>
    ),
  },
  {
    date: "2026-03-01",
    body: (
      <>
        <Link to="/the-group/#tarik">Tarik Ouadjou</Link> (
        <a href="https://www.centralesupelec.fr/" {...ext}>CentraleSupélec</a>) joins the group to
        work on machine learning with the{" "}
        <a href="https://www.skao.int/" {...ext}>Square Kilometre Array (SKA)</a>.
      </>
    ),
  },
  {
    date: "2026-01-29",
    body: (
      <>
        <Link to="/the-group/#clea">Cléa Millard</Link>&apos;s first paper, on tests of the FLRW
        model, was submitted:{" "}
        <a href="https://arxiv.org/abs/2601.20293" {...ext}>arXiv:2601.20293</a>.
      </>
    ),
  },
  {
    date: "2025-12-05",
    body: <>Si Hyeong Noh defended his Master&apos;s thesis. Congratulations!</>,
  },
  {
    date: "2025-11-17 → 21",
    body: (
      <>
        The{" "}
        <a href="https://sites.google.com/view/frkrcosmo2025/home" {...ext}>
          2025 France-Korea Workshop on Cosmology
        </a>{" "}
        was held at Sejong University.
      </>
    ),
  },
  {
    date: "2025",
    body: (
      <>
        Seung-gyu Hwang was awarded the{" "}
        <a href="https://www.coree.campusfrance.org/peulangseu-jeongbu-janghaggeum-france-excellence" {...ext}>
          France Excellence grant
        </a>{" "}
        to start a PhD in the{" "}
        <a href="https://www.cosmostat.org/" {...ext}>CosmoStat group</a> at CEA Saclay.
        Congratulations Seung-gyu!
      </>
    ),
  },
  {
    date: "2024-11-14",
    body: (
      <>
        Discovery of an alignment between the small-scale jets of supermassive black holes and the
        orientation of their host galaxies, published in{" "}
        <a href="https://www.nature.com/articles/s41550-024-02407-4" {...ext}>Nature Astronomy</a>.
        See also the article in The Conversation{" "}
        <a href="https://theconversation.com/egg-shaped-galaxies-may-be-aligned-to-the-black-holes-at-their-hearts-astronomers-find-236699" {...ext}>Australia</a>,{" "}
        <a href="https://theconversation.com/decouverte-inattendue-dun-lien-entre-les-jets-des-trous-noirs-et-leurs-galaxies-hotes-237890" {...ext}>France</a>{" "}and{" "}
        <a href="https://theconversation.com/hallados-indicios-de-conexion-entre-agujeros-negros-y-sus-galaxias-239641" {...ext}>Spain</a>.
      </>
    ),
    press: pressKr,
  },
  {
    date: "2024-10-07 → 11",
    body: (
      <>
        First{" "}
        <a href="https://sites.google.com/view/francekoreacosmology2024/home?authuser=0" {...ext}>
          France-Korea Workshop on Cosmology
        </a>{" "}
        at Institut d&apos;Astrophysique Spatiale, Université Paris-Saclay.
      </>
    ),
  },
  {
    date: "2024-09-01",
    body: (
      <>
        Ms. <Link to="/the-group/#clea">Cléa Millard</Link> joins the group as a PhD candidate.
      </>
    ),
  },
  {
    date: "2023-10-01 → 2025-09-30",
    body: (
      <>
        <a href="https://phc-star.ias.universite-paris-saclay.fr/home" {...ext}>PHC STAR joint funding</a>{" "}
        with Prof. Marian Douspis&apos; group at Institut d&apos;Astrophysique Spatiale, Université
        Paris-Saclay.
      </>
    ),
  },
  {
    date: "2023-03-01",
    body: (
      <>
        M. <Link to="/the-group/#hyeon">Hyeon Kim</Link> starts as an integrated Master&apos;s + PhD
        candidate.
      </>
    ),
  },
  {
    date: "2023-01-01",
    body: <>M. Si Hyeong Noh joins the group as a Master&apos;s candidate.</>,
  },
  {
    date: "2022-06-01 → 2025-01-28",
    body: <>NRF Grant (~180M KRW): “Testing General Relativity with Upcoming Surveys”.</>,
  },
  {
    date: "2021-03-01",
    body: (
      <>
        Establishment of the <Link to="/the-group/">physical cosmology group</Link> at Sejong
        University.
      </>
    ),
  },
  {
    date: "2020-05-24",
    body: (
      <>
        Press release about the VLBI measurement of cosmic distances in{" "}
        <a href="http://www.hani.co.kr/arti/science/science_general/946070.html" {...ext}>
          Hankyoreh (in Korean)
        </a>.
      </>
    ),
  },
  {
    date: "2019-06-01 → 2022-05-31",
    body: <>NRF Grant (~150k USD): “Testing the cosmological model with the large-scale structures”.</>,
  },
]

const IndexPage = () => (
  <Layout>
    <section className="home-hero">
      <img
        className="home-hero__img"
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
          <img
            src="/images/timeline_draft6.png"
            alt="Timeline of Benjamin L'Huillier's career from 2007 to 2026: transition from engineering, PhD in Paris, KIAS, KASI, Yonsei, and Sejong University"
          />
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
          style={{ backgroundImage: 'url("/images/file-20241111-15-3hrrqd.avif")' }}
        >
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

        <ul className="news-list">
          {news.map((item) => (
            <li key={item.date + String(item.body)}>
              <span className="news-date">{item.date}</span>
              <p className="news-body">{item.body}</p>
              {item.press && (
                <p className="press-links">
                  Press releases in Korean:{" "}
                  {item.press.map(([label, href], i) => (
                    <React.Fragment key={href + label}>
                      {i > 0 && " · "}
                      <a href={href} {...ext}>{label}</a>
                    </React.Fragment>
                  ))}
                </p>
              )}
            </li>
          ))}
        </ul>
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
