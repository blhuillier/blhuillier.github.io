// Pages that exist in both languages. The French version lives at "/fr" + path.
export const BILINGUAL = ["/", "/research/", "/teaching/", "/the-group/", "/outreach/", "/contact/"]

const norm = (p = "/") => (p.endsWith("/") ? p : `${p}/`)

/** Language of a path, from its prefix. */
export const langOf = (path = "/") => (/^\/fr(\/|$)/.test(path) ? "fr" : "en")

/** Counterpart of a path in the other language (falls back to the other homepage). */
export const otherLangPath = (path = "/") => {
  const p = norm(path)
  if (langOf(p) === "fr") {
    const en = p.replace(/^\/fr/, "") || "/"
    return BILINGUAL.includes(en) ? en : "/"
  }
  return BILINGUAL.includes(p) ? `/fr${p === "/" ? "/" : p}` : "/fr/"
}
