/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

// context
import { ContextProvider } from "../context/contextComposer"

// components
import Background from "./background/background"
import Watercolor from "./watercolor/watercolor"
import Header from "./header/header"
import Footer from "./footer/footer"
import Toggler from "./toggler/toggler"
import MainContent from "./mainContent/mainContext"

// styles
import "./layout.scss"
import layoutStyle from "./layout.module.scss"

export default class Layout extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      foreground: 2,
      allowChanging: true,
      theme: "white",
    }

    this.toggleChanging = this.toggleChanging.bind(this)
  }

  componentDidMount() {
    this.setState({
      foreground: 0,
    })
  }

  componentDidUpdate(prevProp, prevState) {
    if (
      prevState.foreground === this.state.foreground &&
      this.state.allowChanging
    ) {
      this.setState({
        foreground: this.state.foreground === 0 ? 1 : 0,
      })
    }
  }

  toggleChanging() {
    this.setState({
      allowChanging: this.state.allowChanging ? false : true,
    })
  }

  render() {
    const { foreground, allowChanging } = this.state
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <ContextProvider>
            <div className={layoutStyle.wrapper}>
              <Background />
              <Header siteTitle={data.site.siteMetadata.title} />
              <Watercolor foreground={foreground} />
              <Toggler
                toggleChanging={this.toggleChanging}
                allowChanging={allowChanging}
              />
              <MainContent
                children={this.props.children}
                location={this.props.location}
              />
              <Footer />
            </div>
          </ContextProvider>
        )}
      />
    )
  }
}
