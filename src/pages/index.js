import React from "react"

// components
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO
      title="Home"
      keywords={[
        "LCTOAN.",
        "Leo Can't Think Of A Name",
        "front-end",
        "web",
        "front-end developer",
        "web developer",
        "react",
        "node.js",
        "website",
      ]}
    />

    <div className="index-quote">
      <blockquote cite="Robert Forest">
        <p className="quote">Nothing gold can stay.</p>
        <p className="quote-author">Robert Forest</p>
      </blockquote>
    </div>
  </>
)

export default IndexPage
