import React, { useContext } from "react"

// context
import { ThemeContext } from "../../context/themContext"

// components
import { Link } from "gatsby"

// styles
import navStyle from "./navbar.module.scss"

const navs = [
  { title: "About", path: "/about", description: "Who is LCTOAN." },
  { title: "Works", path: "/works", description: "Check out my works!" },
  {
    title: "Blog",
    path: "/blog",
    description: "Read some more useless articles",
  },
  { title: "Contact", path: "/contact", description: "Call me :D" },
]

const renderList = () => {
  return navs.map(item => {
    return (
      <li key={item.title}>
        <Link to={item.path} title={item.description}>
          {item.title}
        </Link>
        <span />
      </li>
    )
  })
}

const Navbar = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <nav className={theme === "#fff" ? navStyle.mainNav : navStyle.mainNavDark}>
      <ul>{renderList()}</ul>
    </nav>
  )
}

export default Navbar
