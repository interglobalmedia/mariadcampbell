import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import { rhythm } from '../utils/typography'
import './blog-list.css'

function BlogPage(props) {
  const postList = props.data.allMarkdownRemark
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/blog/' : `/blog/${(currentPage - 1).toString()}`
  const nextPage = `/blog/${(currentPage + 1).toString()}`
  return (
    <Layout>
      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} className="link" key={i}>
          <div className="post-list" key={i}>
            <div className="post-list-date">on {node.frontmatter.date}</div>
            <h1 className="post-list-title">{node.frontmatter.title}</h1>
            <p className="post-list-excerpt">{node.excerpt}</p>
            <ul className="post-list-author">
              <li>
                by {node.frontmatter.author}
              </li>
            </ul>
          </div>
        </Link>
      ))}
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          listStyle: 'none',
          padding: 0,
        }}
      >
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
            </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <li
            key={`pagination-number${i + 1}`}
            style={{
              margin: 0,
            }}
          >
            <Link
              to={`/blog/${i === 0 ? '' : i + 1}`}
              style={{
                padding: rhythm(1 / 4),
                textDecoration: 'none',
                color: i + 1 === currentPage ? '#ffffff' : '',
                background: i + 1 === currentPage ? '#007acc' : '',
              }}
            >
              {i + 1}
            </Link>
          </li>
        ))}
        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
            </Link>
        )}
      </ul>
    </Layout>
  )
}

export default BlogPage

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
            date(formatString: "DD MMMM, YYYY")
            title
            author
          }
        }
      }
    }
  }
`