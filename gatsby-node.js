/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "MarkdownRemark") {
    const { createNodeField } = actions
    node.collection = getNode(node.parent).sourceInstanceName
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("src/templates/blogTemplate.js")
  const blogListTemplate = path.resolve("src/templates/blogListTemplate.js")

  return graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(/blog)/.*.md$/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              description
              date
              path
              category
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    // create blog list page
    const posts = res.data.allMarkdownRemark.edges
    const postsPerPage = 10
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? "/blog" : `/blog/${index + 1}`,
        component: blogListTemplate,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
        },
      })
    })

    // create single blog page
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const path = node.frontmatter.path
      const title = node.frontmatter.title
      createPage({
        path: `/blog/${path}`,
        component: blogTemplate,
        context: {
          title,
        },
      })
    })
  })
}
