import React from "react"

const ext = { target: "_blank", rel: "noopener noreferrer" }

// The homepage shows the latest NEWS_PREVIEW items; the button reveals the rest.
// Older items stay in the HTML (just hidden), so search engines still index them.
const NEWS_PREVIEW = 8

const strings = {
  en: {
    press: "Press releases in Korean:",
    linkedin: "View the post on LinkedIn →",
    embedTitle: "Embedded LinkedIn post",
    fewer: "Show fewer",
    all: (n) => `Show all news (${n})`,
  },
  fr: {
    press: "Communiqués de presse en coréen :",
    linkedin: "Voir la publication sur LinkedIn →",
    embedTitle: "Publication LinkedIn intégrée",
    fewer: "Afficher moins",
    all: (n) => `Toutes les actualités (${n})`,
  },
  ko: {
    press: "국내 언론 보도:",
    linkedin: "LinkedIn에서 게시물 보기 →",
    embedTitle: "LinkedIn 게시물",
    fewer: "접기",
    all: (n) => `소식 전체 보기 (${n})`,
  },
}

const NewsList = ({ items, lang = "en" }) => {
  const [all, setAll] = React.useState(false)
  const t = strings[lang] || strings.en
  return (
    <>
      <ul className="news-list">
        {items.map((item, i) => (
          <li key={`${item.date}-${i}`} className={!all && i >= NEWS_PREVIEW ? "is-collapsed" : undefined}>
            <span className="news-date">{item.date}</span>
            <p className="news-body">{(lang !== "en" && item[lang]) || item.body}</p>
            {item.press && (
              <p className="press-links">
                {t.press}{" "}
                {item.press.map(([label, href], j) => (
                  <React.Fragment key={href + label}>
                    {j > 0 && " · "}
                    <a href={href} {...ext}>{label}</a>
                  </React.Fragment>
                ))}
              </p>
            )}
            {item.embed && (
              <div className="news-embed">
                <iframe
                  src={item.embed}
                  height={(item.embedHeights || [800])[0]}
                  style={Object.fromEntries(
                    (item.embedHeights || []).map((h, k) => [`--h${k}`, `${h}px`])
                  )}
                  width="504"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                  title={t.embedTitle}
                />
                {/* Content blockers often hide LinkedIn frames; this link always shows. */}
                <p className="press-links">
                  <a href={item.embed.replace("/embed/", "/")} {...ext}>
                    {t.linkedin}
                  </a>
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
      {items.length > NEWS_PREVIEW && (
        <div className="news-archive-toggle">
          <button className="btn" type="button" onClick={() => setAll((v) => !v)}>
            {all ? t.fewer : t.all(items.length)}
          </button>
        </div>
      )}
    </>
  )
}

export default NewsList
