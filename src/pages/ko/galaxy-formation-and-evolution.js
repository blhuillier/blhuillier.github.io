import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import PageHero from "../../components/PageHero"
import { PaperList } from "../../components/PaperSummary"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const GalaxyFormationPageKo = () => (
  <Layout lang="ko">
    <PageHero title="은하의 형성과 진화" image="/images/HR4_1919_1199.jpg" />

    <section className="section section--white">
      <div className="wrap--narrow prose">
        <p>
          은하는 어떻게 질량을 모을까요? 은하는 우주 거대구조 속에서 어떻게 진화할까요?
        </p>
        <p>
          다중 줌(multi-zoom) 우주론 유체역학 시뮬레이션을 이용해 병합과 매끄러운 가스 강착이
          각각 은하 질량에 얼마나 기여하는지 정량화했습니다 (
          <a href="https://ui.adsabs.harvard.edu/abs/2012A%26A...544A..68L/abstract" {...ext}>
            L&apos;Huillier, Combes &amp; Semelin 2012
          </a>
          ).
        </p>

        <figure className="figure">
          <img src="/images/zoom_t91_long.jpg" alt="유체역학 시뮬레이션 속 은하단 확대 영상" />
          <figcaption>
            유체역학 시뮬레이션 속 은하단 확대 영상. L&apos;Huillier, Combes &amp; Semelin (2012),
            A&amp;A.
          </figcaption>
        </figure>

        <p>
          Horizon Run 4 시뮬레이션(
          <a href="https://ui.adsabs.harvard.edu/abs/2015JKAS...48..213K/abstract" {...ext}>
            Kim et al. 2015
          </a>
          )을 이용해 헤일로의 상호작용 빈도(병합과 근접 통과,{" "}
          <a href="https://ui.adsabs.harvard.edu/abs/2015MNRAS.451..527L/abstract" {...ext}>
            L&apos;Huillier, Park &amp; Kim 2015
          </a>
          )와 정렬(
          <a href="https://ui.adsabs.harvard.edu/abs/2017MNRAS.466.4875L/abstract" {...ext}>
            L&apos;Huillier, Park &amp; Kim 2017
          </a>
          )을 환경(질량과 대규모 밀도)에 따라 정량화했습니다.
        </p>
        <p>
          David Fernández Gil이 주도하고 Nature Astronomy에 발표한 연구에서, 초장기선
          간섭계(VLBI)로 관측한 AGN 제트의 중심부와 여러 탐사에서 얻은 모은하의 광학적 모양
          사이에 약하지만 유의한 정렬이 있음을 발견했습니다 (
          <a href="https://ui.adsabs.harvard.edu/abs/2025NatAs...9..302F/abstract" {...ext}>
            Fernández Gil et al. 2025, Nat. Astron.
          </a>
          ).
        </p>

        <h2 className="section-title" style={{ marginTop: "2.4em" }}>
          은하와 AGN 관련 논문
        </h2>
        <p className="pub-legend">논문 요약은 영어로 제공됩니다.</p>
        <PaperList tags={["galaxies", "agn"]} lang="ko" />

        <p className="back-link">
          <Link to="/ko/research/">← 연구로 돌아가기</Link>
        </p>
      </div>
    </section>
  </Layout>
)

export default GalaxyFormationPageKo

export const Head = () => (
  <Seo
    title="은하의 형성과 진화"
    pathname="/ko/galaxy-formation-and-evolution/"
    description="병합과 가스 강착을 통한 은하의 질량 형성, Horizon Run 4에서의 헤일로 상호작용과 정렬, AGN과 모은하의 정렬."
  />
)
