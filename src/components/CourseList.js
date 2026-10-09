import React from "react"
import { NOW } from "../data/courses"

const ext = { target: "_blank", rel: "noopener noreferrer" }

const SEASON_FR = { Spring: "Printemps", Fall: "Automne", Summer: "Été", Winter: "Hiver" }
const term = (t, lang) =>
  lang === "fr" ? t.replace(/^(Spring|Fall|Summer|Winter)/, (m) => SEASON_FR[m]) : t

const CourseList = ({ heading, courses, lang = "en" }) => (
  <div>
    <h3>{heading}</h3>
    <ul className="course-list">
      {courses.map((c) => (
        <li key={c.name}>
          <span className="course-name">
            {c.link ? <a href={c.link} {...ext}>{c.name}</a> : c.name}
          </span>
          {c.terms.includes(NOW) && (
            <span className="course-now">{lang === "fr" ? "En cours" : "Now"}</span>
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
