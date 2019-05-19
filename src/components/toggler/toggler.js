import React from "react"

// styles
import togglerStyle from "./toggler.module.scss"

export default class Toggler extends React.PureComponent {
  render() {
    const { allowChanging, toggleChanging } = this.props

    return (
      <>
        <button
          id="watercolor-toggler"
          className={
            allowChanging ? togglerStyle.toggler : togglerStyle.togglerOff
          }
          onClick={toggleChanging}
        />
        <label htmlFor="watercolor-toggler" className={togglerStyle.label}>
          {allowChanging
            ? "My Computer is burning! Turn off the background!"
            : "I want some random background!"}
        </label>
      </>
    )
  }
}
