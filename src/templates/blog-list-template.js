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
            <ul className="prev-next"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    listStyle: 'none',
                    padding: '0'
                }}
            >
                {!isFirst && (
                    <Link to={prevPage} rel="prev" style={{
                        color: prevPage ? '#cb4b16' : 'rgba(0,0,0,0.8)',
                        background: prevPage ? '#fff' : '', marginLeft: '-1rem',
                    }}>
                        ← Previous
            </Link>
                )}
                {Array.from({ length: numPages }, (_, i) => (
                    <li
                        key={`pagination-number${i + 1}`}
                        style={{
                            margin: 0,
                            marginLeft: '-1rem'
                        }}
                    >
                        <Link
                            to={`/blog/${i === 0 ? '' : i + 1}`}
                            style={{
                                color: i + 1 === currentPage ? '#cb4b16' : 'rgba(0,0,0,0.8)',
                                background: i + 1 === currentPage ? '#fff' : '',
                                // boxShadow: '1px 2px 2px rgba(0,0,0,0.3)'
                            }}
                        >
                            {i + 1}
                        </Link>
                    </li>
                ))}
                {!isLast && (
                    <Link to={nextPage} rel="next" style={{
                        color: nextPage ? '#cb4b16' : 'rgba(0,0,0,0.8)',
                        background: nextPage ? '#fff' : '',
                        marginRight: '0.25rem',

                    }}>
                        Next →
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