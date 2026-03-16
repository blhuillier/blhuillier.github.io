module.exports = {
  siteMetadata: {
    title: "Benjamin L'Huillier - Cosmologist & Astrophysicist",
    description: "Official website of Benjamin L'Huillier, featuring his research, teaching, publications, and group.",
    author: "Benjamin L'Huillier",
    siteUrl: "https://blhuillier.github.io",
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Benjamin L'Huillier's Website",
        short_name: "BLHuillier",
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // Add a favicon in src/images
      },
    },
    `gatsby-plugin-react-helmet`, // For SEO metadata
    // `gatsby-plugin-sitemap`, // For automatic sitemap generation
  ],
};
