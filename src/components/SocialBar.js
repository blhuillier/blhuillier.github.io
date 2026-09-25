import React from "react"
import {
  ScholarIcon,
  GitHubIcon,
  XIcon,
  LinkedInIcon,
  InstagramIcon,
  ResearchGateIcon,
  OrcidIcon,
} from "./Icons"

export const profiles = {
  scholar: {
    href: "https://scholar.google.com/citations?user=vksMsj0AAAAJ&hl=en",
    label: "Google Scholar",
    Icon: ScholarIcon,
  },
  orcid: {
    href: "https://orcid.org/0000-0003-2934-6243",
    label: "ORCID",
    Icon: OrcidIcon,
  },
  researchgate: {
    href: "https://www.researchgate.net/profile/Benjamin-Lhuillier",
    label: "ResearchGate",
    Icon: ResearchGateIcon,
  },
  github: {
    href: "https://github.com/blhuillier",
    label: "GitHub",
    Icon: GitHubIcon,
  },
  x: {
    href: "https://twitter.com/blhuilllier",
    label: "X (Twitter)",
    Icon: XIcon,
  },
  linkedin: {
    href: "https://www.linkedin.com/in/lhuillierbenjamin/",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  instagram: {
    href: "https://www.instagram.com/_benjissi_",
    label: "Instagram",
    Icon: InstagramIcon,
  },
}

const SocialBar = ({ keys = Object.keys(profiles), className = "" }) => (
  <ul className={`social-bar ${className}`.trim()}>
    {keys.map((key) => {
      const item = profiles[key]
      if (!item) return null
      const { Icon } = item
      return (
        <li key={key}>
          <a
            href={item.href}
            title={item.label}
            aria-label={item.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon />
          </a>
        </li>
      )
    })}
  </ul>
)

export default SocialBar
