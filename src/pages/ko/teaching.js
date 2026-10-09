import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import PageHero from "../../components/PageHero"
import SummaryFrame from "../../components/SummaryFrame"
import SectionFrame from "../../components/SectionFrame"
import CourseList from "../../components/CourseList"
import { graduate, undergraduate } from "../../data/courses"

const ext = { target: "_blank", rel: "noopener noreferrer" }
const disc = { listStyle: "disc", paddingLeft: "1.2em" }

const TeachingPageKo = () => (
  <Layout lang="ko">
    <PageHero title="교육" tagline="호기심과 비판적 사고를 키우는 교육" image="/images/ccl2-web.jpg" />

    <SummaryFrame title="교육 철학">
      <p>
        그동안 물리학과 천문학부터 통계학과 우주론 시뮬레이션까지 다양한 과목을 학부부터
        대학원까지 프랑스어와 영어로 가르쳐 왔습니다. 2021년부터는 일반물리학, 비이공계 학부생을
        위한 천문학, 그리고 천체물리학 대학원생을 위한 통계학·우주론·관측기기 과목을 개설하고
        강의하고 있습니다. 또한 경희대학교, 평창 하계 연구회(Pyeongchang Summer Institute), 인도
        방갈로르의 인도천체물리연구소 등에서 우주론 시뮬레이션 실습 강의를 진행했습니다.
      </p>
      <p>
        파리 디드로 대학교에서 박사과정 중 물리학과 지구과학 데이터 분석 실습을 가르치며 시작된
        교육은, 이제 미래의 연구자를 길러내는 것을 넘어 하나의 사고방식을 나누는 일이 되었습니다.
        호기심을 갖고, 분석적으로 생각하며, 불확실성을 받아들이고, 증거에 근거하는 태도입니다.
        학생들이 더 좋은 질문을 던지고, 통념을 의심하고, 주변 세계를 더 명확하게 생각하도록
        돕고자 합니다. 이는 제 사고를 단련하고, 연구에 새로운 관점을 가져다주기도 합니다.
      </p>
    </SummaryFrame>

    <section className="section section--paper">
      <div className="wrap tile-grid tile-grid--gap">
        <SectionFrame
          className="tile--wide"
          title="세종대학교 강의"
          dateRange="2021년부터"
          image="/images/structure%20bg_edited_edited.jpg"
          align="left"
          description={
            <div className="split-cols">
              <CourseList lang="ko" heading="대학원" courses={graduate} />
              <CourseList lang="ko" heading="학부" courses={undergraduate} />
            </div>
          }
        />

        <SectionFrame
          className="tile--wide"
          title="학생 지도"
          light
          align="left"
          description={
            <>
              <p className="supervision-intro">열정 있는 학생들과 함께하는 것을 언제나 환영합니다.</p>
              <div className="split-cols">
                <div>
                  <h3 className="supervision-h">현재 대학원생</h3>
                  <ul style={disc}>
                    <li>
                      <strong>2026년 9월 – 현재</strong> — 노시형, 박사과정 (석사 2023–2025, 약한
                      중력렌즈 우주론)
                    </li>
                    <li>
                      <strong>2024년 9월 – 현재</strong> — Cléa Millard, 박사과정: Ia형 초신성
                      우주론
                    </li>
                    <li>
                      <strong>2023 – 현재</strong> — 김현, 석박사 통합과정: N체 시뮬레이션
                    </li>
                  </ul>
                  <h3 className="supervision-h">졸업생</h3>
                  <ul style={disc}>
                    <li>
                      <strong>2019 – 2025</strong> — 황승규: 연세대학교 석사(2019–2021), 이후
                      세종대학교 석사후 연구원(2022–2025). 우주론에서의 가우시안 과정 회귀. 현재
                      CEA 사클레 CosmoStat 그룹 박사과정
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="supervision-h">연구 프로젝트와 인턴십</h3>
                  <ul style={disc}>
                    <li>
                      <strong>2026년 9월 – 현재</strong> — Mathias Tan (석사, CentraleSupélec):
                      최적 수송의 우주론적 응용
                    </li>
                    <li>
                      <strong>2026 봄</strong> — Tarik Ouadjou (CentraleSupélec, A. Rimmel과 공동
                      지도), Ussan Abbassi (ENS Paris), Edwyn Howarth (Sorbonne)
                    </li>
                    <li>
                      <strong>2023 여름</strong> — Manal Ikram Bensahli (ESTACA, 학부): 정보 이론과
                      Fermi 광도 곡선
                    </li>
                    <li>
                      <strong>2023 봄</strong> — Cléa Millard (석사, 스트라스부르 대학교): Ia형
                      초신성 우주론
                    </li>
                    <li>
                      <strong>2022 – 2023</strong> — David Fernández Gil (석사후 연구 프로젝트, J.
                      Hodgson과 공동 지도): AGN 제트와 모은하의 정렬, <em>Nature Astronomy</em>{" "}
                      게재
                    </li>
                    <li>
                      <strong>2021 – 2022</strong> — 유석현, 김현 (세종대학교 학부): 우주론적 관측
                      방법
                    </li>
                    <li>
                      <strong>2019 여름</strong> — Sohee Chun (에모리 대학교): Ia형 초신성 우주론
                    </li>
                    <li>
                      <strong>2017 여름</strong> — 김형진 (워털루 대학교 석사, 공동 지도): 적색이동
                      공간 왜곡과 초신성을 이용한 중력 검증
                    </li>
                  </ul>
                </div>
              </div>
            </>
          }
        />

        <SectionFrame
          title="초청 강의"
          dateRange="2013년부터"
          image="/images/zoom_t91_edited_edited.png"
          align="left"
          description={
            <ul>
              <li>
                <strong>2025년 7월</strong> — “Gaussian Process by Example”, STAR Summer School
                2025, 인도천체물리연구소 (온라인).
              </li>
              <li>
                <strong>2023년 6월</strong> — 우주론, 몽골 과학아카데미 물리기술연구소 이론물리
                여름학교 (온라인).
              </li>
              <li>
                <strong>2015년 11월</strong> — 박사과정생 대상 우주론 시뮬레이션 강의,{" "}
                <a href="https://www.iiap.res.in/" {...ext}>인도천체물리연구소</a>(방갈로르): 이론과
                Gadget-2 실습 (8시간).
              </li>
              <li>
                <strong>2015년 7월</strong> —{" "}
                <a href="http://psi.kias.re.kr/2015/sub03/sub03_01.php" {...ext}>평창 하계 연구회</a>:
                GOTPM을 이용한 우주론 N체 시뮬레이션 실습 — 초기 조건 생성, 실행, 시각화, 분석
                (4시간).
              </li>
              <li>
                <strong>2013년 11월</strong> — 경희대학교(수원) 천문학과 학부생 대상 우주론
                시뮬레이션 강의.
              </li>
            </ul>
          }
        />

        <SectionFrame
          title="파리 디드로 대학교 조교"
          dateRange="2008 – 2011"
          light
          align="left"
          description={
            <div className="stacked-lists">
              <div>
                <h3>물리학</h3>
                <ul style={disc}>
                  <li>
                    <strong>2010–2011</strong> — 학부 1학년 물리학 연습 (François Vannucci 교수):
                    정수역학, 유체역학, 운동학.
                  </li>
                  <li>
                    <strong>2009–2010</strong> — 학부 1학년 물리학 연습 (Sébastien Charnoz 교수):
                    정수역학, 유체역학, 에너지.
                  </li>
                  <li><strong>2008–2009</strong> — 역학 실험.</li>
                </ul>
              </div>
              <div>
                <h3>지구과학 데이터 분석</h3>
                <ul style={disc}>
                  <li>
                    <strong>2008–2011</strong> — 지구과학 석사 1년차 MATLAB 데이터 분석 실습
                    (Olivier de Viron 교수): 주파수 분석, 통계, 최소제곱법, 웨이블릿.
                  </li>
                </ul>
              </div>
            </div>
          }
        />
      </div>
    </section>
  </Layout>
)

export default TeachingPageKo

export const Head = () => (
  <Seo
    title="교육"
    pathname="/ko/teaching/"
    description="세종대학교 강의, 우주론 시뮬레이션 초청 강의, 학생 지도, 교육 철학."
  />
)
