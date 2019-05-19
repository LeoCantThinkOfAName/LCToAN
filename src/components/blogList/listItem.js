import React, { useContext } from "react"
// components
import { Link } from "gatsby"

// styles
import listItemStyle from "./listItem.module.scss"

const ListItem = props => {
  const { title, description, path, category, date } = props

  return (
    <>
      <article className={listItemStyle.articleListItem}>
        <h2>{title}</h2>
        <span>{date}</span>
        <p>{description}</p>
        <Link to={`/blog/${path}`} className={listItemStyle.keepReading}>
          Keep Reading...
        </Link>
      </article>
      <hr className="seperator" />
    </>
  )
}

export default ListItem
