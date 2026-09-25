import React from "react"
import "./GroupMember.css"
import { GitHubIcon, MailIcon, WebIcon, ScholarIcon } from "./Icons"

const iconFor = (kind) => {
  if (kind === "github") return GitHubIcon
  if (kind === "email") return MailIcon
  if (kind === "scholar") return ScholarIcon
  return WebIcon
}

const GroupMember = ({
  name,
  role,
  period,
  researchFocus,
  currentPosition,
  links = [],
  photo,
  light,
}) => (
  <article className={`group-member${light ? " group-member--light" : ""}`}>
    <img
      className="group-member__photo"
      src={photo || "/images/placeholder.jpeg"}
      alt={`Portrait of ${name}`}
      loading="lazy"
    />
    <div className="group-member__info">
      {role && <p className="group-member__role">{role}</p>}
      <h3 className="group-member__name">{name}</h3>
      {period && <p className="group-member__period">{period}</p>}
      {researchFocus && <div className="group-member__focus">{researchFocus}</div>}
      {currentPosition && (
        <p className="group-member__current">Now: {currentPosition}</p>
      )}
      {links.length > 0 && (
        <ul className="social-bar">
          {links.map((link) => {
            const Icon = iconFor(link.kind)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  title={link.label}
                  aria-label={`${name} — ${link.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  </article>
)

export default GroupMember
