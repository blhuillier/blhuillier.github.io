// Publications page: profile links and selected-publication groups (ids from papers.js).
export const profiles = [
  ["NASA/ADS", "https://ui.adsabs.harvard.edu/#search/q=%20author%3A%22L'Huillier%2C%20Benjamin%22&sort=date%20desc%2C%20bibcode%20desc"],
  ["InSPIRE/HEP", "http://inspirehep.net/author/profile/B.LHuillier.2"],
  ["Google Scholar", "https://scholar.google.com/citations?user=vksMsj0AAAAJ&hl=en"],
  ["ORCID: 0000-0003-2934-6243", "https://orcid.org/0000-0003-2934-6243"],
  ["ResearchGate", "https://www.researchgate.net/profile/Benjamin-Lhuillier"],
  ["arXiv", "https://arxiv.org/a/lhuillier_b_1"],
]

// Selected publications: ids from src/data/papers.js (the single source for all papers).
export const groups = [
  {
    title: "Model-independent tests of the cosmological model",
    ids: [
      "millard2026-flrw",
      "lhuillier2025-litmus",
      "hwang2023-gp",
      "calderon2021-neglambda",
      "shafieloo2018-falsifying",
      "lhuillier2018-growth",
      "lhuillier2017-flrw",
    ],
  },
  {
    title: "Cosmological simulations and structure formation",
    ids: ["lhuillier2017-modgrav", "kim2015-hr4", "lhuillier2014-ic", "lhuillier2012-accretion"],
  },
  {
    title: "Galaxies and AGN",
    ids: ["fernandezgil2025-alignment"],
  },
]
