import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'

const BlogList = () => {
  const posts = this.props.data.allMarkdownRemark.edges
  return (
    <Layout>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return <div key={node.fields.slug}>{title}</div>
      })}
    </Layout>
  )
}

export default BlogList

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }`