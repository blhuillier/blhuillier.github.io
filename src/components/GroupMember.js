import React from "react"
import "./GroupMember.css"
import placeholderImage from "../images/placeholder.jpeg" // Placeholder image for members without a photo

const GroupMember = ({
  name,
  role,
  period,
  researchFocus,
  currentPosition,
  profileLinks,
  photo,
}) => (
  <div className="group-member">
    <img src={photo || placeholderImage} alt={`${name}'s photo`} className="member-photo" />
    <div className="member-info">
      <h3>{name}</h3>
      <p>{role}{period ? ` (${period})` : ""}</p>
      {researchFocus && (
        <div className="member-detail">
          <p>
            <span className="member-label">Research:</span>
          </p>
          <div className="member-detail__content">{researchFocus}</div>
        </div>
      )}
      {currentPosition && (
        <p>
          <span className="member-label">Current Position:</span> {currentPosition}
        </p>
      )}
      {profileLinks?.length ? (
        <p className="member-links">
          {profileLinks.map((link, index) => (
            <React.Fragment key={link.href}>
              {index > 0 ? " · " : ""}
              <a href={link.href}>{link.label}</a>
            </React.Fragment>
          ))}
        </p>
      ) : null}
    </div>
  </div>
)

export default GroupMember
