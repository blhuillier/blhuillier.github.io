import React from "react"

// Small inline SVG flags for the language switch (emoji flags do not render on Windows).
// All three are drawn on a 3:2 box; the Union Jack (2:1) is cropped to fit.

export const FlagUK = (props) => (
  <svg viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" aria-hidden="true" {...props}>
    <clipPath id="flag-uk-s">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <clipPath id="flag-uk-t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    <g clipPath="url(#flag-uk-s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#flag-uk-t)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
)

export const FlagFR = (props) => (
  <svg viewBox="0 0 3 2" aria-hidden="true" {...props}>
    <rect width="1" height="2" fill="#002654" />
    <rect x="1" width="1" height="2" fill="#fff" />
    <rect x="2" width="1" height="2" fill="#CE1126" />
  </svg>
)

export const FlagKR = (props) => (
  <svg viewBox="-36 -24 72 48" aria-hidden="true" {...props}>
    <rect x="-36" y="-24" width="72" height="48" fill="#fff" />
    <g transform="rotate(-56.3099325)">
      <g id="flag-kr-b2">
        <path id="flag-kr-b" d="M-6-25H6M-6-22H6M-6-19H6" stroke="#000" strokeWidth="2" />
        <use href="#flag-kr-b" y="44" />
      </g>
      <path stroke="#fff" strokeWidth="1" d="M0,17v10" />
      <circle fill="#CD2E3A" r="12" />
      <path fill="#0047A0" d="M0-12A6,6 0 0 0 0,0A6,6 0 0 1 0,12A12,12 0 0,1 0-12Z" />
    </g>
    <g transform="rotate(-123.6900675)">
      <use href="#flag-kr-b2" />
      <path stroke="#fff" strokeWidth="1" d="M0-23.5v3M0,17v3.5M0,23.5v3" />
    </g>
  </svg>
)

export const FLAGS = { en: FlagUK, fr: FlagFR, ko: FlagKR }
