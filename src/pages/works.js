import React from "react"
import { graphql } from "gatsby"

// components
import SEO from "../components/seo"

import WorksItem from "../components/works/worksItem"

const WorksPage = ({ data }) => {
  return (
    <>
      <SEO
        title="Works"
        keywords={[
          "LCTOAN.",
          "Leo Can't Think Of A Name",
          "front-end",
          "web",
          "front-end developer",
          "web developer",
          "react",
          "node.js",
          "website",
          "work",
          "portfolio",
        ]}
      />
      {data.allMarkdownRemark.edges.map(work => {
        return <WorksItem key={work.node.id} data={work.node} />
      })}
    </>
  )
}

export const worksQuery = graphql`
  {
    allMarkdownRemark(filter: { collection: { eq: "works" } }) {
      edges {
        node {
          id
          frontmatter {
            id
            title
            titleEn
            url
            date
            caption
            captionEn
            cover {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            snapshots {
              childImageSharp {
                fluid(maxWidth: 1280) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default WorksPage
