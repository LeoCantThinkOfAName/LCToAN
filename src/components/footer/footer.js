import React, { useContext } from "react"

// context
import { ThemeContext } from "../../context/themContext"

//styles
import footerStyle from "./footer.module.scss"

const links = [
  {
    name: "Github",
    link: "https://github.com/LeoCantThinkOfAName",
    className: "icon-github",
  },
  { name: "Flickr", link: "/", className: "icon-flickr" },
  {
    name: "Invert",
    className: "icon-contrast",
    fn: "setTheme",
  },
  {
    name: "What do you want!?",
    className: "icon-smile",
  },
]

const renderList = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return links.map(item => {
    return (
      <li key={item.name}>
        <a
          href={item.link ? item.link : null}
          className={item.className}
          title={item.name}
          target={item.link ? "_blank" : null}
          rel={item.link ? "noopener" : null}
          onClick={
            item.fn === "setTheme"
              ? () => setTheme(theme === "#fff" ? "#111" : "#fff")
              : null
          }
        />
      </li>
    )
  })
}

const Footer = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <footer
      className={
        theme === "#fff" ? footerStyle.mainFooter : footerStyle.mainFooterDark
      }
    >
      <p>© {new Date().getFullYear()} LCTOAN. All rights reserved.</p>
      <ul className={footerStyle.footerLinks}>{renderList()}</ul>
    </footer>
  )
}

export default Footer
