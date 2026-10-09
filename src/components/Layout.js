import React, { useState } from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import SocialBar from "./SocialBar"
import { langOf, otherLangPath } from "../i18n"
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
    { label: "Publications", to: "/publications/" },
    { label: "Enseignement", to: "/fr/teaching/" },
    { label: "Le groupe", to: "/fr/the-group/" },
    { label: "Médiation", to: "/fr/outreach/" },
    { label: "Contact", to: "/fr/contact/" },
  ],
}

const ui = {
  en: {
    home: "Benjissi — home",
    logoAlt: "Benjissi — Benjamin L'Huillier, cosmologist and astrophysicist",
    open: "Open menu",
    close: "Close menu",
    primary: "Primary",
    switchLabel: "Version française",
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
    switchLabel: "English version",
    role: "Professeur assistant",
    dept: "Département de physique et d\u2019astronomie",
    univ: "Université Sejong, Séoul",
    where: "Où me trouver",
    country: "Séoul 05006, Corée du Sud",
    elsewhere: "Sur le web",
  },
}

const Layout = ({ children, lang: forcedLang }) => {
  const [navOpen, setNavOpen] = useState(false)
  const { pathname } = useLocation()
  const lang = forcedLang || langOf(pathname)
  const t = ui[lang]
  const navItems = nav[lang]

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="site-logo" to={lang === "fr" ? "/fr/" : "/"} aria-label={t.home}>
            <img src="/images/benjissi-logo.png" alt={t.logoAlt} />
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
              <Link
                className="lang-switch"
                to={otherLangPath(pathname)}
                hrefLang={lang === "fr" ? "en" : "fr"}
                title={t.switchLabel}
              >
                <span className={lang === "en" ? "is-current" : undefined}>EN</span>
                <span aria-hidden="true">|</span>
                <span className={lang === "fr" ? "is-current" : undefined}>FR</span>
              </Link>
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
