import React from "react"
import meta from "../siteMeta"

/**
 * Rendered from each page's exported `Head`.
 * Gatsby's Head API does not support useStaticQuery, so metadata is imported
 * directly from src/siteMeta.js (the same object gatsby-config.js uses).
 */
const Seo = ({ title, description, pathname = "/", image, noindex, children }) => {
  const pageTitle = title ? meta.titleTemplate.replace("%s", title) : meta.title
  const pageDescription = description || meta.description
  const url = `${meta.siteUrl}${pathname}`
  const pageImage = `${meta.siteUrl}${image || meta.image}`

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="author" content={meta.author} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Benjissi" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={pageImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      {children}
    </>
  )
}

export default Seo
