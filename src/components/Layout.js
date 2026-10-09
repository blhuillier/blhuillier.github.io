import React, { useState } from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import SocialBar from "./SocialBar"
import { FLAGS } from "./Flags"
import { LANGS, LANG_NAME, langOf, pathIn } from "../i18n"
import "./layout.css"

const nav = {
  en: [
    { label: "Home", to: "/" },
    { label: "Research", to: "/research/" },
    { label: "Publications", to: "/publications/" },
    { label: "Teaching", to: "/teaching/" },
    { label: "The Group", to: "/the-group/" },
    { label: "Outreach", to: "/outreach/" },
    { label: "Contact", to: "/contact/" },
  ],
  fr: [
    { label: "Accueil", to: "/fr/" },
    { label: "Recherche", to: "/fr/research/" },
    { label: "Publications", to: "/fr/publications/" },
    { label: "Enseignement", to: "/fr/teaching/" },
    { label: "Le groupe", to: "/fr/the-group/" },
    { label: "Médiation", to: "/fr/outreach/" },
    { label: "Contact", to: "/fr/contact/" },
  ],
  ko: [
    { label: "홈", to: "/ko/" },
    { label: "연구", to: "/ko/research/" },
    { label: "논문", to: "/ko/publications/" },
    { label: "교육", to: "/ko/teaching/" },
    { label: "연구실", to: "/ko/the-group/" },
    { label: "과학 소통", to: "/ko/outreach/" },
    { label: "연락처", to: "/ko/contact/" },
  ],
}

const ui = {
  en: {
    home: "Benjissi — home",
    logoAlt: "Benjissi — Benjamin L'Huillier, cosmologist and astrophysicist",
    open: "Open menu",
    close: "Close menu",
    primary: "Primary",
    role: "Assistant Professor",
    dept: "Department of Physics and Astronomy",
    univ: "Sejong University, Seoul",
    where: "Where to find me",
    country: "Seoul 05006, South Korea",
    elsewhere: "Elsewhere",
  },
  fr: {
    home: "Benjissi — accueil",
    logoAlt: "Benjissi — Benjamin L'Huillier, cosmologiste et astrophysicien",
    open: "Ouvrir le menu",
    close: "Fermer le menu",
    primary: "Navigation principale",
    role: "Professeur assistant",
    dept: "Département de physique et d\u2019astronomie",
    univ: "Université Sejong, Séoul",
    where: "Où me trouver",
    country: "Séoul 05006, Corée du Sud",
    elsewhere: "Sur le web",
  },
  ko: {
    home: "Benjissi — 홈",
    logoAlt: "Benjissi — 우주론 연구자 벤자민 루일리예",
    open: "메뉴 열기",
    close: "메뉴 닫기",
    primary: "주 메뉴",
    role: "조교수",
    dept: "세종대학교 물리천문학과",
    univ: "서울",
    where: "찾아오시는 길",
    country: "서울특별시 광진구 능동로 209 (05006)",
    elsewhere: "온라인",
  },
}

const Layout = ({ children, lang: forcedLang }) => {
  const [navOpen, setNavOpen] = useState(false)
  const { pathname } = useLocation()
  const lang = forcedLang || langOf(pathname)
  const t = ui[lang] || ui.en
  const navItems = nav[lang] || nav.en

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="site-logo" to={pathIn("/", lang)} aria-label={t.home}>
            <img src="/images/benjissi-logo-web.png" alt={t.logoAlt} />
          </Link>

          <div className="site-header__right">
            <button
              className={`nav-toggle${navOpen ? " is-open" : ""}`}
              type="button"
              aria-label={navOpen ? t.close : t.open}
              aria-expanded={navOpen}
              aria-controls="primary-nav"
              onClick={() => setNavOpen((open) => !open)}
            >
              <span className="nav-toggle__bar" />
              <span className="nav-toggle__bar" />
              <span className="nav-toggle__bar" />
            </button>

            <nav
              id="primary-nav"
              aria-label={t.primary}
              className={`site-nav${navOpen ? " is-open" : ""}`}
            >
              <ul>
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      activeClassName="is-active"
                      onClick={() => setNavOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-tools">
              <SocialBar keys={["scholar", "github", "x", "linkedin"]} />
              <nav className="lang-switch" aria-label="Language / Langue / 언어">
                {LANGS.map((l) => {
                  const Flag = FLAGS[l]
                  return l === lang ? (
                    <span key={l} className="is-current" lang={l} title={LANG_NAME[l]} aria-current="true">
                      <Flag className="flag" />
                      <span className="visually-hidden">{LANG_NAME[l]}</span>
                    </span>
                  ) : (
                    <Link key={l} to={pathIn(pathname, l)} hrefLang={l} lang={l} title={LANG_NAME[l]}>
                      <Flag className="flag" />
                      <span className="visually-hidden">{LANG_NAME[l]}</span>
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div>
            <h4>Benjamin L&apos;Huillier</h4>
            <p>{t.role}</p>
            <p>{t.dept}</p>
            <p>{t.univ}</p>
          </div>
          <div>
            <h4>{t.where}</h4>
            <p>Gwangjin-gu, Neungdong-ro 209</p>
            <p>{t.country}</p>
            <p>
              <a href="mailto:benjamin@sejong.ac.kr">benjamin@sejong.ac.kr</a>
            </p>
          </div>
          <div>
            <h4>{t.elsewhere}</h4>
            <SocialBar />
          </div>
        </div>
        <div className="site-footer__legal">© {new Date().getFullYear()} Benjissi</div>
      </footer>
    </div>
  )
}

export default Layout
