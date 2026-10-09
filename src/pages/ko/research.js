import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import PageHero from "../../components/PageHero"
import SectionFrame from "../../components/SectionFrame"
import TeX from "../../components/TeX"

const ext = { target: "_blank", rel: "noopener noreferrer" }
const more = "자세히 보기"

const ResearchPageKo = () => (
  <Layout lang="ko">
    <PageHero title="연구" tagline="우주 팽창을 이끄는 힘에서 은하의 탄생까지" />

    <section className="section section--dark section--tight">
      <div className="wrap">
        <img
          src="/images/researchareas_draft03_darker.png"
          alt="연구 분야 연결도: 암흑에너지, 수정 중력, 급팽창, 우주 거대구조, 은하 형성"
          style={{ margin: "0 auto 46px", width: "100%", maxWidth: "820px" }}
        />
      </div>

      <div className="wrap--narrow prose prose--center">
        <p>
          표준 우주론 모형 ΛCDM은 보통 자료에 모형을 맞추는 방식으로 검증합니다. 즉 모형이
          옳다고 가정한 뒤 매개변수를 측정합니다. 저는 반대 방향으로 접근합니다. 모형을 가정하지
          않고 관측 자료로부터 우주 팽창의 역사와 구조 성장의 역사를 직접 재구성한 뒤, ΛCDM이
          그 결과와 일치하는지 확인합니다. 이와 함께 우주론적 N체 시뮬레이션으로 암흑물질 헤일로와
          은하가 우주 거대구조 속에서 어떻게 형성되는지 연구합니다.
        </p>
        <ul className="question-list">
          <li>우주는 균일하고 등방적이며 평탄한가?</li>
          <li>우주의 가속 팽창을 일으키는 것은 무엇인가?</li>
          <li>아인슈타인의 일반상대성이론은 중력을 올바르게 기술하는가?</li>
          <li>은하와 블랙홀은 우주 거미줄 속에서 어떻게 성장하는가?</li>
        </ul>
        <p style={{ marginTop: "2em" }}>
          주요 논문은 <Link to="/ko/publications/">논문 페이지</Link>에 있습니다.
        </p>
      </div>
    </section>

    <section className="section--dark">
      <div className="tile-grid">
        <SectionFrame
          title="표준 우주론 모형 검증"
          image="/images/2param_inverted_edited_edited.png"
          link="/ko/modeltesting/"
          moreLabel={more}
          description={
            <ul>
              <li>우주는 등방적이고 균일한가? 시공간 계량은 FLRW인가?</li>
              <li>암흑에너지의 정체는 무엇인가? 우주상수인가?</li>
              <li>우주의 곡률은 얼마인가?</li>
            </ul>
          }
        />

        <SectionFrame
          title="표준 모형을 넘어선 우주론"
          image="/images/darkenergy1_edited.jpg"
          description={
            <ul>
              <li>암흑에너지란 무엇인가?</li>
              <li>중력은 아인슈타인의 일반상대성이론으로 올바르게 기술되는가?</li>
              <li>원시 파워 스펙트럼은 단순한 멱법칙인가?</li>
            </ul>
          }
        />

        <SectionFrame
          title="우주론 시뮬레이션"
          image="/images/zoom_t91_long.jpg"
          link="/ko/simulations/"
          moreLabel={more}
          description={
            <p>
              우주론적 N체 시뮬레이션으로 우주 거대구조 속 은하와 암흑물질 헤일로의 진화를
              연구하며, 공개 당시 세계 최대 규모의 우주론 시뮬레이션 중 하나였던{" "}
              <a href="http://sdss.kias.re.kr/astro/Horizon-Runs/" {...ext}>Horizon Run 4</a>의
              설계와 분석에 참여했습니다. 시뮬레이션을 이용하면 모의 카탈로그를 만들고, 분석
              방법을 검증하고, 통제된 이론적 틀 안에서 관측을 해석할 수 있습니다.
            </p>
          }
        />

        <SectionFrame
          title="은하의 형성과 진화"
          image="/images/HR4_1919_1199.jpg"
          link="/ko/galaxy-formation-and-evolution/"
          moreLabel={more}
          description={
            <ul>
              <li>은하는 어떻게 질량을 모으는가?</li>
              <li>은하는 우주 거대구조 속에서 어떻게 진화하는가?</li>
              <li>활동은하핵(AGN)의 활동과 모은하의 성질은 어떤 관계가 있는가?</li>
            </ul>
          }
        />
      </div>
    </section>

    <section className="section section--white">
      <div className="wrap">
        <h2 className="section-title">주요 연구 결과</h2>
        <div className="card-grid">
          <article className="card">
            <h3>우주는 평탄한가? DESI DR2를 이용한 검증</h3>
            <p>
              Pantheon+ 초신성과 DESI DR2 바리온 음향 진동 자료를 결합해, 암흑에너지 모형을
              가정하지 않고 공간 곡률{" "}
              <TeX math={String.raw`\Omega_{k,0} = 0.045^{+0.045}_{-0.081}`} />을 측정했습니다.
              평탄한 FLRW 우주 및 Planck 2018 결과와 일치합니다.
            </p>
            <a className="card-link" href="https://doi.org/10.1088/1475-7516/2026/08/016" {...ext}>
              Millard, L&apos;Huillier &amp; Douspis, JCAP 2026 →
            </a>
          </article>

          <article className="card">
            <h3>Rubin과 DESI를 위한 리트머스 검증</h3>
            <p>
              LSST 초신성과 DESI 자료를 이용한 예측 연구에서, 우리의 재구성 방법으로 암흑에너지의
              형태를 가정하지 않고도 곡률과{" "}
              <TeX math={String.raw`c/(H_0 r_\mathrm{d})`} />를 각각 ±4%, ±0.1 수준으로 제한할 수
              있음을 보였습니다.
            </p>
            <a className="card-link" href="https://doi.org/10.1088/1475-7516/2025/05/030" {...ext}>
              L&apos;Huillier et al., JCAP 2025 →
            </a>
          </article>

          <article className="card">
            <h3>ΛCDM을 가정하지 않고 ΛCDM 검증하기</h3>
            <p>
              FLRW 계량과 평탄성, 그리고 팽창 역사와 구조 성장 사이의 일관성을 모형에 의존하지
              않고 진단하는 방법을 개발해 BAO, 초신성, 구조 성장 자료에 적용했습니다.
            </p>
            <a className="card-link" href="https://doi.org/10.1088/1475-7516/2017/01/015" {...ext}>
              JCAP 2017 · MNRAS 2018 · PRD 2018 →
            </a>
          </article>

          <article className="card">
            <h3>가우시안 과정, 제대로 쓰기</h3>
            <p>
              평균 함수를 0으로 두면 비물리적인 재구성이 나오고, ΛCDM 최적 모형을 평균으로 쓰면
              결과가 편향됩니다. 여러 평균 함수와 하이퍼파라미터에 대해 주변화하면 견고한 결과를
              얻을 수 있습니다.
            </p>
            <a className="card-link" href="https://doi.org/10.1088/1475-7516/2023/02/014" {...ext}>
              Hwang, L&apos;Huillier et al., JCAP 2023 →
            </a>
          </article>

          <article className="card">
            <h3>블랙홀 제트는 모은하를 ‘알고’ 있다</h3>
            <p>
              약 6,000쌍의 은하–AGN에서, VLBI로 관측한 파섹 규모의 제트가 킬로파섹 규모 모은하의
              단축과 약하지만 통계적으로 유의하게 정렬되어 있음을 발견했습니다.
            </p>
            <a className="card-link" href="https://doi.org/10.1038/s41550-024-02407-4" {...ext}>
              Fernández Gil et al., Nature Astronomy 2025 →
            </a>
          </article>

          <article className="card">
            <h3>일반상대성이론을 넘어선 헤일로</h3>
            <p>
              f(R) 중력, DGP, 결합 암흑에너지 N체 시뮬레이션에서, 강하게 결합된 암흑에너지만이
              헤일로 상호작용 빈도를 높이며, f(R) 중력은 헤일로의 스핀을 키우는 대신 상호작용하는
              쌍의 스핀 정렬을 약화시킨다는 것을 보였습니다.
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
        <h2 className="section-title">향후 5년의 연구 계획</h2>
        <p>
          <strong>독립적인 검증 수단으로서의 중력파.</strong> 블랙홀과 중성자별의 병합은 전혀
          다른 물리 원리로 거리를 알려 줍니다. 이를 재구성에 더하면 초신성이나 은하 군집에
          의존하지 않는 팽창 역사의 교차 검증이 가능합니다.
        </p>
        <p>
          <strong>4세대(Stage-IV) 관측 규모의 모형 독립적 검증.</strong> DESI, 베라 C. 루빈
          천문대, 유클리드는 자료의 양을 몇 자릿수 늘릴 것입니다. 연구실 학생들과 함께 기계학습과
          최적 수송을 이용해 비모수적 재구성 방법을 이러한 대규모 관측에 적용하는 방법을 연구하고
          있습니다.
        </p>
        <p>
          <strong>은하단과 중력렌즈.</strong> 은하단을 이용한 바리온 가스 비율과 우주론적 편향의
          비모수적 추정, 그리고 CMB 렌즈 효과와 3×2pt 자료를 이용한 물질 분포 재구성.
        </p>
        <p>
          <strong>한-프 공동연구.</strong> 프랑스 파리-사클레 대학교 우주천체물리연구소(IAS,
          CNRS)와의 PHC STAR 협력과 한국천문연구원과의 공동연구를 바탕으로 초기 우주와 후기 우주
          관측을 결합합니다. 2027년 1–2월에는 IAS 방문교수로 머물 예정입니다.
        </p>
      </div>
    </section>
  </Layout>
)

export default ResearchPageKo

export const Head = () => (
  <Seo
    title="연구"
    pathname="/ko/research/"
    description="DESI, 초신성, 4세대 관측을 이용한 표준 우주론 모형의 모형 독립적 검증, 우주론적 N체 시뮬레이션, 은하와 AGN의 진화: 주요 결과와 연구 계획."
  />
)
