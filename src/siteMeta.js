// Single source of truth for site metadata.
// Required as CommonJS by gatsby-config.js and imported by src/components/Seo.js,
// so the Head API never needs useStaticQuery (which Gatsby's Head does not support).

const siteMeta = {
  title: "Benjamin L'Huillier — Cosmologist & Astrophysicist",
  titleTemplate: "%s — Benjamin L'Huillier",
  description:
    "Benjamin L'Huillier is a French cosmologist and Assistant Professor at Sejong University, Seoul. He tests the concordance model of cosmology with N-body simulations and advanced statistical methods.",
  author: "Benjamin L'Huillier",
  siteUrl: "https://www.benjissi.com",
  image: "/images/aboutmefinal1.jpg",
}

module.exports = siteMeta
module.exports.siteMeta = siteMeta
