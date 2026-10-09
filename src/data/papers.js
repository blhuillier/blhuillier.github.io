// One entry per paper: the single source for summary boxes and the Publications page.
//
// authors: as on the paper. Markers: "*" corresponding author, "†" student or junior
//          researcher I supervised or co-supervised. My name is bolded automatically.
// tags:    topic pages pull papers by tag, e.g. <PaperList tag="simulations" />.
//          Current tags: model-testing, dark-energy, modified-gravity, simulations,
//          dark-matter, large-scale-structure, galaxies, agn, distances, supernovae,
//          gravitational-waves, lensing, clusters, primordial, methods.
// figure:  { src: "/images/papers/<id>.png", caption: "…" }, or null for none yet.
// journal: null for preprints (shown as "arXiv preprint").

export const ME = "L'Huillier, B."

export const papers = [
  {
    id: "dawn2026-lenses1",
    authors: ["Dawn, A.", "Jiang, J.-Q.", "Hazra, D. K.", ME, "Shafieloo, A."],
    year: 2026,
    title: "Finding the distribution of matter using lenses – I: deconvolution-based reconstruction with CMB lensing",
    journal: null,
    doi: null,
    arxiv: "2609.08457",
    tags: ["lensing", "large-scale-structure", "model-testing"],
    summary:
      "We reconstruct the linear matter power spectrum at $z = 0$ from joint Planck PR4, ACT DR6 and SPT-3G CMB lensing, using a modified Richardson–Lucy deconvolution. The result follows the linear prediction on large scales, lies systematically higher for $k \\gtrsim 0.1\\,\\mathrm{Mpc}^{-1}$, and partly preserves the BAO feature.",
    figure: {
      src: "/images/papers/dawn2026-lenses1.png",
      caption:
        "Reconstructed linear matter power spectrum divided by the fiducial prediction, with 68% and 95% Monte Carlo bands.",
    },
  },
  {
    id: "jiang2026-lenses2",
    authors: ["Jiang, J.-Q.", "Dawn, A.", "Hazra, D. K.", ME, "Shafieloo, A."],
    year: 2026,
    title: "Finding the distribution of matter using lenses – II: deconvolution-based reconstruction with $3\\times2$pt measurements",
    journal: null,
    doi: null,
    arxiv: "2609.08460",
    tags: ["lensing", "large-scale-structure", "model-testing"],
    summary:
      "A regularised Richardson–Lucy framework tests scale-dependent departures from the nonlinear matter power spectrum using galaxy clustering, galaxy–galaxy lensing and cosmic shear. On LSST Year-10-like mocks, oscillations of about 1% or more are recovered over $0.1 \\lesssim k \\lesssim 0.5\\,\\mathrm{Mpc}^{-1}$, and a 1% oscillation is detected at about $2.6\\sigma$.",
    figure: {
      src: "/images/papers/jiang2026-lenses2.png",
      caption:
        "Reconstructions of a 5% oscillatory feature from 1000 noisy LSST-like mocks (blue), their median (green) and the truth (red).",
    },
  },
  {
    id: "hodgson2026-counterjets",
    authors: ["Hodgson, J. A.", "Carr, A.", "Parkinson, D.", "Statti, M.", "Myeong, J.", ME, "Shafieloo, A.", "Liodakis, I.", "Oh, S.-H."],
    year: 2026,
    title: "A refined method for measuring cosmological distances using variability and proper motions in AGNs with VLBI-detected counter jets",
    journal: "A&A 712 (2026) A240",
    doi: "10.1051/0004-6361/202660314",
    arxiv: "2608.02202",
    tags: ["agn", "distances"],
    summary:
      "We extend the ‘speed-gun’ distance method using the proper motions of both the approaching jet and the counter-jet, which removes its dependence on the Doppler factor. For 3C 84 we obtain an angular-diameter distance of 71–79 Mpc depending on the assumed geometry; the spherical case agrees with SH0ES-calibrated supernovae.",
    figure: {
      src: "/images/papers/hodgson2026-counterjets.png",
      caption:
        "The speed-gun counter-jet method: the approaching jet looks longer and faster than the counter-jet, which fixes the viewing angle and speed.",
    },
  },
  {
    id: "kim2026-clusters",
    authors: ["Kim, H.†", "Wicker, R.", ME, "Douspis, M.", "Salvati, L.", "Shafieloo, A."],
    year: 2026,
    title: "Non-parametric estimation of the baryon gas fraction and the cosmological bias with clusters",
    journal: null,
    doi: null,
    arxiv: "2603.13763",
    tags: ["clusters", "model-testing"],
    summary:
      "From a model-independent expansion history reconstructed from supernovae, we infer with iterative smoothing how the hydrostatic mass bias of galaxy clusters depends on mass and redshift, using X-ray gas fractions. Reconciling clusters with CMB constraints requires this bias to evolve with time.",
    figure: {
      src: "/images/papers/kim2026-clusters.png",
      caption:
        "Reconstructed cluster bias, normalised by the Wicker et al. 2023 model, as a function of redshift (left) and mass (right).",
    },
  },
  {
    id: "millard2026-flrw",
    authors: ["Millard, C.†", ME + "*", "Douspis, M."],
    year: 2026,
    title: "Model independent test of the FLRW metric and the curvature in light of DESI DR2",
    journal: "JCAP 08 (2026) 016",
    doi: "10.1088/1475-7516/2026/08/016",
    arxiv: "2601.20293",
    tags: ["model-testing", "supernovae"],
    summary:
      "We reconstruct distances and the Hubble rate from Pantheon+ and DES supernovae without assuming any dark energy model, and combine them with DESI DR2 baryon acoustic oscillations to test the FLRW metric and measure the spatial curvature. With Pantheon+ and DESI DR2 we find $\\Omega_{k,0} = 0.045^{+0.045}_{-0.081}$, consistent with flatness and with Planck 2018.",
    figure: {
      src: "/images/papers/millard2026-flrw.png",
      caption:
        "$\\mathcal{O}_k(z)$ from supernova reconstructions combined with DESI DR2, for three data sets, colour-coded by $\\Delta\\chi^2$; right: the resulting likelihoods.",
    },
  },
  {
    id: "fernandezgil2025-alignment",
    authors: ["Fernández Gil, D.†", "Hodgson, J. A.", ME, "Asorey, J.", "Saulder, C.", "Finner, K.", "et al."],
    year: 2025,
    title: "Detection of an orthogonal alignment between parsec-scale AGN jets and their host galaxies",
    journal: "Nature Astronomy 9 (2025) 302",
    doi: "10.1038/s41550-024-02407-4",
    arxiv: "2411.09099",
    tags: ["agn", "galaxies"],
    summary:
      "Comparing VLBI jet directions with optical host-galaxy shapes for about 6,000 AGN, we detect a weak but significant alignment between the parsec-scale jet and the minor axis of its host galaxy: a link between the black hole and its host across three orders of magnitude in scale.",
    figure: {
      src: "/images/papers/fernandezgil2025-alignment.png",
      caption:
        "How the jet–host angle is measured: VLBI jet position angle (a) against the minor axis of the optical host in DES, DESI LS, SDSS and SkyMapper (b–e).",
    },
  },
  {
    id: "lhuillier2025-litmus",
    authors: [ME, "Mitra, A.", "Shafieloo, A.", "Keeley, R. E.", "Koo, H."],
    year: 2025,
    title: "Litmus tests of the flat ΛCDM model and model-independent measurement of $H_0 r_\\mathrm{d}$ with LSST and DESI",
    journal: "JCAP 05 (2025) 030",
    doi: "10.1088/1475-7516/2025/05/030",
    arxiv: "2407.07847",
    tags: ["model-testing", "supernovae"],
    summary:
      "Reconstructing the expansion history from simulated LSST supernovae and combining it with simulated DESI 5-year BAO, we forecast constraints of up to ±4% on the curvature and ±0.1 on $c/(H_0 r_\\mathrm{d})$, without assuming any form of dark energy.",
    figure: {
      src: "/images/papers/lhuillier2025-litmus.png",
      caption:
        "The curvature diagnostic $\\mathcal{O}_k$ on mocks from four fiducial models: it recovers $\\Omega_{k,0} = 0.1$ when the input is curved.",
    },
  },
  {
    id: "hodgson2023-speedgun",
    authors: ["Hodgson, J. A.", ME, "Liodakis, I.", "Lee, S.-S.", "Shafieloo, A."],
    year: 2023,
    title: "Estimating the feasibility of ‘standard speed-gun’ distances",
    journal: "MNRAS 521 (2023) L44",
    doi: "10.1093/mnrasl/slad007",
    arxiv: "2301.06252",
    tags: ["agn", "distances"],
    summary:
      "We extend the ‘standard speed-gun’ distance method by using the maximum intrinsic brightness temperature of a source instead of its Doppler factor. Forecasts show that recovering the cosmology depends mainly on how well this temperature is known and on the number of observed flares.",
    figure: {
      src: "/images/papers/hodgson2023-speedgun.png",
      caption:
        "Simulated speed-gun distance measurements (30 sources, 10 flares each) for four redshift distributions, with the recovered cosmology.",
    },
  },
  {
    id: "calderon2023-joint2",
    authors: ["Calderón, R.", ME, "Polarski, D.", "Shafieloo, A.", "Starobinsky, A. A."],
    year: 2023,
    title: "Joint reconstructions of growth and expansion histories from stage-IV surveys with minimal assumptions. II. Modified gravity and massive neutrinos",
    journal: "Phys. Rev. D 108 (2023) 023504",
    doi: "10.1103/PhysRevD.108.023504",
    arxiv: "2301.00640",
    tags: ["model-testing", "modified-gravity"],
    summary:
      "We reconstruct the effective gravitational coupling $G_\\mathrm{eff}(z)$ as a Gaussian process from forecast stage-IV growth data. DESI-like surveys could detect departures from General Relativity if dark energy is well determined; massive neutrinos do not change this, but assuming a ΛCDM expansion biases the inferred $\\Omega_\\mathrm{m}$ and $\\sigma_8$.",
    figure: {
      src: "/images/papers/calderon2023-joint2.png",
      caption:
        "Realistic forecast: reconstructed $G_\\mathrm{eff}/G$ and $f\\sigma_8$ for two modified-gravity scenarios (bump and dip). Both rule out GR at more than $2\\sigma$ around $z \\approx 1$.",
    },
  },
  {
    id: "keeley2024-pantheon",
    authors: ["Keeley, R. E.", "Shafieloo, A.", ME],
    year: 2024,
    title: "An analysis of variance of the Pantheon+ dataset: systematics in the covariance matrix?",
    journal: "Universe 10 (2024) 439",
    doi: "10.3390/universe10120439",
    arxiv: "2212.07917",
    tags: ["supernovae", "model-testing"],
    summary:
      "The best-fit ΛCDM $\\chi^2$ of Pantheon+ is unusually small, and its residuals scatter less than the covariance matrix predicts, pointing to errors overestimated by about 7%. After accounting for this, no deviation from ΛCDM is found.",
    figure: {
      src: "/images/papers/keeley2024-pantheon.png",
      caption:
        "$\\chi^2$ of the best-fit flat ΛCDM model on Pantheon+ (red) compared with its distribution over ΛCDM mocks (blue).",
    },
  },
  {
    id: "hwang2023-gp",
    authors: ["Hwang, S.-g.†", ME + "*", "Keeley, R. E.", "Jee, M. J.", "Shafieloo, A."],
    year: 2023,
    title: "How to use GP: effects of the mean function and hyperparameter selection on Gaussian process regression",
    journal: "JCAP 02 (2023) 014",
    doi: "10.1088/1475-7516/2023/02/014",
    arxiv: "2206.15081",
    tags: ["model-testing", "methods", "supernovae"],
    summary:
      "The choice of mean function and hyperparameters biases Gaussian process reconstructions of supernova distances: a zero mean gives unphysical results and a best-fit ΛCDM mean biases them. Marginalising over a family of mean functions and over the hyperparameters removes the bias, whatever the kernel.",
    figure: {
      src: "/images/papers/hwang2023-gp.png",
      caption:
        "Gaussian-process reconstruction of the distance modulus relative to the truth, fully marginalised over hyperparameters and CPL parameters.",
    },
  },
  {
    id: "calderon2022-joint1",
    authors: ["Calderón, R.", ME, "Polarski, D.", "Shafieloo, A.", "Starobinsky, A. A."],
    year: 2022,
    title: "Joint reconstructions of growth and expansion histories from stage-IV surveys with minimal assumptions I: dark energy beyond $\\Lambda$",
    journal: "Phys. Rev. D 106 (2022) 083513",
    doi: "10.1103/PhysRevD.106.083513",
    arxiv: "2206.13820",
    tags: ["model-testing", "dark-energy"],
    summary:
      "Gaussian processes reconstruct the dark energy density from forecast stage-IV supernova, BAO and redshift-space-distortion data, assuming only a flat FLRW universe that becomes matter-dominated at high redshift, which also yields the growth history. Several dark energy models can be distinguished from ΛCDM at $2\\sigma$ or more.",
    figure: {
      src: "/images/papers/calderon2022-joint1.png",
      caption:
        "Joint reconstructions of the effective gravitational coupling, $H(z)$ and $f\\sigma_8(z)$ for three fiducial cosmologies; dashed lines show the truth.",
    },
  },
  {
    id: "fernandezgil2023-vlbi",
    authors: ["Fernández Gil, D.†", "Hodgson, J. A.", ME],
    year: 2023,
    title: "Exploring connections between the VLBI and optical morphology of AGNs and their host galaxies",
    journal: null,
    doi: null,
    arxiv: "2305.06713",
    tags: ["agn", "galaxies"],
    summary:
      "Matching over 9,000 VLBI sources from the Astrogeo catalogue to their optical host galaxies and fitting the hosts' shapes, this first study finds no clear correlation between host morphology and jet direction.",
    figure: {
      src: "/images/papers/fernandezgil2025-alignment.png",
      caption:
        "How the jet–host angle is measured: VLBI jet position angle (a) against the minor axis of the optical host in DES, DESI LS, SDSS and SkyMapper (b–e). (Figure from the 2025 follow-up paper.)",
    },
  },
  {
    id: "koo2022-bayes",
    authors: ["Koo, H.", "Keeley, R. E.", "Shafieloo, A.", ME],
    year: 2022,
    title: "Bayesian vs frequentist: comparing Bayesian model selection with a frequentist approach using the iterative smoothing method",
    journal: "JCAP 03 (2022) 047",
    doi: "10.1088/1475-7516/2022/03/047",
    arxiv: "2110.10977",
    tags: ["model-testing", "methods"],
    summary:
      "On simulated Roman supernova data, Bayesian model selection finds the true model when it is among the candidates, but otherwise only picks the least wrong one. A frequentist test based on iterative smoothing can instead conclude that all tested models are false.",
    figure: {
      src: "/images/papers/koo2022-bayes.png",
      caption:
        "$\\Delta\\chi^2$ distributions for ΛCDM and PEDE over Roman-like mocks from a third model; vertical lines mark the 95% and 99% limits.",
    },
  },
  {
    id: "koo2021-modelselection",
    authors: ["Koo, H.", "Shafieloo, A.", "Keeley, R. E.", ME],
    year: 2021,
    title: "Model selection and parameter estimation using the iterative smoothing method",
    journal: "JCAP 03 (2021) 034",
    doi: "10.1088/1475-7516/2021/03/034",
    arxiv: "2009.12045",
    tags: ["model-testing", "methods"],
    summary:
      "Likelihood distributions derived from the non-parametric iterative smoothing method let us test a dark energy model and estimate its parameters without comparing it to an alternative. On WFIRST-like mocks we quantify how confidently different dark energy models can be distinguished.",
    figure: {
      src: "/images/papers/koo2021-modelselection.png",
      caption:
        "Distributions of $\\Delta\\chi^2$ between the smoothed and best-fit models over WFIRST-like ΛCDM mocks, for ΛCDM, PEDE and Kink.",
    },
  },
  {
    id: "calderon2021-neglambda",
    authors: ["Calderón, R.", "Gannouji, R.", ME + "*", "Polarski, D."],
    year: 2021,
    title: "Negative cosmological constant in the dark sector?",
    journal: "Phys. Rev. D 103 (2021) 023526",
    doi: "10.1103/PhysRevD.103.023526",
    arxiv: "2008.10237",
    tags: ["dark-energy", "model-testing"],
    summary:
      "We study dark sectors made of a negative cosmological constant plus a late-time accelerating component. The acceleration is often transient and some models eventually contract; current data show no decisive evidence for a negative $\\Lambda$, but the best fits are phantom at $z \\gtrsim 1$.",
    figure: {
      src: "/images/papers/calderon2021-neglambda.png",
      caption:
        "Where a universe with a negative cosmological constant still accelerates today (white), accelerated only in the past (dark grey), or never accelerated (light grey), for $\\Omega_\\mathrm{m} = 0.3$.",
    },
  },
  {
    id: "hodgson2020-vlbi",
    authors: ["Hodgson, J. A.", ME, "Liodakis, I.", "Lee, S.-S.", "Shafieloo, A."],
    year: 2020,
    title: "Using variability and VLBI to measure cosmological distances",
    journal: "MNRAS 495 (2020) L27",
    doi: "10.1093/mnrasl/slaa051",
    arxiv: "2003.10278",
    tags: ["agn", "distances"],
    summary:
      "We propose measuring AGN distances by comparing the physical size implied by variability with the angular size measured by VLBI. For 3C 84 we find $D_A = 72^{+5}_{-6}$ Mpc, consistent with other measurements at that redshift.",
    figure: {
      src: "/images/papers/hodgson2020-vlbi.jpg",
      caption:
        "43 GHz VLBI maps of 3C 84 (2015–2017). The arrow marks the flaring region used for the distance measurement.",
    },
  },
  {
    id: "koo2020-jla",
    authors: ["Koo, H.", "Shafieloo, A.", "Keeley, R. E.", ME],
    year: 2020,
    title: "Model-independent constraints on Type Ia supernova light-curve hyper-parameters and reconstructions of the expansion history of the Universe",
    journal: "ApJ 899 (2020) 9",
    doi: "10.3847/1538-4357/ab9c9a",
    arxiv: "2001.10887",
    tags: ["supernovae", "model-testing"],
    summary:
      "Reconstructing the expansion history from JLA supernovae with iterative smoothing while sampling the light-curve hyper-parameters, we find hyper-parameters consistent with those from ΛCDM, CPL and PEDE fits, and no significant redshift evolution.",
    figure: {
      src: "/images/papers/koo2020-jla.png",
      caption:
        "Constraints on the JLA light-curve parameters from iterative smoothing (red) compared with ΛCDM, CPL and PEDE.",
    },
  },
  {
    id: "hassani2020-kessence",
    authors: ["Hassani, F.", ME, "Shafieloo, A.", "Kunz, M.", "Adamek, J."],
    year: 2020,
    title: "Parametrising non-linear dark energy perturbations",
    journal: "JCAP 04 (2020) 039",
    doi: "10.1088/1475-7516/2020/04/039",
    arxiv: "1910.01105",
    tags: ["dark-energy", "simulations"],
    summary:
      "Using k-evolution N-body simulations, we quantify non-linear k-essence dark energy perturbations through an effective modification $\\mu$ of the Poisson equation, show that linear theory is accurate at large sound speeds, and propose a simulation-calibrated parametrisation of $\\mu$.",
    figure: {
      src: "/images/papers/hassani2020-kessence.png",
      caption:
        "Ratio $\\mu(k,z)$ of the k-essence to ΛCDM gravitational potential for sound speed $c_s^2 = 10^{-4}$, non-linear (points) versus linear (dashed).",
    },
  },
  {
    id: "lhuillier2020-defying",
    authors: [ME, "Shafieloo, A.", "Polarski, D.", "Starobinsky, A. A."],
    year: 2020,
    title: "Defying the laws of Gravity I: model-independent reconstruction of the Universe expansion from growth data",
    journal: "MNRAS 494 (2020) 819",
    doi: "10.1093/mnras/staa633",
    arxiv: "1906.05991",
    tags: ["model-testing", "modified-gravity"],
    summary:
      "From redshift-space distortion data alone, we reconstruct the growth history with crossing statistics and Gaussian processes, derive the expansion history from it, and fit supernovae to constrain $\\Omega_{\\mathrm{m},0}$ and $\\sigma_{8,0}$. The results are consistent with flat ΛCDM and General Relativity.",
    figure: {
      src: "/images/papers/lhuillier2020-defying.png",
      caption:
        "Reconstructions of $\\Omega_\\mathrm{de}(z)$ (left) and the growth index $\\gamma(z)$ (right) that fit the growth data better than ΛCDM, for three cases.",
    },
  },
  {
    id: "keeley2020-sirens",
    authors: ["Keeley, R. E.", "Shafieloo, A.", ME, "Linder, E. V."],
    year: 2020,
    title: "Debiasing cosmic gravitational wave sirens",
    journal: "MNRAS 491 (2020) 3983",
    doi: "10.1093/mnras/stz3304",
    arxiv: "1905.10216",
    tags: ["gravitational-waves", "model-testing"],
    summary:
      "Gaussian process regression can remove the bias in reconstructing $H(z)$ from gravitational-wave standard sirens, and combined with supernovae it tests $H_0$ and ΛCDM. Dark-siren redshifts need close to spectroscopic precision to avoid significant bias.",
    figure: {
      src: "/images/papers/keeley2020-sirens.png",
      caption:
        "Gaussian-process reconstructions of $1/H(z)$ and $D_L(z)$ from standard sirens and supernovae for a ΛCDM input, relative to the best-fit ΛCDM.",
    },
  },
  {
    id: "lhuillier2019-pantheon",
    authors: [ME, "Shafieloo, A.", "Linder, E. V.", "Kim, A. G."],
    year: 2019,
    title: "Model independent expansion history from supernovae: cosmology versus systematics",
    journal: "MNRAS 485 (2019) 2783",
    doi: "10.1093/mnras/stz589",
    arxiv: "1812.03623",
    tags: ["model-testing", "supernovae"],
    summary:
      "A model-independent analysis of the Pantheon supernovae shows deviations from ΛCDM at $z \\gtrsim 1$. They vanish with a simple Malmquist-like correction, but neither $\\chi^2$ tests nor Gaussian processes find that this extra correction is statistically required.",
    figure: {
      src: "/images/papers/lhuillier2019-pantheon.png",
      caption:
        "Iterative smoothing of Pantheon: residuals, $h(z)$, the $Om$ diagnostic and $w(z)$. Every curve fits the data better than the best-fit ΛCDM.",
    },
  },
  {
    id: "shafieloo2018-falsifying",
    authors: ["Shafieloo, A.", ME + "*", "Starobinsky, A. A."],
    year: 2018,
    title: "Falsifying ΛCDM: model-independent tests of the concordance model with eBOSS DR14Q and Pantheon",
    journal: "Phys. Rev. D 98 (2018) 083526",
    doi: "10.1103/PhysRevD.98.083526",
    arxiv: "1804.04320",
    tags: ["model-testing", "modified-gravity"],
    summary:
      "Combining model-independent expansion reconstructions from Pantheon supernovae and BAO, we test the FLRW metric and flatness, and use eBOSS DR14Q growth data to constrain $\\Omega_\\mathrm{m}$, $\\gamma$ and $\\sigma_8$. Everything is consistent with a flat FLRW universe, General Relativity and $\\Lambda$, with some tension at $z > 1$.",
    figure: {
      src: "/images/papers/shafieloo2018-falsifying.png",
      caption:
        "$\\Theta(z)$ (top) and $\\mathcal{O}_k(z)$ (bottom) from supernovae and BOSS/eBOSS BAO. A flat FLRW universe gives $\\Theta = 1$.",
    },
  },
  {
    id: "lhuillier2018-growth",
    authors: [ME, "Shafieloo, A.", "Kim, H.†"],
    year: 2018,
    title: "Model-independent cosmological constraints from growth and expansion",
    journal: "MNRAS 476 (2018) 3263",
    doi: "10.1093/mnras/sty398",
    arxiv: "1712.04865",
    tags: ["model-testing", "modified-gravity"],
    summary:
      "We reconstruct the expansion history from supernovae and fit growth-rate data to constrain $\\Omega_\\mathrm{m}$, the growth index $\\gamma$ and $\\sigma_8$ without a dark energy model. The results agree with ΛCDM in General Relativity, and requiring a positive dark energy density tightens them further.",
    figure: {
      src: "/images/papers/lhuillier2018-growth.png",
      caption:
        "Model-independent regions allowed by growth data (blue) compared with ΛCDM (red), at fixed $\\gamma = 0.55$ (left) and fixed $\\sigma_8 = 0.8$ (right).",
    },
  },
  {
    id: "uhlemann2018-cylinders",
    authors: ["Uhlemann, C.", "Pichon, C.", "Codis, S.", ME, "Kim, J.", "et al."],
    year: 2018,
    title: "Cylinders out of a top hat: counts-in-cells for projected densities",
    journal: "MNRAS 477 (2018) 2772",
    doi: "10.1093/mnras/sty664",
    arxiv: "1711.04767",
    tags: ["large-scale-structure", "simulations"],
    summary:
      "Large-deviation statistics predict the one-point PDF and clustering of projected densities in cylinders, in agreement with the Horizon Run 4 simulation to within a few percent in the quasi-linear regime: a tool for photometric surveys such as DES and Euclid.",
    figure: {
      src: "/images/papers/uhlemann2018-cylinders.jpg",
      caption:
        "Sub-halo counts in a $60\\,h^{-1}\\,\\mathrm{Mpc}$ shell of the Horizon Run 4 lightcone at $z = 0.36$, projected on the sphere.",
    },
  },
  {
    id: "lhuillier2018-features",
    authors: [ME, "Shafieloo, A.", "Hazra, D. K.", "Smoot, G. F.", "Starobinsky, A. A."],
    year: 2018,
    title: "Probing features in the primordial perturbation spectrum with large-scale structure data",
    journal: "MNRAS 477 (2018) 2503",
    doi: "10.1093/mnras/sty745",
    arxiv: "1710.10987",
    tags: ["primordial", "simulations", "large-scale-structure"],
    summary:
      "Can large-scale structure distinguish primordial power spectra with features that the CMB cannot? With 15 DESI-like N-body simulations, we show that the halo mass function and two-point correlation function cannot, but simple counts-in-cells statistics can.",
    figure: {
      src: "/images/papers/lhuillier2018-features.png",
      caption:
        "Primordial power spectra with features (left) and the resulting linear matter power spectra relative to Planck 2015 (right).",
    },
  },
  {
    id: "uhlemann2018-separation",
    authors: ["Uhlemann, C.", "Feix, M.", "Codis, S.", "Pichon, C.", "Bernardeau, F.", "et al. (incl. " + ME + ")"],
    year: 2018,
    title: "A question of separation: disentangling tracer bias and gravitational non-linearity with counts-in-cells statistics",
    journal: "MNRAS 473 (2018) 5098",
    doi: "10.1093/mnras/stx2616",
    arxiv: "1705.08901",
    tags: ["large-scale-structure", "simulations"],
    summary:
      "We model the bias of tracer densities in spheres with a quadratic bias relation and the large-deviation dark matter PDF, validated on Horizon Run 4 subhaloes. This allows a joint estimate of the non-linear dark matter variance and the bias parameters.",
    figure: {
      src: "/images/papers/uhlemann2018-separation.png",
      caption:
        "Halo density against dark matter density in spheres of $15\\,h^{-1}\\,\\mathrm{Mpc}$ at $z = 0$, with the reconstructed bias function (red).",
    },
  },
  {
    id: "lhuillier2017-modgrav",
    authors: [ME, "Winther, H. A.", "Mota, D. F.", "Park, C.", "Kim, J."],
    year: 2017,
    title: "Dark matter haloes in modified gravity and dark energy: interaction rate, small- and large-scale alignment",
    journal: "MNRAS 468 (2017) 3174",
    doi: "10.1093/mnras/stx700",
    arxiv: "1703.07357",
    tags: ["simulations", "modified-gravity", "dark-matter"],
    summary:
      "In N-body simulations of $f(R)$ gravity, DGP and coupled dark energy, $f(R)$ raises halo spin and weakens the spin alignment of interacting pairs, while only strongly coupled dark energy increases the halo interaction rate and the alignment of halo shapes with the large-scale structure.",
    figure: {
      src: "/images/papers/lhuillier2017-modgrav.png",
      caption:
        "Halo interaction rate versus mass in ΛCDM and in $f(R)$, DGP and coupled dark energy simulations.",
    },
  },
  {
    id: "lhuillier2017-ecology2",
    authors: [ME, "Park, C.", "Kim, J."],
    year: 2017,
    title: "Ecology of dark matter haloes – II. Effects of interactions on the alignment of halo pairs",
    journal: "MNRAS 466 (2017) 4875",
    doi: "10.1093/mnras/stx124",
    arxiv: "1701.04417",
    tags: ["simulations", "dark-matter"],
    summary:
      "In Horizon Run 4, interacting haloes have lower spin and are more spherical than typical haloes. Pairs start with antiparallel spins that gradually become parallel, interactions are mostly radial, and alignments are strongest for massive, close pairs and persist up to $z = 4$.",
    figure: {
      src: "/images/papers/lhuillier2017-ecology2.png",
      caption:
        "Evolution of the alignment between the spins of interacting haloes, by environment (columns) and mass (rows).",
    },
  },
  {
    id: "uhlemann2017-kaiser",
    authors: ["Uhlemann, C.", "Codis, S.", "Kim, J.", "Pichon, C.", "Bernardeau, F.", "et al. (incl. " + ME + ")"],
    year: 2017,
    title: "Beyond Kaiser bias: mildly non-linear two-point statistics of densities in distant spheres",
    journal: "MNRAS 466 (2017) 2067",
    doi: "10.1093/mnras/stw3221",
    arxiv: "1607.01026",
    tags: ["large-scale-structure", "simulations"],
    summary:
      "Parameter-free analytic bias functions extend Kaiser bias into the mildly non-linear regime, using large-deviation statistics and spherical collapse. They match Horizon Run 4 at the percent level down to about $10\\,h^{-1}\\,\\mathrm{Mpc}$, and reduce the variance of the estimator about fivefold.",
    figure: {
      src: "/images/papers/uhlemann2017-kaiser.png",
      caption:
        "Density-dependent clustering bias $b(\\rho)$ in Horizon Run 4 at $z = 0.7$ (points) against the saddle-point prediction (lines).",
    },
  },
  {
    id: "lhuillier2017-flrw",
    authors: [ME, "Shafieloo, A."],
    year: 2017,
    title: "Model-independent test of the FLRW metric, the flatness of the Universe, and non-local measurement of $H_0 r_\\mathrm{d}$",
    journal: "JCAP 01 (2017) 015",
    doi: "10.1088/1475-7516/2017/01/015",
    arxiv: "1606.06832",
    tags: ["model-testing", "supernovae"],
    summary:
      "Combining BOSS DR12 BAO with JLA supernovae, we measure $H_0 r_\\mathrm{d}$ without assuming a cosmological model and introduce the $\\Theta(z)$ diagnostic of the flat-FLRW metric. The results are consistent with a flat FLRW universe within $2\\sigma$.",
    figure: {
      src: "/images/papers/lhuillier2017-flrw.png",
      caption:
        "$\\Theta(z)$ and the curvature diagnostic $\\mathcal{O}_k(z)$ at the BOSS LOWZ and CMASS redshifts, one point per supernova-based reconstruction. A flat FLRW universe gives $\\Theta = 1$ and $\\mathcal{O}_k = 0$.",
    },
  },
  {
    id: "kim2015-hr4",
    authors: ["Kim, J.", "Park, C.", ME, "Hong, S. E."],
    year: 2015,
    title: "Horizon Run 4 simulation: coupled evolution of galaxies and large-scale structures of the Universe",
    journal: "J. Korean Astron. Soc. 48 (2015) 213",
    doi: "10.5303/JKAS.2015.48.4.213",
    arxiv: "1508.05107",
    tags: ["simulations", "large-scale-structure", "dark-matter"],
    summary:
      "Horizon Run 4 follows $6300^3$ particles in a $3150\\,h^{-1}\\,\\mathrm{Mpc}$ box, with halo merger trees down to $2.7\\times10^{11}\\,h^{-1}\\,M_\\odot$. The halo mass function departs from universality and evolves with redshift, and the BAO peak in mock galaxy correlations broadens and shifts. The data are public.",
    figure: {
      src: "/images/papers/kim2015-hr4.jpg",
      caption:
        "A $7\\,h^{-1}\\,\\mathrm{Mpc}$-thick slice through Horizon Run 4 at $z = 0$, with two successive zooms onto a galaxy cluster.",
    },
  },
  {
    id: "lhuillier2015-ecology1",
    authors: [ME, "Park, C.", "Kim, J."],
    year: 2015,
    title: "The ecology of dark matter haloes – I. The rates and types of halo interactions",
    journal: "MNRAS 451 (2015) 527",
    doi: "10.1093/mnras/stv995",
    arxiv: "1505.00788",
    tags: ["simulations", "dark-matter"],
    summary:
      "Using Horizon Run 4, we measure how often haloes interact as a function of environment, separation, mass ratio, mass and redshift. Most interactions happen at density contrast $\\delta \\approx 20$, while the interacting fraction peaks at $\\delta \\approx 1000$; we provide a fitting formula and identify two interaction modes.",
    figure: {
      src: "/images/papers/lhuillier2015-ecology1.png",
      caption:
        "Haloes in the cosmic web at $z = 0$ (top) and $z = 1$ (bottom): the densest environments (red) sit in the nodes, intermediate ones (cyan) in filaments.",
    },
  },
  {
    id: "lhuillier2014-ic",
    authors: [ME, "Park, C.", "Kim, J."],
    year: 2014,
    title: "Effects of the initial conditions on cosmological N-body simulations",
    journal: "New Astron. 30 (2014) 79",
    doi: "10.1016/j.newast.2014.01.007",
    arxiv: "1401.6180",
    tags: ["simulations", "methods", "dark-matter"],
    summary:
      "We test how the pre-initial configuration, the order of Lagrangian perturbation theory and the starting redshift affect N-body results. Glass and grid give similar results at $z \\lesssim 2$, while first-order LPT underestimates massive haloes by about 2% and small-scale power by 6%.",
    figure: {
      src: "/images/papers/lhuillier2014-ic.png",
      caption:
        "Effect of the order of Lagrangian perturbation theory (1LPT vs 2LPT) in the initial conditions on the halo mass function.",
    },
  },
  {
    id: "lhuillier2012-accretion",
    authors: [ME, "Combes, F.", "Semelin, B."],
    year: 2012,
    title: "Mass assembly of galaxies: smooth accretion versus mergers",
    journal: "A&A 544 (2012) A68",
    doi: "10.1051/0004-6361/201117924",
    arxiv: "1108.4247",
    tags: ["galaxies", "simulations"],
    summary:
      "Multi-zoom cosmological simulations show that galaxies grow mostly by smooth accretion, which brings on average 77% of their mass, while mergers bring 23%. Only the most massive galaxies grow significantly through mergers.",
    figure: {
      src: "/images/papers/lhuillier2012-accretion.png",
      caption:
        "Fraction of stellar mass gained through smooth accretion rather than mergers, versus galaxy mass. The mean is 77%.",
    },
  },
]

export const getPaper = (id) => papers.find((p) => p.id === id)
