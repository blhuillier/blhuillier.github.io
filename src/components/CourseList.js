import React from "react"
import { NOW } from "../data/courses"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const SEASON_FR = { Spring: "Printemps", Fall: "Automne", Summer: "Été", Winter: "Hiver" }
const SEASON_KO = { Spring: "봄", Fall: "가을", Summer: "여름", Winter: "겨울" }
const term = (t, lang) => {
  if (lang === "fr") return t.replace(/^(Spring|Fall|Summer|Winter)/, (m) => SEASON_FR[m])
  if (lang === "ko") return t.replace(/^(Spring|Fall|Summer|Winter) (\d{4})$/, (_, s, y) => `${y} ${SEASON_KO[s]}`)
  return t
}
const NOW_LABEL = { en: "Now", fr: "En cours", ko: "진행 중" }

const CourseList = ({ heading, courses, lang = "en" }) => (
  <div>
    <h3>{heading}</h3>
    <ul className="course-list">
      {courses.map((c) => (
        <li key={c.name}>
          <span className="course-name" title={lang !== "en" ? c.name : undefined}>
            {c.link ? <a href={c.link} {...ext}>{c[lang] || c.name}</a> : c[lang] || c.name}
          </span>
          {c.terms.includes(NOW) && (
            <span className="course-now">{NOW_LABEL[lang] || NOW_LABEL.en}</span>
          )}
          <span className="course-terms">
            {c.terms
              .filter((t) => t !== NOW)
              .map((t) => term(t, lang))
              .join(" · ")}
          </span>
        </li>
      ))}
    </ul>
  </div>
)

export default CourseList
