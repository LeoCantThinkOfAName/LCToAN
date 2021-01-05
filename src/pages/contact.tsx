import { graphql, useStaticQuery } from "gatsby"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import React from "react"

import { SiteMetaQuery } from "../../generated/graphql-type"
import ContactIcon from "../components/ContactIcon"
import SEO from "../components/SEO"
import { StyledList } from "../components/Styled"
import TransitionContainer from "../components/TransitionContainer"

const ContactPage = () => {
  const intl = useIntl()
  const {
    site: {
      siteMetadata: { social },
    },
  } = useStaticQuery<SiteMetaQuery>(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              type
              title
              url
              icon
            }
          }
        }
      }
    `
  )

  return (
    <TransitionContainer>
      <SEO
        title={intl.formatMessage({ id: "meta.title.ContactPage" })}
        description={intl.formatMessage({ id: "meta.description.ContactPage" })}
      />
      <div>
        <p>
          <FormattedMessage id="Contact-via" />
        </p>
        <StyledList>
          {social &&
            social.map((item, index) => {
              if (item) {
                return (
                  <li key={index}>
                    <ContactIcon
                      href={item.url || ""}
                      target={item.type === "external-link" ? "_blank" : ""}
                      rel={
                        item.type === "external-link"
                          ? "noopener noreferrer"
                          : ""
                      }
                      icon={item.icon || ""}
                      title={item.title || ""}
                    />
                  </li>
                )
              } else {
                return null
              }
            })}
        </StyledList>
      </div>
    </TransitionContainer>
  )
}

export default ContactPage
