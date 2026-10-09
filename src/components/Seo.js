import React from "react"
import meta from "../siteMeta"
import { BILINGUAL, langOf, otherLangPath } from "../i18n"

/**
 * Rendered from each page's exported `Head`.
 * Gatsby's Head API does not support useStaticQuery, so metadata is imported
 * directly from src/siteMeta.js (the same object gatsby-config.js uses).
 */
const Seo = ({ title, fullTitle, description, pathname = "/", image, noindex, children }) => {
  const lang = langOf(pathname)
  const enPath = lang === "fr" ? otherLangPath(pathname) : pathname
  const bilingual = BILINGUAL.includes(enPath)
  const pageTitle = fullTitle || (title ? meta.titleTemplate.replace("%s", title) : meta.title)
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
      {bilingual && (
        <>
          <link rel="alternate" hrefLang="en" href={`${meta.siteUrl}${enPath}`} />
          <link rel="alternate" hrefLang="fr" href={`${meta.siteUrl}/fr${enPath}`} />
          <link rel="alternate" hrefLang="x-default" href={`${meta.siteUrl}${enPath}`} />
        </>
      )}
      <meta property="og:locale" content={lang === "fr" ? "fr_FR" : "en_US"} />

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
