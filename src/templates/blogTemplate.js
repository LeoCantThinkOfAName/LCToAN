import React from "react"
import { graphql } from "gatsby"

// components
import SEO from "../components/seo"
import { Link } from "gatsby"

const BlogTemplate = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <>
      <SEO
        title="Home"
        keywords={[
          "LCTOAN.",
          "Leo Can't Think Of A Name",
          ...post.frontmatter.category,
        ]}
      />
      <article>
        <header>
          <h2>{post.frontmatter.title}</h2>
          <div>{post.frontmatter.date}</div>
        </header>
        <main dangerouslySetInnerHTML={{ __html: post.html }} />
        <footer>
          <ul>
            {post.frontmatter.category.map(category => {
              return <li key={category}>{category}</li>
            })}
          </ul>
        </footer>
      </article>
    </>
  )
}

export default BlogTemplate

export const blogQuery = graphql`
  query singlePost($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        title
        description
        path
        category
        date
      }
    }
  }
`
