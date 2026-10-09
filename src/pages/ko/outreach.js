import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import PageHero from "../../components/PageHero"
import OutreachItem from "../../components/OutreachItem"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const OutreachPageKo = () => (
  <Layout lang="ko">
    <PageHero
      title="과학 소통"
      tagline="두 언어로 나누는 과학"
      image="/images/outreach_edited.jpg"
    />

    <section className="section section--white">
      <div className="wrap--narrow prose">
        <p>
          제 과학 소통 활동은 교육, 문화 교류, 창의적인 실험을 아우릅니다. 2024년부터 2026년까지
          프랑스 물리 올림피아드를 준비하는 고등학생들을 지도했고, 학교와 공공장소에서 꾸준히
          강연하고 있습니다. 우주론 체험 워크숍을 진행하고, 이중 언어 교육 프로그램에 참여했으며,
          한국의 국제학교와 문화원에서 초청 강연을 했습니다. 서울에서 활동하는 프랑스 과학자로서
          대사관, 문화원, 교육 기관과 협력해 한국과 프랑스 사이의 과학·문화 교류에 힘쓰고 있습니다.
        </p>
        <p>
          또한 서울프랑스학교 고등학생들을 단기 인턴으로 받아, 질문을 던지고 자료를 다루며 실제
          연구가 어떻게 이루어지는지 경험할 수 있는 첫 연구 현장을 제공합니다. 예술가들과의
          협업으로 과학을 전하는 새로운 방식도 시도했습니다. 한국의 전통 별자리를 현대적인
          시각으로 다시 보는 가상현실 작품을 함께 만들고, 화성 온실을 상상하는 디자인 프로젝트에
          자문했습니다. 이러한 활동은 과학을 눈에 보이고 다가가기 쉽게 만드는 것을 넘어, 새로운
          이해가 생겨날 수 있는 대화와 상상, 질문의 공간을 만들고자 하는 노력입니다.
        </p>
      </div>
    </section>

    <section className="section section--paper">
      <div className="wrap">
        <OutreachItem
          meta="서울프랑스학교 · 2024–2026"
          title="프랑스 물리 올림피아드 지도"
          image="/images/lfs2-web.jpg"
          alt="서울프랑스학교 학생들"
        >
          <p>
            서울프랑스학교 학생들의 프랑스 물리 올림피아드(Olympiades de Physique France) 준비를
            지도했습니다. 팀은 결선에 진출해 2026년 1월 3등상과 프랑스 음향학회상을 받았습니다.
          </p>
          <p>
            <a href="https://pr.sejong.ac.kr/news/people/faculty.do?mode=view&articleNo=863364" {...ext}>
              세종대학교 보도자료
            </a>
          </p>
        </OutreachItem>

        <OutreachItem
          meta="2024"
          title="서울프랑스학교"
          href="https://lfseoul.org/en/"
          image="/images/lfs1-web.jpg"
          alt="서울프랑스학교 강연"
        >
          <p>우주론 대중 강연.</p>
        </OutreachItem>

        <OutreachItem
          meta="2023년 6월"
          title="자비에르 국제학교 (Lycée International Xavier)"
          href="https://www.xavier.sc.kr/"
          image="/images/lix-web.jpg"
          alt="서울 자비에르 국제학교 강연"
        >
          <p>“우주의 짧은 역사”: 프랑스어권 고등학생 대상 강연.</p>
        </OutreachItem>

        <OutreachItem
          meta="2023년 4월"
          title="주한 프랑스 문화원"
          href="https://kr.ambafrance-culture.org"
          image="/images/ccl1-web.jpg"
          alt="서울 주한 프랑스 문화원 강연"
        >
          <p>“우주의 짧은 역사”: 프랑스어 학습자를 위한 프랑스어 강연 (한국어 동시통역).</p>
        </OutreachItem>

        <OutreachItem
          meta="ISEA 2019, 광주"
          title="가상현실로 다시 만나는 한국의 옛 하늘"
          href="https://www.cronopioz.com/projects/visualization-korea-gaia"
          image="/images/koreanskies.jpg"
          alt="한국 전통 별자리의 가상현실 시각화"
        >
          <p>
            <a href="https://www.cronopioz.com" {...ext}>장성아</a> 작가와의 협업. 히파르코스와 가이아
            별 목록에서 한국의 옛 별자리를 찾아내 가상현실 속 인터랙티브 3D 지도로 시각화했습니다.
            2019년 광주에서 열린 국제전자예술심포지엄(ISEA 2019)에서 발표했습니다.
          </p>
          <p>
            <a href="/images/jang_lhuillier_2019.pdf" {...ext}>ISEA 2019 논문 보기 (PDF, 영어)</a>
          </p>
        </OutreachItem>

        <OutreachItem
          meta="2016년 10월"
          title="대전 국제과학축제 — 프랑스 부스"
          image="/images/daejeon2016-web.jpg"
          alt="2016 대전 국제과학축제 프랑스 부스"
        >
          <p>프랑스의 과학과 과학자 소개 (한국어 통역).</p>
        </OutreachItem>
      </div>
    </section>

    <section className="section section--white">
      <div className="wrap--narrow">
        <h2 className="section-title">언론 보도</h2>
        <ul className="press-list">
          <li>
            <strong>2026년 7월</strong> — <em>Le Petit Échotier</em> (Seoul Accueil, 202호): « La
            science au-delà des frontières, Regards vers l’infini avec le Pr L’Huillier,
            cosmologiste français en Corée du Sud ».{" "}
            <a href="https://www.seoulaccueil.com/wp-content/uploads/2026/06/PE202-online-version.pdf#page=60" {...ext}>보기 (PDF, 60–63쪽, 프랑스어)</a>
          </li>
          <li>
            <strong>2026년 10월</strong> — 주한 프랑스 대사관 과학과의 PHC STAR 한-프 공동연구
            소개 LinkedIn 게시물.{" "}
            <a href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7513525563123347456" {...ext}>
              LinkedIn에서 보기
            </a>
          </li>
          <li>
            <strong>2026</strong> — 물리 올림피아드 팀에 관한 세종대학교 보도자료.{" "}
            <a href="https://pr.sejong.ac.kr/news/people/faculty.do?mode=view&articleNo=863364" {...ext}>
              보기
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default OutreachPageKo

export const Head = () => (
  <Seo
    title="과학 소통"
    pathname="/ko/outreach/"
    description="대중 강연, 물리 올림피아드 지도, 한-프 과학·문화 교류, 한국 전통 별자리 가상현실 시각화 등 예술과 과학의 협업."
  />
)
