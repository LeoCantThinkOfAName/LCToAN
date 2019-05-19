import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// components
import Navbar from "../navbar/navbar"

// styles
import headerStyle from "./header.module.scss"

// assets
import Logo from "../logo/logo"

const Header = ({ siteTitle }) => {
  return (
    <header className={headerStyle.header}>
      <Logo />
      <Navbar />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
