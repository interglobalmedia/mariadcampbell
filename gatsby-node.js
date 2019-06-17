/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const _ = require('lodash')
const {createFilePath} = require(`gatsby-source-filesystem`)

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions
    return new Promise((resolve, reject) => {
        resolve(
            graphql(`
                {
                    allMarkdownRemark(
                        sort: {order: DESC, fields: [frontmatter___date]}
                        limit: 1000
                    ) {
                        edges {
                            node {
                                fields {
                                    slug
                                }
                                frontmatter {
                                    title
                                    author
                                    tags
                                    categories
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
                const blogPostTemplate = path.resolve(
                    './src/templates/blog-post-template.js',
                )
                const blogListTemplate = path.resolve(
                    './src/templates/blog-list-template.js',
                )
                const tagsTemplate = path.resolve(
                    './src/templates/tag-template.js',
                )
                const catsTemplate = path.resolve(
                    './src/templates/category-template.js',
                )
                // Create blog-list pages
                const posts = result.data.allMarkdownRemark.edges
                // All tags
                let allTags = []
                // Iterate through each post pulling all found tags into allTags array
                _.each(posts, edge => {
                    if (_.get(edge, 'node.frontmatter.tags')) {
                        allTags = allTags.concat(edge.node.frontmatter.tags)
                    }
                })
                // Eliminate duplicate tags
                allTags = _.uniq(allTags)

                allTags.forEach(tag => {
                    createPage({
                        path: `/tags/${_.kebabCase(tag)}/`,
                        component: tagsTemplate,
                        context: {
                            tag,
                        },
                    })
                })
                // All Categories
                let allCats = []
                // Iterate through each post pulling all found categories into allCats array
                _.each(posts, edge => {
                    if (_.get(edge, 'node.frontmatter.categories')) {
                        allCats = allCats.concat(
                            edge.node.frontmatter.categories,
                        )
                    }
                })
                // Eliminate duplicate categories
                allCats = _.uniq(allCats)

                allCats.forEach(category => {
                    createPage({
                        path: `/categories/${_.kebabCase(category)}/`,
                        component: catsTemplate,
                        context: {
                            category,
                        },
                    })
                })
                posts.forEach(({node}, index) => {
                    createPage({
                        path: node.fields.slug,
                        component: blogPostTemplate,
                        context: {
                            slug: node.fields.slug,
                            prev: index === 0 ? null : posts[index - 1],
                            next:
                                index === result.length - 1
                                    ? null
                                    : posts[index + 1],
                        }, // additional data can be passed via context
                    })
                })
                // Create blog post list pages
                const postsPerPage = 6
                const numPages = Math.ceil(posts.length / postsPerPage)
                Array.from({length: numPages}).forEach((_, i) => {
                    createPage({
                        path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
                        component: blogListTemplate,
                        context: {
                            limit: postsPerPage,
                            skip: i * postsPerPage,
                            numPages,
                            currentPage: i + 1,
                        },
                    })
                })
                return
            }),
        )
    })
}

exports.onCreateNode = ({node, getNode, actions}) => {
    const {createNodeField} = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({node, getNode, basePath: `pages`})
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

// added for styled components 4+
exports.onCreateWebpackConfig = ({stage, actions}) => {
    if (stage === 'develop') {
        actions.setWebpackConfig({
            devtool: 'cheap-module-source-map',
        })
    }
}
