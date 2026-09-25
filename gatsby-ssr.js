const React = require("react")

// Preconnect + load the two webfonts once, in the document head.
exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" })
  setHeadComponents([
    <link key="gf-pre1" rel="preconnect" href="https://fonts.googleapis.com" />,
    <link
      key="gf-pre2"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    <link
      key="gf-css"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Kaushan+Script&display=swap"
    />,
  ])
}
