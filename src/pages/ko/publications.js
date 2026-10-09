import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import PageHero from "../../components/PageHero"
import { getPaper } from "../../data/papers"
import { Authors, PaperLinks } from "../../components/PaperSummary"
import { RichText } from "../../components/TeX"
import { profiles, groups } from "../../data/selected"

const ext = { target: "_blank", rel: "noopener noreferrer" }

// Same order as the groups in src/data/selected.js
const groupTitles = [
  "표준 우주론 모형의 모형 독립적 검증",
  "우주론 시뮬레이션과 구조 형성",
  "은하와 AGN",
]

const PublicationsPageKo = () => (
  <Layout lang="ko">
    <PageHero title="논문" />

    <section className="section section--paper">
      <div className="wrap--narrow">
        <h2 className="section-title">주요 논문</h2>
        <p className="pub-legend">* 교신저자 · † 제가 지도 또는 공동 지도한 학생·신진 연구자</p>

        {groups.map((g, gi) => (
          <div className="pub-group" key={g.title}>
            <h3 className="pub-group__title">{groupTitles[gi] || g.title}</h3>
            <ol className="pub-list">
              {g.ids.map(getPaper).filter(Boolean).map((p) => (
                <li key={p.id}>
                  <span className="pub-authors"><Authors list={p.authors} /></span>{" "}
                  ({p.year}). <span className="pub-title"><RichText text={p.title} /></span>.{" "}
                  <em>{p.journal || "arXiv 프리프린트"}</em>. <PaperLinks paper={p} />
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>

    <section className="section section--white">
      <div className="wrap--narrow prose prose--center">
        <h2 className="section-title">전체 목록</h2>
        <p>전체 논문 목록은 다음에서 확인할 수 있습니다.</p>
        <ul className="plain-links">
          {profiles.map(([label, href]) => (
            <li key={href}>
              <a href={href} {...ext}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </Layout>
)

export default PublicationsPageKo

export const Head = () => (
  <Seo
    title="논문"
    pathname="/ko/publications/"
    description="벤자민 루일리예의 주요 논문: 표준 우주론 모형의 모형 독립적 검증, 우주론 시뮬레이션, AGN. NASA/ADS, InSPIRE/HEP, Google Scholar 전체 목록 링크."
  />
)
