/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const _ = require('lodash')
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  return new Promise((resolve, reject) => {
    resolve(graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
              fields {
                  slug
              }
            frontmatter {
              title,
              author
              tags
            }
          }
        }
      }
    }
  `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        return reject(result.errors)
      }
      const posts = result.data.allMarkdownRemark.edges

      const blogTemplate = path.resolve('./src/templates/blog-post.js')
      const tagsTemplate = path.resolve('./src/templates/tag-template.js')

      // All tags
      let allTags = []
      // Iterate through each post pulling all found tags into allTags array
      _.each(posts, edge => {
        if (_.get(edge, "node.frontmatter.tags")) {
          allTags = allTags.concat(edge.node.frontmatter.tags)
        }
      })
      // Eliminate duplicate tags
      allTags = _.uniq(allTags)
      allTags.forEach((tag => {
        createPage({
          path: `/tags/${_.kebabCase(tag)}/`,
          component: tagsTemplate,
          context: {
            tag,
          }
        })
      }),
        posts.forEach(({ node }, index) => {
          createPage({
            path: node.fields.slug,
            component: blogTemplate,
            context: {
              slug: node.fields.slug,
              prev: index === 0 ? null : posts[index - 1],
              next: index === result.length - 1 ? null : posts[index + 1],
            }, // additional data can be passed via context
          })
        }))
    })
    )
  })
}


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}