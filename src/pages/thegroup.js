import React from "react"
import { navigate } from "gatsby"

// Legacy route kept so older links keep working.
const LegacyGroupRedirect = () => {
  React.useEffect(() => {
    navigate("/the-group/", { replace: true })
  }, [])
  return null
}

export default LegacyGroupRedirect

export const Head = () => (
  <>
    <title>The Group — Benjamin L&apos;Huillier</title>
    <meta name="robots" content="noindex" />
    <meta httpEquiv="refresh" content="0; url=/the-group/" />
    <link rel="canonical" href="https://www.benjissi.com/the-group/" />
  </>
)
