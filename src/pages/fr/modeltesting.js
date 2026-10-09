import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import PageHero from "../../components/PageHero"
import { PaperList } from "../../components/PaperSummary"
import TeX from "../../components/TeX"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const ModelTestingPageFr = () => (
  <Layout lang="fr">
    <PageHero
      title="Tester le modèle standard de la cosmologie"
      image="/images/2param_inverted_edited_edited.png"
    />

    <section className="section section--white">
      <div className="wrap--narrow prose">
        <p>Le modèle standard de la cosmologie repose sur plusieurs hypothèses&nbsp;:</p>
        <ul>
          <li>l’Univers est homogène et isotrope&nbsp;;</li>
          <li>la gravitation est décrite par la relativité générale (RG).</li>
        </ul>
        <p>
          Sous ces hypothèses, la métrique de l’Univers est celle de
          Friedmann–Lemaître–Robertson–Walker (FLRW), qui décrit un univers en expansion.
        </p>
        <p>
          Dans ce cadre, le modèle de concordance actuel est <TeX math={String.raw`\Lambda`} />CDM&nbsp;:
          le bilan énergétique est dominé par la constante cosmologique{" "}
          <TeX math={String.raw`\Lambda`} />, responsable de l’accélération récente de l’expansion,
          et la matière est dominée par une composante froide, lisse et non baryonique — la matière
          noire. Pourtant, aucune de ces deux composantes n’a été détectée directement, et aucune ne
          fait partie du modèle standard de la physique des particules. On peut donc interroger les
          hypothèses sous-jacentes&nbsp;: la métrique FLRW est-elle la bonne&nbsp;? L’Univers
          est-il isotrope et homogène&nbsp;? L’énergie noire est-elle une constante
          cosmologique&nbsp;?
        </p>

        <h2 className="section-title" style={{ marginTop: "2.4em" }}>
          Tester la métrique FLRW et la courbure
        </h2>
        <p>
          En combinant des reconstructions indépendantes de tout modèle de l’histoire de l’expansion{" "}
          <TeX math={String.raw`h(z) = H(z)/H_0`} /> à partir des supernovae de la Joint
          Light-curve Analysis (JLA) avec les mesures d’oscillations acoustiques baryoniques du
          Baryon Oscillation Spectroscopic Survey (SDSS-III/BOSS), Arman Shafieloo et moi avons
          mesuré, sans hypothèse de modèle, la combinaison de la constante de Hubble{" "}
          <TeX math={String.raw`H_0`} /> et de l’horizon sonore à l’époque de découplage des
          baryons <TeX math={String.raw`r_\mathrm{d}`} />. Nous avons ensuite introduit un nouveau
          test de la métrique FLRW plate, <TeX math={String.raw`\Theta(z)`} />, relié au test de
          Clarkson <TeX math={String.raw`\mathcal{O}_k(z)`} /> par
        </p>
        <TeX block math={String.raw`\mathcal{O}_k(z) = \frac{\Theta^2(z) - 1}{\mathcal{D}^2(z)}, \qquad \Theta(z) \equiv h(z)\,\mathcal{D}'(z) \overset{\text{FLRW}}{=} \sqrt{1 + \Omega_{k,0}\,\mathcal{D}^2(z)},`} />
        <p>
          où <TeX math={String.raw`\mathcal{D}`} /> est la distance comobile en unités de{" "}
          <TeX math={String.raw`c/H_0`} />. Dans un univers FLRW,{" "}
          <TeX math={String.raw`\mathcal{O}_k = \Omega_{k,0}`} /> à tout redshift&nbsp;; s’il est
          de plus plat, <TeX math={String.raw`\Theta = 1`} /> et{" "}
          <TeX math={String.raw`\mathcal{O}_k = 0`} />.
        </p>
        <p>
          Nos résultats sont compatibles avec un Univers FLRW plat, mais montrent un léger indice de
          tension dans le sous-échantillon CMASS (
          <a href="https://ui.adsabs.harvard.edu/abs/2017JCAP...01..015L/abstract" {...ext}>
            L&apos;Huillier &amp; Shafieloo, JCAP 01 (2017) 015
          </a>
          ).
        </p>

        <h2 className="section-title" style={{ marginTop: "2.4em" }}>
          Un test de la relativité générale indépendant de tout modèle
        </h2>
        <p>
          Avec Arman Shafieloo et Hyungjin Kim (Université de Waterloo), nous avons combiné ces
          reconstructions avec les mesures de croissance issues des distorsions dans l’espace des
          redshifts, et obtenu des contraintes indépendantes de tout modèle sur la densité de matière{" "}
          <TeX math={String.raw`\Omega_\mathrm{m}`} />, l’amplitude des fluctuations{" "}
          <TeX math={String.raw`\sigma_8`} /> et l’indice de croissance{" "}
          <TeX math={String.raw`\gamma`} />, défini par
        </p>
        <TeX block math={String.raw`f(z) \equiv \frac{\mathrm{d}\ln\delta}{\mathrm{d}\ln a} \simeq \Omega_\mathrm{m}(z)^{\gamma},`} />
        <p>
          avec <TeX math={String.raw`\gamma \simeq 0.55`} /> en relativité générale. Nos résultats
          sont compatibles avec <TeX math={String.raw`\Lambda`} />CDM + RG (
          <a href="https://ui.adsabs.harvard.edu/abs/2018MNRAS.476.3263L/abstract" {...ext}>
            L&apos;Huillier, Shafieloo &amp; Kim 2018, MNRAS 476, 3263
          </a>
          ).
        </p>
        <p>
          Avec Arman Shafieloo et Alexeï Starobinsky, nous avons ensuite combiné les données de
          supernovae de type Ia les plus récentes (Pantheon) avec des mesures de croissance (dont
          eBOSS DR14Q), et obtenu des contraintes plus fortes, toujours compatibles avec{" "}
          <TeX math={String.raw`\Lambda`} />CDM + RG (
          <a href="https://ui.adsabs.harvard.edu/abs/2018PhRvD..98h3526S/abstract" {...ext}>
            Shafieloo, L&apos;Huillier &amp; Starobinsky 2018, PRD 98, 083526
          </a>
          ).
        </p>

        <figure className="figure figure--narrow">
          <img
            src="/images/lcdm-tests-2018.png"
            alt="Contraintes sur l’indice de croissance gamma et sigma_8 issues de tests de ΛCDM indépendants de tout modèle"
          />
          <figcaption>
            Tests du modèle ΛCDM — Shafieloo, L&apos;Huillier &amp; Starobinsky (2018), Physical
            Review D.
          </figcaption>
        </figure>

        <h2 className="section-title" style={{ marginTop: "2.4em" }}>
          Articles sur les tests du modèle cosmologique
        </h2>
        <p className="pub-legend">Les résumés des articles sont en anglais.</p>
        <PaperList tag="model-testing" lang="fr" />

        <p className="back-link">
          <Link to="/fr/research/">← Retour à la recherche</Link>
        </p>
      </div>
    </section>
  </Layout>
)

export default ModelTestingPageFr

export const Head = () => (
  <Seo
    title="Tester le modèle standard de la cosmologie"
    pathname="/fr/modeltesting/"
    description="Tests indépendants de tout modèle de la métrique FLRW, de la courbure spatiale et de la relativité générale à partir des supernovae, des BAO et des données de croissance."
  />
)
