import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import PageHero from "../../components/PageHero"
import SectionFrame from "../../components/SectionFrame"
import TeX from "../../components/TeX"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const more = "En savoir plus"

const ResearchPageFr = () => (
  <Layout lang="fr">
    <PageHero
      title="Recherche"
      tagline="des forces qui gouvernent l’expansion cosmique à la naissance des galaxies"
    />

    <section className="section section--dark section--tight">
      <div className="wrap">
        <img
          src="/images/researchareas_draft03_darker.png"
          alt="Schéma reliant les thèmes de recherche : énergie noire, gravité modifiée, inflation, structure à grande échelle et formation des galaxies"
          style={{ margin: "0 auto 46px", width: "100%", maxWidth: "820px" }}
        />
      </div>

      <div className="wrap--narrow prose prose--center">
        <p>
          Le modèle standard de la cosmologie, ΛCDM, est le plus souvent testé en l’ajustant aux
          données : on suppose le modèle correct, puis on en mesure les paramètres. Je prends le
          chemin inverse : reconstruire l’histoire de l’expansion cosmique et de la croissance des
          structures directement à partir des observations, sans supposer de modèle, puis vérifier
          si ΛCDM est compatible avec ce que l’on trouve. En parallèle, j’utilise des simulations
          cosmologiques à N corps pour comprendre comment les halos de matière noire et les galaxies
          se forment au sein de la structure à grande échelle.
        </p>
        <ul className="question-list">
          <li>L’Univers est-il homogène, isotrope et plat&nbsp;?</li>
          <li>Qu’est-ce qui accélère l’expansion de l’Univers&nbsp;?</li>
          <li>La relativité générale d’Einstein décrit-elle correctement la gravitation&nbsp;?</li>
          <li>Comment les galaxies et leurs trous noirs grandissent-ils dans la toile cosmique&nbsp;?</li>
        </ul>
        <p style={{ marginTop: "2em" }}>
          Les principaux articles sont sur la <Link to="/fr/publications/">page des publications</Link>.
        </p>
      </div>
    </section>

    <section className="section--dark">
      <div className="tile-grid">
        <SectionFrame
          title="Tester le modèle standard de la cosmologie"
          image="/images/2param_inverted_edited_edited.png"
          link="/fr/modeltesting/"
          moreLabel={more}
          description={
            <ul>
              <li>L’Univers est-il isotrope et homogène&nbsp;? La métrique est-elle FLRW&nbsp;?</li>
              <li>Quelle est la nature de l’énergie noire&nbsp;? Est-ce une constante cosmologique&nbsp;?</li>
              <li>Quelle est la courbure de l’Univers&nbsp;?</li>
            </ul>
          }
        />

        <SectionFrame
          title="Au-delà du modèle standard"
          image="/images/darkenergy1_edited.jpg"
          description={
            <ul>
              <li>Qu’est-ce que l’énergie noire&nbsp;?</li>
              <li>La gravitation est-elle bien décrite par la relativité générale d’Einstein&nbsp;?</li>
              <li>Le spectre de puissance primordial est-il une simple loi de puissance&nbsp;?</li>
            </ul>
          }
        />

        <SectionFrame
          title="Simulations cosmologiques"
          image="/images/zoom_t91_long.jpg"
          link="/fr/simulations/"
          moreLabel={more}
          description={
            <p>
              J’utilise des simulations cosmologiques à N corps pour étudier l’évolution des galaxies
              et des halos de matière noire au sein de la structure à grande échelle de l’Univers, et
              j’ai contribué à la conception et à l’analyse d’
              <a href="http://sdss.kias.re.kr/astro/Horizon-Runs/" {...ext}>Horizon Run 4</a>, l’une
              des plus grandes simulations cosmologiques au moment de sa publication. Les simulations
              permettent de construire des catalogues fictifs, de tester les chaînes d’analyse et
              d’interpréter les observations dans un cadre théorique contrôlé.
            </p>
          }
        />

        <SectionFrame
          title="Formation et évolution des galaxies"
          image="/images/HR4_1919_1199.jpg"
          link="/fr/galaxy-formation-and-evolution/"
          moreLabel={more}
          description={
            <ul>
              <li>Comment les galaxies assemblent-elles leur masse&nbsp;?</li>
              <li>Comment évoluent-elles au sein de la structure à grande échelle&nbsp;?</li>
              <li>Quel lien entre l’activité des noyaux actifs (AGN) et les propriétés de leur galaxie hôte&nbsp;?</li>
            </ul>
          }
        />
      </div>
    </section>

    <section className="section section--white">
      <div className="wrap">
        <h2 className="section-title">Résultats choisis</h2>
        <div className="card-grid">
          <article className="card">
            <h3>L’Univers est-il plat&nbsp;? Un test avec DESI DR2</h3>
            <p>
              En combinant les supernovae Pantheon+ et les oscillations acoustiques baryoniques de
              DESI DR2, sans supposer de modèle d’énergie noire, nous mesurons la courbure spatiale{" "}
              <TeX math={String.raw`\Omega_{k,0} = 0.045^{+0.045}_{-0.081}`} />, compatible avec un
              Univers FLRW plat et avec Planck 2018.
            </p>
            <a className="card-link" href="https://doi.org/10.1088/1475-7516/2026/08/016" {...ext}>
              Millard, L&apos;Huillier &amp; Douspis, JCAP 2026 →
            </a>
          </article>

          <article className="card">
            <h3>Des tests décisifs pour Rubin et DESI</h3>
            <p>
              Des prévisions avec les supernovae du LSST et les données de DESI montrent que notre
              reconstruction peut contraindre la courbure et{" "}
              <TeX math={String.raw`c/(H_0 r_\mathrm{d})`} /> à ±4&nbsp;% et ±0,1 près, sans
              supposer de forme particulière pour l’énergie noire.
            </p>
            <a className="card-link" href="https://doi.org/10.1088/1475-7516/2025/05/030" {...ext}>
              L&apos;Huillier et al., JCAP 2025 →
            </a>
          </article>

          <article className="card">
            <h3>Tester ΛCDM sans le supposer</h3>
            <p>
              Des diagnostics indépendants de tout modèle pour la métrique FLRW, la platitude et la
              cohérence entre l’histoire de l’expansion et la croissance des structures, appliqués
              aux données BAO, de supernovae et de croissance.
            </p>
            <a className="card-link" href="https://doi.org/10.1088/1475-7516/2017/01/015" {...ext}>
              JCAP 2017 · MNRAS 2018 · PRD 2018 →
            </a>
          </article>

          <article className="card">
            <h3>Bien utiliser les processus gaussiens</h3>
            <p>
              Une fonction moyenne nulle donne des reconstructions non physiques, et une moyenne ΛCDM
              ajustée les biaise. Marginaliser sur une famille de fonctions moyennes et sur les
              hyperparamètres donne des résultats robustes.
            </p>
            <a className="card-link" href="https://doi.org/10.1088/1475-7516/2023/02/014" {...ext}>
              Hwang, L&apos;Huillier et al., JCAP 2023 →
            </a>
          </article>

          <article className="card">
            <h3>Les jets des trous noirs «&nbsp;connaissent&nbsp;» leur galaxie</h3>
            <p>
              Dans environ 6&nbsp;000 paires galaxie–AGN, le jet observé en VLBI à l’échelle du parsec
              est faiblement mais significativement aligné avec le petit axe de sa galaxie hôte, à
              l’échelle du kiloparsec.
            </p>
            <a className="card-link" href="https://doi.org/10.1038/s41550-024-02407-4" {...ext}>
              Fernández Gil et al., Nature Astronomy 2025 →
            </a>
          </article>

          <article className="card">
            <h3>Des halos au-delà de la relativité générale</h3>
            <p>
              Dans des simulations à N corps de gravité f(R), de DGP et d’énergie noire couplée, seule
              l’énergie noire fortement couplée augmente le taux d’interaction des halos, et la
              gravité f(R) accroît le spin des halos tout en affaiblissant l’alignement des spins des
              paires en interaction.
            </p>
            <a className="card-link" href="https://doi.org/10.1093/mnras/stx700" {...ext}>
              L&apos;Huillier et al., MNRAS 2017 →
            </a>
          </article>
        </div>
      </div>
    </section>

    <section className="section section--paper">
      <div className="wrap--narrow prose">
        <h2 className="section-title">Les cinq prochaines années</h2>
        <p>
          <strong>Les ondes gravitationnelles comme test indépendant.</strong> Les fusions de trous
          noirs et d’étoiles à neutrons donnent des distances grâce à un principe physique
          entièrement différent. Les ajouter à la reconstruction fournit une vérification de
          l’histoire de l’expansion qui ne repose ni sur les supernovae ni sur l’agrégation des
          galaxies.
        </p>
        <p>
          <strong>Des tests indépendants de tout modèle à l’échelle des relevés de stade IV.</strong>{" "}
          DESI, l’observatoire Vera C. Rubin et Euclid vont multiplier le volume des données de
          plusieurs ordres de grandeur. Avec les étudiants de mon groupe, j’explore l’apprentissage
          automatique et le transport optimal pour adapter les reconstructions non paramétriques à
          ces relevés.
        </p>
        <p>
          <strong>Amas de galaxies et lentilles gravitationnelles.</strong> Estimations non
          paramétriques de la fraction de gaz baryonique et du biais cosmologique à partir des amas,
          et reconstructions de la distribution de matière à partir du lentillage du CMB et des
          données 3×2pt.
        </p>
        <p>
          <strong>Collaboration France–Corée.</strong> Dans la continuité du partenariat PHC STAR
          avec l’Institut d’Astrophysique Spatiale (CNRS / Université Paris-Saclay) et des travaux
          communs avec le KASI, en combinant sondes de l’Univers primordial et de l’Univers récent.
          Je serai professeur invité à l’IAS en janvier–février 2027.
        </p>
      </div>
    </section>
  </Layout>
)

export default ResearchPageFr

export const Head = () => (
  <Seo
    title="Recherche"
    pathname="/fr/research/"
    description="Tests du modèle cosmologique standard indépendants de tout modèle avec DESI, les supernovae et les relevés de stade IV, simulations cosmologiques à N corps, évolution des galaxies et des AGN : résultats et programme de recherche."
  />
)
