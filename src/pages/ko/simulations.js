import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import PageHero from "../../components/PageHero"
import { PaperList } from "../../components/PaperSummary"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const SimulationsPageKo = () => (
  <Layout lang="ko">
    <PageHero title="우주론 시뮬레이션" image="/images/zoom_t91_long.jpg" />

    <section className="section section--white">
      <div className="wrap--narrow prose">
        <p>
          제 주요 연구 도구는 우주론 시뮬레이션입니다. 이를 이용해 우주 거대구조 속에서 은하와
          암흑물질 헤일로가 어떻게 진화하는지 연구합니다.
        </p>
        <ul>
          <li>
            초기 조건이 우주 거대구조(물질 파워 스펙트럼, 헤일로 질량 함수, 구조의 분포)에 미치는
            영향을 연구했습니다 (
            <a href="https://ui.adsabs.harvard.edu/abs/2014NewA...30...79L/abstract" {...ext}>
              L&apos;Huillier, Park &amp; Kim 2014
            </a>
            ).
          </li>
          <li>
            Horizon Run 4 시뮬레이션(HR4)의 설계와 분석에 참여했습니다 (
            <a href="https://ui.adsabs.harvard.edu/abs/2015JKAS...48..213K/abstract" {...ext}>
              Kim et al. 2015
            </a>
            ).
          </li>
          <li>
            HR4를 이용해 환경에 따른 은하의 진화를 연구했습니다 (
            <a href="https://ui.adsabs.harvard.edu/abs/2015MNRAS.451..527L/abstract" {...ext}>
              L&apos;Huillier et al. 2015
            </a>
            ,{" "}
            <a href="https://ui.adsabs.harvard.edu/abs/2017MNRAS.466.4875L/abstract" {...ext}>
              2017a
            </a>
            ).
          </li>
          <li>
            원시 파워 스펙트럼이 낮은 적색이동의 우주 거대구조에 미치는 영향을 연구했습니다 (
            <a href="https://ui.adsabs.harvard.edu/abs/2018MNRAS.477.2503L/abstract" {...ext}>
              L&apos;Huillier et al. 2018
            </a>
            ).
          </li>
        </ul>
        <h2 className="section-title" style={{ marginTop: "2.4em" }}>
          시뮬레이션 기반 논문
        </h2>
        <p className="pub-legend">논문 요약은 영어로 제공됩니다.</p>
        <PaperList tag="simulations" lang="ko" />

        <p className="back-link">
          <Link to="/ko/research/">← 연구로 돌아가기</Link>
        </p>
      </div>
    </section>
  </Layout>
)

export default SimulationsPageKo

export const Head = () => (
  <Seo
    title="우주론 시뮬레이션"
    pathname="/ko/simulations/"
    description="우주론적 N체 시뮬레이션: 초기 조건, Horizon Run 4 시뮬레이션, 헤일로의 환경, 원시 파워 스펙트럼."
  />
)
