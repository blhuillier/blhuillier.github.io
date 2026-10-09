// Site languages. English lives at the root; other languages at "/<code>" + the English path.
export const LANGS = ["en", "fr", "ko"]
export const LANG_LABEL = { en: "EN", fr: "FR", ko: "한" }
export const LANG_NAME = { en: "English", fr: "Français", ko: "한국어" }

// English paths that have a translation. Keep in sync with src/pages/fr and src/pages/ko.
const TRANSLATED_PAGES = [
  "/",
  "/research/",
  "/modeltesting/",
  "/simulations/",
  "/galaxy-formation-and-evolution/",
  "/publications/",
  "/teaching/",
  "/the-group/",
  "/outreach/",
  "/contact/",
]
export const TRANSLATED = { fr: TRANSLATED_PAGES, ko: TRANSLATED_PAGES }

const norm = (p = "/") => {
  const path = p.split(/[?#]/)[0]
  return path.endsWith("/") ? path : `${path}/`
}

/** Language of a path, from its prefix. */
export const langOf = (path = "/") => {
  const m = /^\/(fr|ko)(\/|$)/.exec(path)
  return m ? m[1] : "en"
}

/** English path corresponding to any path ("/fr/research/" -> "/research/"). */
export const basePath = (path = "/") => {
  const p = norm(path)
  return langOf(p) === "en" ? p : p.slice(3) || "/"
}

/** Does this English page exist in `lang`? */
export const hasVersion = (base, lang) => lang === "en" || (TRANSLATED[lang] || []).includes(base)

/** Path of the same page in `lang` (falls back to that language's homepage). */
export const pathIn = (path, lang) => {
  const base = basePath(path)
  if (lang === "en") return base
  return hasVersion(base, lang) ? `/${lang}${base}` : `/${lang}/`
}

/** Localize an internal link target ("/research/" -> "/fr/research/" on French pages). */
export const localize = (to, lang) => {
  if (lang === "en") return to
  const [path, hash = ""] = to.split("#")
  const base = basePath(path)
  return hasVersion(base, lang) ? `/${lang}${base}${hash ? `#${hash}` : ""}` : to
}
