import React, { useContext } from "react"

// context
import { ThemeContext } from "../../context/themContext"

// components
import Transition from "../transition/transition"

const MainContent = ({ location, children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <main className={theme === "#fff" ? "main-content" : "main-content-dark"}>
      <Transition location={location}>{children}</Transition>
    </main>
  )
}

export default MainContent
