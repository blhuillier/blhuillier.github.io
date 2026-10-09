import React from "react"
import meta from "../siteMeta"
import { LANGS, langOf, basePath, hasVersion, pathIn } from "../i18n"

/**
 * Rendered from each page's exported `Head`.
 * Gatsby's Head API does not support useStaticQuery, so metadata is imported
 * directly from src/siteMeta.js (the same object gatsby-config.js uses).
 */
const Seo = ({ title, fullTitle, description, pathname = "/", image, noindex, children }) => {
  const lang = langOf(pathname)
  const base = basePath(pathname)
  const versions = LANGS.filter((l) => hasVersion(base, l))
  const template = lang === "ko" ? "%s — 벤자민 루일리예" : meta.titleTemplate
  const pageTitle = fullTitle || (title ? template.replace("%s", title) : meta.title)
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
      {versions.length > 1 && (
        <>
          {versions.map((l) => (
            <link key={l} rel="alternate" hrefLang={l} href={`${meta.siteUrl}${pathIn(base, l)}`} />
          ))}
          <link rel="alternate" hrefLang="x-default" href={`${meta.siteUrl}${base}`} />
        </>
      )}
      <meta property="og:locale" content={{ en: "en_US", fr: "fr_FR", ko: "ko_KR" }[lang]} />

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
