import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import ParallaxBg from "../../components/ParallaxBg"
import NewsList from "../../components/NewsList"
import { news } from "../../data/news"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const IndexPageKo = () => (
  <Layout lang="ko">
    <section className="home-hero">
      <img
        className="home-hero__img"
        data-parallax="img"
        src="/images/aboutmefinal1.jpg"
        alt="달리기, 노트북 작업, 음악 연주를 하는 벤자민 루일리예의 일러스트와 우주론 칠판"
      />
      <div className="home-hero__overlay">
        <h1 className="home-hero__name">Benjamin L&apos;Huillier</h1>
        <p className="home-hero__tagline">한국에서 연구하는 프랑스 우주론 학자</p>
      </div>
    </section>

    <section className="section section--paper">
      <aside className="name-pron" aria-label="이름 발음">
        <p className="name-pron__q">제 이름은 어떻게 발음하나요?</p>
        <p className="name-pron__a" lang="ko">루일리예, 벤자민</p>
        <p className="name-pron__latin" lang="fr">L&apos;Huillier, Benjamin</p>
        <p className="name-pron__note">
          프랑스어로는 이름(Benjamin)이 ‘벤자민’보다 ‘방자망’에 더 가깝게 들립니다.
        </p>
      </aside>

      <div className="wrap">
        <figure className="timeline-figure">
          <a className="bare" href="/images/timeline_draft6.png" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/timeline_draft6.png"
              alt="벤자민 루일리예의 2007–2026년 경력 연표: 공학에서 파리에서의 박사과정, 고등과학원, 한국천문연구원, 연세대학교, 세종대학교까지"
            />
          </a>
          <figcaption className="timeline-figure__hint">눌러서 크게 보기</figcaption>
        </figure>
      </div>

      <div className="wrap--narrow">
        <h2 className="section-title">연구 여정</h2>

        <div className="prose">
          <p>
            저는{" "}
            <a href="https://en.sejong.ac.kr/eng/index.do" {...ext}>세종대학교</a>{" "}
            <a href="https://sejong.elsevierpure.com/en/organisations/department-of-physics-and-astronomy" {...ext}>
              물리천문학과
            </a>{" "}
            조교수입니다. 최신 관측 자료와 시뮬레이션에 고급 통계 기법을 적용해 표준 우주론
            모형과 그 기본 가정을 검증합니다.
          </p>
          <p>
            <Link to="/ko/research/">저의 연구</Link>는{" "}
            <a href="https://www.nrf.re.kr/eng/main" {...ext}>한국연구재단</a>의 지원을 받고 있습니다.
            표준 모형 안팎의 N체 시뮬레이션으로 ΛCDM 표준 우주론 모형의 한계를 탐구하고, 고급
            통계 기법으로 그 가정들을 검증합니다. 또한{" "}
            <a href="http://desi.lbl.gov/" {...ext}>DESI 공동연구단</a>의 일원으로 시간영역
            천문학(time domain) 그룹과 우주론 시뮬레이션 그룹에 참여했습니다.
          </p>
          <p>
            박사학위는 프랑스 파리 천문대의{" "}
            <a href="https://lux.observatoiredeparis.psl.eu/" {...ext}>LUX</a>와{" "}
            <a href="https://www.sorbonne-universite.fr/" {...ext}>소르본 대학교</a>에서{" "}
            <a href="http://aramis.obspm.fr/~combes" {...ext}>Françoise Combes</a>,{" "}
            <a href="http://aramis.obspm.fr/~semelin" {...ext}>Benoit Semelin</a> 교수의 지도로{" "}
            <a href="http://lerma.obspm.fr/spip.php?article4&lang=fr" {...ext}>은하·우주론 그룹</a>과{" "}
            <a href="http://aramis.obspm.fr/~combes/ERC-momentum/" {...ext}>Momentum 프로젝트</a>
            에서 받았습니다. 이 기간에{" "}
            <a href="https://u-paris.fr/" {...ext}>파리 시테 대학교</a>에서 조교로 물리학과 데이터
            분석을 가르쳤습니다.
          </p>
          <p>
            2012년부터 천문학과 우주론 연구가 활발하게 성장하고 있는 한국에서 연구하고 있습니다.
            2012년부터 2016년까지{" "}
            <a href="http://www.kias.re.kr/" {...ext}>고등과학원</a>(KIAS){" "}
            <a href="https://astro.kias.re.kr/" {...ext}>천체물리·우주론 그룹</a>에서{" "}
            <a href="http://astro.kias.re.kr/cbp/" {...ext}>박창범</a>,{" "}
            <a href="http://astro.kias.re.kr/~kjhan/" {...ext}>김주한</a> 교수와 함께{" "}
            <a href="http://sdss.kias.re.kr/astro/Horizon-Runs/" {...ext}>Horizon Run 4</a> 같은
            수치 시뮬레이션으로 우주 구조 형성을 연구했습니다. 이후 대전의{" "}
            <a href="https://www.kasi.re.kr/eng/index" {...ext}>한국천문연구원</a>{" "}
            <a href="http://cosmology.kasi.re.kr/" {...ext}>CosKASI</a> 그룹에서{" "}
            <a href="http://cosmology.kasi.re.kr/shafieloo/index.html" {...ext}>Arman Shafieloo</a>{" "}
            박사와 연구했고, 연세대학교에서{" "}
            <a href="http://narnia.yonsei.ac.kr/mediawiki/index.php/Main_Page" {...ext}>지명국</a>{" "}
            교수와 함께 연구교수(
            <a href="https://ui.adsabs.harvard.edu/abs/1948PA.....56..119B/abstract" {...ext}>W. C. Rufus</a>{" "}
            Fellow)로 일했습니다.
          </p>
        </div>

        <p className="inline-links">
          <a href="https://sites.google.com/view/9kjwde/home?authuser=0" {...ext}>
            한-일 암흑에너지 워크숍
          </a>
          <span>•</span>
          Friends of Sejong 워크숍{" "}
          <a href="https://sites.google.com/view/friends-of-sejong-2023/home" {...ext}>2023</a> &amp;{" "}
          <a href="https://sites.google.com/view/friends-of-sejong2024" {...ext}>2024</a>
          <span>•</span>
          <a href="https://phc-star.ias.universite-paris-saclay.fr/home" {...ext}>
            PHC STAR 한-프 공동연구
          </a>
          <span>•</span>
          <a href="https://sites.google.com/view/frkrcosmo2025/home" {...ext}>
            2025 한-프 우주론 워크숍
          </a>
        </p>
      </div>
    </section>

    <section className="section section--white">
      <div className="wrap">
        <h2 className="section-title">소식</h2>

        <div className="news-feature">
          <ParallaxBg image="/images/file-20241111-15-3hrrqd.avif" />
          <div className="news-feature__inner">
            <h3 className="news-feature__title">
              초대질량 블랙홀의 제트는 모은하의 모양과 정렬되어 있다
            </h3>
            <p className="news-feature__sub">
              파섹 규모 AGN 제트와 모은하 사이의 수직 정렬 발견 (<em>Nature Astronomy</em>, 2025)
            </p>
            <a className="btn" href="https://www.nature.com/articles/s41550-024-02407-4" {...ext}>
              논문 보기
            </a>
          </div>
        </div>

        <NewsList items={news} lang="ko" />
      </div>
    </section>

    <section className="section section--warm">
      <div className="wrap--narrow contact-band">
        <h2 className="section-title">찾아오시는 길</h2>
        <p className="label">주소</p>
        <p>세종대학교 물리천문학과</p>
        <p>(05006) 서울특별시 광진구 능동로 209</p>
        <p style={{ marginTop: "1.4em" }} className="label">이메일</p>
        <p>
          <a href="mailto:benjamin@sejong.ac.kr">benjamin@sejong.ac.kr</a>
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPageKo

export const Head = () => (
  <Seo
    pathname="/ko/"
    fullTitle="벤자민 루일리예 (Benjamin L’Huillier) — 우주론 연구자"
    description="벤자민 루일리예는 세종대학교 물리천문학과 조교수로, N체 시뮬레이션과 고급 통계 기법으로 표준 우주론 모형을 검증하는 프랑스 우주론 학자입니다."
  />
)
