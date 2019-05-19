import React from "react"

// components
import { Link } from "gatsby"

// styles
import navigatorStyle from "./navigator.module.scss"

const Navigator = ({ pageContext }) => {
  const current = pageContext.currentPage
  const older = current + 1
  const newer = current - 1 <= 1 ? "" : current - 1
  const isLast = pageContext.numPages === current

  console.log(current)

  return (
    <div className={navigatorStyle.navigator}>
      <Link
        to={`blog/${older}`}
        className={isLast ? navigatorStyle.linkDisabled : navigatorStyle.link}
      >
        <span className={navigatorStyle.text}>Older Posts</span>
      </Link>
      <div className={navigatorStyle.page}>
        <div>Page {current}</div>
      </div>
      <Link
        to={`blog/${newer}`}
        className={
          current === 1 ? navigatorStyle.linkDisabled : navigatorStyle.link
        }
      >
        <span className={navigatorStyle.text}>Newer Posts</span>
      </Link>
    </div>
  )
}

export default Navigator
