// Single source of truth for site metadata.
// Required as CommonJS by gatsby-config.js and imported by src/components/Seo.js,
// so the Head API never needs useStaticQuery (which Gatsby's Head does not support).
//
// Keep this a plain, flat object: Gatsby validates and runs schema inference over
// siteMetadata at startup, and any self-reference here crashes the build.

module.exports = {
  title: "Benjamin L'Huillier \u2014 Cosmologist & Astrophysicist",
  titleTemplate: "%s \u2014 Benjamin L'Huillier",
  description:
    "Benjamin L'Huillier is a French cosmologist and Assistant Professor at Sejong University, Seoul. He tests the concordance model of cosmology with N-body simulations and advanced statistical methods.",
  author: "Benjamin L'Huillier",
  siteUrl: "https://www.benjissi.com",
  image: "/images/aboutmefinal1.jpg",
}
