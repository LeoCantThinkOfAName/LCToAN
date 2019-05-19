import React from "react"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="Oops!" />
    <div className="index-quote">
      <div>
        <p className="quote">404, Nothing you can see.</p>
        <p className="quote-author">You have hitted an empty route!</p>
      </div>
    </div>
  </>
)

export default NotFoundPage
