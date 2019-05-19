import React, { useContext, useEffect } from "react"

// context
import { ThemeContext } from "../../context/themContext"

const Background = () => {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    console.log(theme)
  })

  return (
    <div
      style={{
        background: theme,
        height: "100%",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        transition: "0.5s ease-in-out",
      }}
    />
  )
}

export default Background
