import React from "react"
import { graphql } from "gatsby"

// components
import SEO from "../components/seo"
import ListItem from "../components/blogList/listItem"
import Navigator from "../components/navigator/navigator"

const IndexPage = ({ data, pageContext }) => {
  const { allMarkdownRemark: posts } = data
  return (
    <>
      <SEO
        title="Blog"
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
          "blog",
        ]}
      />
      {posts.edges.map(post => {
        return (
          <ListItem
            {...post.node.frontmatter}
            key={post.node.frontmatter.title}
          />
        )
      })}
      <Navigator pageContext={pageContext} />
    </>
  )
}

export default IndexPage

export const blogQuery = graphql`
  query blogList($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(/blog)/.*.md$/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            path
            category
            date
          }
        }
      }
    }
  }
`
