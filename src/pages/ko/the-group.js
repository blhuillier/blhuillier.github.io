import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import PageHero from "../../components/PageHero"
import GroupMember from "../../components/GroupMember"
import SocialBar from "../../components/SocialBar"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const TheGroupPageKo = () => (
  <Layout lang="ko">
    <PageHero
      title="물리우주론 연구실"
      tagline="세종대학교, 서울"
      image="/images/thegroup_bw_edited.jpg"
    />

    <section className="section section--paper">
      <div className="wrap">
        <article className="pi-card">
          <img className="pi-card__photo" src="/images/benji_team-web.jpg" alt="벤자민 루일리예" />
          <div className="pi-card__body">
            <h2 className="pi-card__name">Benjamin L&apos;Huillier | 벤자민 루일리예</h2>
            <p className="pi-card__role">조교수</p>
            <p>
              우주론적 N체 시뮬레이션과 고급 통계 기법을 결합해 표준 우주론 모형을 검증하며, 다음
              질문의 답을 찾고 있습니다.
            </p>
            <ul>
              <li>우주 가속 팽창의 정체 — 수정 중력과 암흑에너지</li>
              <li>급팽창과 초기 우주</li>
            </ul>
            <SocialBar keys={["scholar", "orcid", "researchgate", "github", "x", "linkedin", "instagram"]} />
          </div>
        </article>
      </div>
    </section>

    <section className="section section--dark">
      <div className="wrap">
        <h2 className="section-title">구성원</h2>
        <p className="prose prose--center" style={{ maxWidth: "640px", margin: "0 auto 46px" }}>
          최신 관측 자료와 시뮬레이션을 이용해 암흑에너지와 암흑물질의 정체, 그리고 우주의 초기
          조건과 구성 성분을 이해하고자 합니다.
        </p>

        <div className="member-grid">
          <div id="clea">
            <GroupMember
              lang="ko"
              name="Cléa Millard | 클레아"
              role="박사과정"
              period="2024 가을 – 현재"
              researchFocus={<p>Ia형 초신성 우주론.</p>}
              photo="/images/clea.jpg"
              links={[{ kind: "email", href: "mailto:clea.millard@gmail.com", label: "이메일" }]}
            />
          </div>

          <div id="hyeon">
            <GroupMember
              lang="ko"
              name="Hyeon Kim | 김현"
              role="석박사 통합과정"
              period="2023 봄 – 현재"
              researchFocus={<p>우주론 시뮬레이션, 은하단 우주론, 초기 우주.</p>}
              photo="/images/hyeon-web.jpg"
              links={[
                { kind: "github", href: "https://github.com/HyeonKim1", label: "GitHub" },
                { kind: "email", href: "mailto:hyeon970526@gmail.com", label: "이메일" },
              ]}
            />
          </div>

          <div id="sihyeong">
            <GroupMember
              lang="ko"
              name="Si Hyeong Noh | 노시형"
              role="박사과정"
              period="2026 가을 – 현재 (석사 2023–2025)"
              researchFocus={<p>중력 이론, 수정 중력 검증, 데이터 분석.</p>}
              photo="/images/sihyeong-web.jpg"
              links={[
                { kind: "web", href: "https://sites.google.com/view/starrynote88/", label: "웹사이트" },
                { kind: "github", href: "https://github.com/NohSiHyeong", label: "GitHub" },
                { kind: "email", href: "mailto:starrynote88@gmail.com", label: "이메일" },
              ]}
            />
          </div>

          <div id="kangsoo">
            <GroupMember
              lang="ko"
              name="Kangsoo Lee | 이강수"
              role="학부 연구생"
              period="2026년 9월부터"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section section--white">
      <div className="wrap">
        <h2 className="section-title">인턴</h2>
        <div className="member-grid">
          <div id="mathias">
            <GroupMember
              light
              lang="ko"
              name="Mathias Tan"
              role="석사 인턴"
              period="2026년 9월부터"
              researchFocus={<p>최적 수송의 우주론적 응용. CentraleSupélec(프랑스).</p>}
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section section--paper">
      <div className="wrap--narrow">
        <h2 className="section-title">졸업생 및 이전 구성원</h2>
        <ul className="alumni-list">
          <li id="tarik">
            <strong>Tarik Ouadjou</strong> — 석사 인턴, 2026 봄 (CentraleSupélec, 프랑스). SKA를
            위한 기계학습, A. Rimmel과 공동 지도.
          </li>
          <li id="ussan">
            <strong>Ussan Abbassi</strong> — 석사 인턴, 2026 봄 (École Normale Supérieure,
            프랑스). 중력파 우주론.
          </li>
          <li id="edwyn">
            <strong>Edwyn Howarth</strong> — 석사 인턴, 2026 봄 (소르본 대학교, 프랑스).
          </li>
          <li>
            <strong>
              <a href="https://github.com/sghwang-cosmos" {...ext}>Seung-gyu Hwang</a> | 황승규
            </strong>{" "}
            — 연세대학교 석사(2019–2021), 세종대학교 석사후 연구원(2022–2025). 우주론에서의
            가우시안 과정 회귀. 현재 CEA 사클레 CosmoStat 그룹 박사과정.
          </li>
          <li>
            <strong>
              <a href="https://theconversation.com/profiles/david-fernandez-gil-2215115" {...ext}>
                David Fernández Gil
              </a>{" "}
              | 다비드 페르난데스 길
            </strong>{" "}
            — 석사후 연구원, 2022–2023. AGN과 은하의 정렬 (주 지도: Jeff Hodgson, 공동 지도).
            현재 스페인 테루엘의 아라곤 우주물리연구센터(CEFCA) 박사과정.
          </li>
          <li>
            <strong>Manal Ikram Bensahli</strong> — 학부 인턴, 2023 여름. 정보 이론과 Fermi 광도
            곡선 (ESTACA).
          </li>
          <li>
            <strong>Seokhyeon Yu | 유석현</strong> — 학사, 2022. 우주론적 관측 방법.
          </li>
          <li>
            <strong>Sohee (Sophie) Chun | 정소희</strong> — 에모리 대학교 여름 연구 프로젝트, 2019.
            Ia형 초신성 우주론. 현재 미국 세인트루이스 워싱턴 대학교 박사과정.
          </li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default TheGroupPageKo

export const Head = () => (
  <Seo
    title="연구실"
    pathname="/ko/the-group/"
    description="세종대학교 물리우주론 연구실: 암흑에너지, 수정 중력, 우주론 시뮬레이션을 연구하는 대학원생, 인턴, 졸업생."
  />
)
