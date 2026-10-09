import React from "react"
import meta from "../siteMeta"
import { LANGS, langOf, basePath, hasVersion, pathIn } from "../i18n"

// Structured data for search engines (homepages only): who I am, where I work, my profiles.
const personSchema = (lang) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${meta.siteUrl}/#person`,
  name: "Benjamin L'Huillier",
  alternateName: ["Benjamin L\u2019Huillier", "Benjamin Lhuillier", "벤자민 루일리예"],
  url: `${meta.siteUrl}${lang === "en" ? "/" : `/${lang}/`}`,
  image: `${meta.siteUrl}/images/benji_team-web.jpg`,
  email: "mailto:benjamin@sejong.ac.kr",
  jobTitle: { en: "Assistant Professor", fr: "Professeur assistant", ko: "조교수" }[lang],
  nationality: { "@type": "Country", name: "France" },
  worksFor: {
    "@type": "CollegeOrUniversity",
    name: "Sejong University",
    department: { "@type": "Organization", name: "Department of Physics and Astronomy" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "209 Neungdong-ro, Gwangjin-gu",
      addressLocality: "Seoul",
      postalCode: "05006",
      addressCountry: "KR",
    },
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Sorbonne Université (Université Pierre et Marie Curie)" },
    { "@type": "Organization", name: "Observatoire de Paris" },
    { "@type": "CollegeOrUniversity", name: "CentraleSupélec (Supélec)" },
  ],
  knowsAbout: [
    "Cosmology",
    "Dark energy",
    "Modified gravity",
    "Large-scale structure",
    "Cosmological N-body simulations",
    "Gaussian processes",
    "Galaxy formation",
  ],
  knowsLanguage: ["fr", "en", "ko"],
  sameAs: [
    "https://orcid.org/0000-0003-2934-6243",
    "https://scholar.google.com/citations?user=vksMsj0AAAAJ",
    "https://inspirehep.net/authors/1347340",
    "https://ui.adsabs.harvard.edu/search/q=orcid%3A0000-0003-2934-6243",
    "https://www.researchgate.net/profile/Benjamin-Lhuillier",
    "https://github.com/blhuillier",
    "https://www.linkedin.com/in/lhuillierbenjamin/",
    "https://twitter.com/blhuilllier",
  ],
})

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

      {base === "/" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema(lang)) }}
        />
      )}
      {children}
    </>
  )
}

export default Seo
