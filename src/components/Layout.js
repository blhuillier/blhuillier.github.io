import React from "react"
import { Link } from "gatsby"
import "./layout.css"

const navItems = [
  { label: "Home", to: "/" },
  { label: "Research", to: "/research" },
  { label: "Teaching", to: "/teaching" },
  { label: "Outreach", to: "/outreach" },
  { label: "The Group", to: "/thegroup" },
]

const Layout = ({ children }) => (
  <div className="site-shell">
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-brand" to="/">
          <span className="site-brand__name">Benjamin L&apos;Huillier</span>
          <span className="site-brand__role">Cosmology • Sejong University</span>
        </Link>

        <nav aria-label="Primary" className="site-nav">
          <ul className="site-nav__list">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link activeClassName="is-active" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>

    <main className="site-main">
      <div className="site-main__inner">{children}</div>
    </main>

    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__title">Benjamin L&apos;Huillier</p>
          <p>Assistant Professor, Department of Physics and Astronomy, Sejong University</p>
        </div>
        <div>
          <p className="site-footer__title">Contact</p>
          <p>Seoul, South Korea</p>
          <p>
            <a href="mailto:benjamin@sejong.ac.kr">benjamin@sejong.ac.kr</a>
          </p>
        </div>
        <div>
          <p className="site-footer__title">Profiles</p>
          <p>
            <a href="https://scholar.google.com/citations?user=vksMsj0AAAAJ">
              Google Scholar
            </a>
          </p>
          <p>
            <a href="https://github.com/blhuillier">GitHub</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
)

export default Layout
