import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import PageHero from "../../components/PageHero"
import SocialBar from "../../components/SocialBar"

const ContactPageKo = () => (
  <Layout lang="ko">
    <PageHero title="연락처" tagline="찾아오시는 길" />

    <section className="section section--paper">
      <div className="wrap--narrow contact-band">
        <p className="label">주소</p>
        <p>세종대학교 물리천문학과</p>
        <p>(05006) 서울특별시 광진구 능동로 209</p>

        <p className="label" style={{ marginTop: "2em" }}>이메일</p>
        <p>
          <a href="mailto:benjamin@sejong.ac.kr">benjamin@sejong.ac.kr</a>
        </p>

        <p className="label" style={{ marginTop: "2em" }}>온라인</p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: ".6em" }}>
          <SocialBar />
        </div>

        <p style={{ marginTop: "2.4em" }}>
          열정 있는 학생과 공동연구자의 연락을 언제나 환영합니다. 연구실 합류에 관심이 있다면
          관심 분야를 간단히 소개하고 이력서를 첨부해 이메일을 보내 주세요.
        </p>
      </div>
    </section>
  </Layout>
)

export default ContactPageKo

export const Head = () => (
  <Seo
    title="연락처"
    pathname="/ko/contact/"
    description="벤자민 루일리예 연락처 — 세종대학교 물리천문학과, 서울특별시 광진구 능동로 209."
  />
)
