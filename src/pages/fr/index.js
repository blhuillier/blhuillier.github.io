import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import ParallaxBg from "../../components/ParallaxBg"
import NewsList from "../../components/NewsList"
import { news } from "../../data/news"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const IndexPageFr = () => (
  <Layout lang="fr">
    <section className="home-hero">
      <img
        className="home-hero__img"
        data-parallax="img"
        src="/images/aboutmefinal1.jpg"
        alt="Illustration de Benjamin L’Huillier qui court, travaille sur un ordinateur et joue de la musique, devant un tableau de cosmologie"
      />
      <div className="home-hero__overlay">
        <h1 className="home-hero__name">Benjamin L&apos;Huillier</h1>
        <p className="home-hero__tagline">cosmologiste français en Corée du Sud</p>
      </div>
    </section>

    <section className="section section--paper">
      <div className="wrap">
        <figure className="timeline-figure">
          <a className="bare" href="/images/timeline_draft6.png" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/timeline_draft6.png"
              alt="Frise chronologique du parcours de Benjamin L’Huillier de 2007 à 2026 : de l’ingénierie à la thèse à Paris, puis KIAS, KASI, Yonsei et l’Université Sejong"
            />
          </a>
          <figcaption className="timeline-figure__hint">Touchez pour agrandir</figcaption>
        </figure>
      </div>

      <div className="wrap--narrow">
        <h2 className="section-title">Mon parcours en bref</h2>

        <div className="prose">
          <p>
            Je suis professeur assistant au{" "}
            <a href="https://sejong.elsevierpure.com/en/organisations/department-of-physics-and-astronomy" {...ext}>
              Département de physique et d’astronomie
            </a>{" "}
            de l’<a href="https://en.sejong.ac.kr/eng/index.do" {...ext}>Université Sejong</a>, à
            Séoul. J’utilise des méthodes statistiques avancées pour tester le modèle standard de la
            cosmologie et ses hypothèses fondamentales, à l’aide de données et de simulations de
            pointe.
          </p>
          <p>
            <Link to="/fr/research/">Mes recherches</Link> sont financées par la{" "}
            <a href="https://www.nrf.re.kr/eng/main" {...ext}>National Research Foundation of Korea</a>.
            J’explore les limites du modèle de concordance ΛCDM à l’aide de simulations à N corps —
            dans le cadre du modèle standard comme au-delà — et j’applique des méthodes statistiques
            avancées pour en tester les hypothèses. J’ai aussi été membre de la{" "}
            <a href="http://desi.lbl.gov/" {...ext}>collaboration DESI</a>, au sein des groupes de
            travail sur le domaine temporel et sur les simulations cosmologiques.
          </p>
          <p>
            J’ai préparé ma thèse au{" "}
            <a href="https://lux.observatoiredeparis.psl.eu/" {...ext}>LUX</a> (Observatoire de Paris)
            et à <a href="https://www.sorbonne-universite.fr/" {...ext}>Sorbonne Université</a>, dans
            l’équipe{" "}
            <a href="http://lerma.obspm.fr/spip.php?article4&lang=fr" {...ext}>Galaxies et cosmologie</a>{" "}
            avec <a href="http://aramis.obspm.fr/~combes" {...ext}>Françoise Combes</a> et{" "}
            <a href="http://aramis.obspm.fr/~semelin" {...ext}>Benoit Semelin</a>, dans le cadre du{" "}
            <a href="http://aramis.obspm.fr/~combes/ERC-momentum/" {...ext}>projet Momentum</a>. En
            parallèle, j’ai enseigné la physique et l’analyse de données comme moniteur à l’
            <a href="https://u-paris.fr/" {...ext}>Université Paris Cité</a>.
          </p>
          <p>
            Depuis 2012, je travaille en Corée du Sud, un pôle de recherche en plein essor, en
            particulier en astronomie et en cosmologie. De 2012 à 2016, j’ai été chercheur
            postdoctoral au{" "}
            <a href="http://www.kias.re.kr/" {...ext}>Korea Institute for Advanced Study</a> (KIAS),
            avec{" "}
            <a href="http://astro.kias.re.kr/cbp/" {...ext}>Changbom Park</a> et{" "}
            <a href="http://astro.kias.re.kr/~kjhan/" {...ext}>Juhan Kim</a> dans le{" "}
            <a href="https://astro.kias.re.kr/" {...ext}>groupe d’astrophysique et de cosmologie</a>,
            sur la formation des structures à l’aide de simulations numériques comme{" "}
            <a href="http://sdss.kias.re.kr/astro/Horizon-Runs/" {...ext}>Horizon Run 4</a>. J’ai
            ensuite rejoint le groupe <a href="http://cosmology.kasi.re.kr/" {...ext}>CosKASI</a> du{" "}
            <a href="https://www.kasi.re.kr/eng/index" {...ext}>Korea Astronomy and Space Science Institute</a>{" "}
            à Daejeon, avec{" "}
            <a href="http://cosmology.kasi.re.kr/shafieloo/index.html" {...ext}>Arman Shafieloo</a>,
            avant de devenir professeur de recherche et{" "}
            <a href="https://ui.adsabs.harvard.edu/abs/1948PA.....56..119B/abstract" {...ext}>W. C. Rufus</a>{" "}
            Fellow avec{" "}
            <a href="http://narnia.yonsei.ac.kr/mediawiki/index.php/Main_Page" {...ext}>James Jee</a>{" "}
            à l’Université Yonsei.
          </p>
        </div>

        <p className="inline-links">
          <a href="https://sites.google.com/view/9kjwde/home?authuser=0" {...ext}>
            Korea-Japan Workshop on Dark Energy
          </a>
          <span>•</span>
          Friends of Sejong Workshop{" "}
          <a href="https://sites.google.com/view/friends-of-sejong-2023/home" {...ext}>2023</a> &amp;{" "}
          <a href="https://sites.google.com/view/friends-of-sejong2024" {...ext}>2024</a>
          <span>•</span>
          <a href="https://phc-star.ias.universite-paris-saclay.fr/home" {...ext}>
            Projet PHC STAR France–Corée
          </a>
          <span>•</span>
          <a href="https://sites.google.com/view/frkrcosmo2025/home" {...ext}>
            France-Korea Workshop on Cosmology 2025
          </a>
        </p>
      </div>
    </section>

    <section className="section section--white">
      <div className="wrap">
        <h2 className="section-title">Actualités</h2>

        <div className="news-feature">
          <ParallaxBg image="/images/file-20241111-15-3hrrqd.avif" />
          <div className="news-feature__inner">
            <h3 className="news-feature__title">
              Les jets des trous noirs supermassifs sont alignés avec leur galaxie hôte
            </h3>
            <p className="news-feature__sub">
              Détection d’un alignement orthogonal entre les jets d’AGN à l’échelle du parsec et
              leurs galaxies hôtes (<em>Nature Astronomy</em>, 2025).
            </p>
            <a className="btn" href="https://www.nature.com/articles/s41550-024-02407-4" {...ext}>
              Lire l’article
            </a>
          </div>
        </div>

        <NewsList items={news} lang="fr" />
      </div>
    </section>

    <section className="section section--warm">
      <div className="wrap--narrow contact-band">
        <h2 className="section-title">Où me trouver</h2>
        <p className="label">Adresse</p>
        <p>Département de physique et d’astronomie, Université Sejong</p>
        <p>Gwangjin-gu, Neungdong-ro 209, Séoul 05006, Corée du Sud</p>
        <p style={{ marginTop: "1.4em" }} className="label">E-mail</p>
        <p>
          <a href="mailto:benjamin@sejong.ac.kr">benjamin@sejong.ac.kr</a>
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPageFr

export const Head = () => (
  <Seo
    pathname="/fr/"
    fullTitle="Benjamin L’Huillier — Cosmologiste et astrophysicien"
    description="Benjamin L’Huillier est un cosmologiste français, professeur assistant à l’Université Sejong (Séoul). Il teste le modèle standard de la cosmologie à l’aide de simulations à N corps et de méthodes statistiques avancées."
  />
)
