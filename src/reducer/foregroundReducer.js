import React from "react"

export const ForegroundReducer = (state, action) => {
  switch (action.type) {
    case "change":
      return {
        foreground: state.foreground === 0 ? 1 : 0,
      }
    default:
      throw new Error()
  }
}
