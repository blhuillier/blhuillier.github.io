import React from "react"
import { papers, getPaper, ME } from "../data/papers"
import { RichText, plainText } from "./TeX"
import "./PaperSummary.css"

const ext = { target: "_blank", rel: "noopener noreferrer" }

export const Authors = ({ list }) =>
  list.map((a, i) => (
    <React.Fragment key={a + i}>
      {i > 0 && ", "}
      {a.startsWith(ME) ? <strong>{a}</strong> : a}
    </React.Fragment>
  ))

export const PaperLinks = ({ paper }) => (
  <span className="paper-links">
    {paper.doi && (
      <a href={`https://doi.org/${paper.doi}`} {...ext}>DOI</a>
    )}
    {paper.doi && paper.arxiv && " · "}
    {paper.arxiv && (
      <a href={`https://arxiv.org/abs/${paper.arxiv}`} {...ext}>arXiv:{paper.arxiv}</a>
    )}
  </span>
)

/** One paper as a box: figure (if any) + title, authors, journal, summary, links. */
const PREPRINT = { en: "arXiv preprint", fr: "prépublication arXiv", ko: "arXiv 프리프린트" }

export const PaperSummary = ({ id, paper: given, lang = "en" }) => {
  const paper = given || getPaper(id)
  if (!paper) {
    if (process.env.NODE_ENV !== "production") console.warn(`PaperSummary: unknown id "${id}"`)
    return null
  }
  return (
    <article className={`paper-box${paper.figure ? "" : " paper-box--text"}`} id={paper.id}>
      {paper.figure && (
        <figure className="paper-box__figure">
          <img src={paper.figure.src} alt={plainText(paper.figure.caption || paper.title)} loading="lazy" />
          {paper.figure.caption && (
            <figcaption><RichText text={paper.figure.caption} /></figcaption>
          )}
        </figure>
      )}
      <div className="paper-box__body">
        <p className="paper-box__meta">
          {paper.year} · {paper.journal ? <em>{paper.journal}</em> : PREPRINT[lang] || PREPRINT.en}
        </p>
        <h3 className="paper-box__title"><RichText text={paper.title} /></h3>
        <p className="paper-box__authors"><Authors list={paper.authors} /></p>
        <p className="paper-box__summary"><RichText text={paper.summary} /></p>
        <PaperLinks paper={paper} />
      </div>
    </article>
  )
}

/**
 * Several papers: <PaperList tag="simulations" />, <PaperList tags={["agn", "galaxies"]} />,
 * or <PaperList ids={["lhuillier2017-flrw", "millard2026-flrw"]} />. Newest first unless ids are given.
 */
export const PaperList = ({ tag, tags, ids, limit, lang = "en" }) => {
  let list
  if (ids) list = ids.map(getPaper).filter(Boolean)
  else {
    const wanted = tags || (tag ? [tag] : [])
    list = papers
      .filter((p) => p.tags.some((t) => wanted.includes(t)))
      .sort((a, b) => b.year - a.year)
  }
  if (limit) list = list.slice(0, limit)
  return (
    <div className="paper-list">
      {list.map((p) => (
        <PaperSummary key={p.id} paper={p} lang={lang} />
      ))}
    </div>
  )
}

export default PaperSummary
