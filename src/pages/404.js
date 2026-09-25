import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <div className="notfound">
      <h1 className="display">404</h1>
      <p className="prose" style={{ maxWidth: "460px", margin: "0 auto 2em" }}>
        This page is outside the observable site. It may have moved when the site left Wix.
      </p>
      <Link className="btn" to="/">
        Back to home
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage

export const Head = () => <Seo title="Page not found" pathname="/404/" noindex />
