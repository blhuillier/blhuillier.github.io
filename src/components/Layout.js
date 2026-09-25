import React, { useState } from "react"
import { Link } from "gatsby"
import SocialBar from "./SocialBar"
import "./layout.css"

const navItems = [
  { label: "Home", to: "/" },
  { label: "Research", to: "/research/" },
  { label: "Publications", to: "/publications/" },
  { label: "Teaching", to: "/teaching/" },
  { label: "The Group", to: "/the-group/" },
  { label: "Outreach", to: "/outreach/" },
  { label: "Contact", to: "/contact/" },
]

const Layout = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="site-logo" to="/" aria-label="Benjissi — home">
            <img
              src="/images/benjissi-logo.png"
              alt="Benjissi — Benjamin L'Huillier, cosmologist and astrophysicist"
            />
          </Link>

          <div className="site-header__right">
            <button
              className={`nav-toggle${navOpen ? " is-open" : ""}`}
              type="button"
              aria-label={navOpen ? "Close menu" : "Open menu"}
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
              aria-label="Primary"
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

            <SocialBar keys={["scholar", "github", "x", "linkedin"]} />
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div>
            <h4>Benjamin L&apos;Huillier</h4>
            <p>Assistant Professor</p>
            <p>Department of Physics and Astronomy</p>
            <p>Sejong University, Seoul</p>
          </div>
          <div>
            <h4>Where to find me</h4>
            <p>Gwangjin-gu, Neungdong-ro 209</p>
            <p>Seoul 05006, South Korea</p>
            <p>
              <a href="mailto:benjamin@sejong.ac.kr">benjamin@sejong.ac.kr</a>
            </p>
          </div>
          <div>
            <h4>Elsewhere</h4>
            <SocialBar />
          </div>
        </div>
        <div className="site-footer__legal">© {new Date().getFullYear()} Benjissi</div>
      </footer>
    </div>
  )
}

export default Layout
