# benjissi.com

Source of www.benjissi.com, built with [Hugo](https://gohugo.io) (0.152.2) and published by
`.github/workflows/hugo.yml` on every push to `main`. The previous Gatsby version is kept in
the `gatsby-archive` branch.

## Where things are

| What | File |
|---|---|
| News on the homepage (EN / FR / KO) | `data/news.yaml` |
| Papers (list on the Research page, boxes on the label pages); field `labels` | `data/papers.yaml` |
| Label names (EN/FR/KO) and header images | `data/labels.yaml` |
| Text at the top of a label page | `label-intros/<label>.html` (`.fr.html`, `.ko.html`) |
| Group members (cards on the Group page) | `data/members.yaml` |
| Courses at Sejong | `data/courses.yaml` |
| Profile links (icons) | `data/profiles.yaml` |
| Page text | `content/<page>.html`, `content/<page>.fr.html`, `content/<page>.ko.html` |
| Menu and other interface words | `i18n/en.yaml`, `i18n/fr.yaml`, `i18n/ko.yaml` |
| Design | `assets/css/main.css` |
| Images, PDFs | `static/images/` |

Inside page files, `{{< ... >}}` are shortcodes that insert data:
`{{< news >}}`, `{{< paperfilter >}}`, `{{< member id="clea" >}}`,
`{{< courses list="graduate" heading="…" >}}`, `{{< tex math=`\Omega_k` >}}`.

## Images

Put images in `static/images/` and reference them as `/images/name.webp`. Prefer WebP, at most
~1400 px wide (1920 px for full-width backgrounds). `width`/`height` are added automatically
at build time.

## Adding a news item

Add at the top of `data/news.yaml`:

```yaml
- date: 2026-11-15
  en: Invited talk at … <a href="https://…">link</a>.
  fr: Exposé invité à … 
  ko: … 초청 강연.
```

A missing `fr` or `ko` falls back to English.

## Build locally (optional)

```bash
hugo server        # http://localhost:1313
```

## Search engines

`static/robots.txt` allows everything and points to `/sitemap.xml` (index of the EN/FR/KO
sitemaps). `static/sitemap/sitemap-index.xml` keeps the old Gatsby sitemap URL working.
Setting `preview = true` in `hugo.toml` adds `noindex` to every page (for test copies only).
