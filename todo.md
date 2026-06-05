# Wix to Gatsby Replacement Checklist

## Content Parity

- [x] Add a `/publications/` page with links to NASA/ADS, InSPIRE/HEP, and Google Scholar.
- [ ] Compare the Wix homepage against the Gatsby homepage and bring over any missing biography/journey material.
- [ ] Expand the homepage news section with the important Wix news items that are still missing.
- [ ] Decide whether Gatsby should keep only recent news on the homepage or add a separate news archive.
- [ ] Check all homepage external links against the Wix site and update stale or inconsistent URLs.
- [ ] Add missing teaching material from Wix, especially teaching philosophy and student supervision.
- [ ] Add any missing teaching links, including course repositories or public course pages.
- [ ] Expand the outreach page with the fuller Wix outreach content.
- [ ] Add outreach dates, venues, images, and press links where useful.
- [ ] Compare the group page against Wix and decide which people should appear in the Gatsby version.
- [ ] Resolve spelling inconsistencies in group/news entries, especially `Ussan Abassi` vs `Ussan Abbassi`.
- [ ] Make Benjamin's profile links consistent across the site.
- [ ] Check whether the Google Scholar ID should be `vksMsj0AAAAJ` or `9n8sXoAAAAAJ`.
- [ ] Review all PDF and image assets currently used by Wix and make sure needed assets exist in Gatsby.

## Site Structure

- [ ] Confirm the final navigation order: Home, Research, Publications, Teaching, Outreach, The Group.
- [ ] Decide whether old Wix URLs need redirects to Gatsby URLs.
- [ ] Add any missing Gatsby pages needed to preserve important Wix routes.
- [ ] Add a proper 404 page.
- [ ] Add page metadata for each route using Gatsby Head or React Helmet.
- [ ] Update `siteMetadata.siteUrl` in `gatsby-config.js` to `https://www.benjissi.com` before launch.
- [ ] Enable and configure `gatsby-plugin-sitemap` before launch.
- [ ] Add or verify `robots.txt`.

## Design And UX

- [ ] Review the Gatsby homepage against Wix for visual completeness.
- [ ] Improve mobile navigation if the extra Publications link makes the header too crowded.
- [ ] Check mobile layouts for all pages.
- [ ] Check desktop layouts for all pages.
- [ ] Make sure images have useful alt text.
- [ ] Replace placeholder images where possible.
- [ ] Fix the favicon source image so it is square.
- [ ] Review color, typography, and spacing for consistency across pages.

## Technical Cleanup

- [ ] Decide whether generated Gatsby build files should live in the repository root or only in `public/`.
- [ ] Clean up stale generated files if they are not part of the deployment strategy.
- [ ] Confirm whether `.DS_Store` files should be removed and ignored.
- [ ] Add or update `.gitignore` for local cache/build artifacts.
- [ ] Remove unused images once the final content is settled.
- [ ] Remove unused components or CSS after the final page structure is stable.
- [ ] Consider replacing `gatsby-plugin-react-helmet` with Gatsby's built-in Head API.
- [ ] Make normal local builds work without writing Gatsby config outside the repo, or document the workaround.

## Deployment

- [ ] Decide final hosting target: GitHub Pages, Netlify, Vercel, or another static host.
- [ ] If using GitHub Pages, add a `CNAME` file containing `www.benjissi.com`.
- [ ] If using GitHub Pages, confirm the deploy branch and `gh-pages -d public` workflow.
- [ ] Test `npm run build` from a clean checkout.
- [ ] Test the production build locally with `gatsby serve`.
- [ ] Confirm all internal links work in the production build.
- [ ] Confirm all image and PDF assets load in the production build.
- [ ] Confirm external profile links open correctly.
- [ ] Set DNS records for `www.benjissi.com` when ready to cut over from Wix.
- [ ] Keep Wix unchanged until the Gatsby deployment has been tested on a preview or temporary URL.
- [ ] After DNS cutover, verify `https://www.benjissi.com/` and every main route.
- [ ] After DNS cutover, verify Google indexing basics: sitemap, robots, canonical URLs, and page titles.

## Final Pre-Launch Pass

- [ ] Proofread all pages.
- [ ] Check names, accents, Korean text, and institution names.
- [ ] Check dates and date ranges.
- [ ] Check publication/profile links one last time.
- [ ] Check contact email and affiliation text.
- [ ] Run a final production build.
- [ ] Commit the completed migration work.
- [ ] Tag or note the launch commit.
