const siteMeta = require("./src/siteMeta")

module.exports = {
  siteMetadata: {
    title: siteMeta.title,
    titleTemplate: siteMeta.titleTemplate,
    description: siteMeta.description,
    author: siteMeta.author,
    siteUrl: siteMeta.siteUrl,
    image: siteMeta.image,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMeta.title,
        short_name: "Benjissi",
        start_url: `/`,
        background_color: `#f3f0ea`,
        theme_color: `#101010`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap`,
        excludes: [`/thegroup/`, `/404/`, `/404.html`],
      },
    },
  ],
}
