import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import styled from '@emotion/styled'
// import './blog-list.css'

const PostDiv = styled.div`
    width: 90%;
    maxWidth: 960px;
    margin: 3rem auto;
`

const PostListTitle = styled.h1`
    font-size: 1.3rem;
    font-weight: normal;
    margin-top: 0.25rem;
    line-height: 1.3;
    color: #cb4b16;
`

const PostListDate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    list-style-type: none;
`

const PostListAuthorUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    list-style-type: none;
`

const PostListAuthorLi = styled.li`
    margin: 0 0 -0.5rem -1.3rem;
    list-style-type: none;
`

const PrevNextUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    width: 100%;
    max-width: 960px;
    margin: 1.5rem auto;
`

function BlogPage(props) {
    const postList = props.data.allMarkdownRemark
    const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/blog/' : `/blog/${(currentPage - 1).toString()}`
    const nextPage = `/blog/${(currentPage + 1).toString()}`
    return (
        <Layout>
            <PostDiv>
                {postList.edges.map(({ node }, i) => (
                    <Link to={node.fields.slug} className="link" key={i} style={{ boxShadow: 'none' }}>
                        <div className="post-list" style={{
                            position: 'relative',
                            border: '1px solid gainsboro',
                            padding: '1rem 1rem 0.25rem',
                            boxShadow: '0 -1px 4px #ede7e7',
                            margin: '1rem 0.25rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            color: 'rgba(0, 0, 0, 0.8)',
                            letterSpacing: '0.07em'
                        }}>
                            <PostListDate>on {node.frontmatter.date}</PostListDate>
                            <PostListTitle>{node.frontmatter.title}</PostListTitle>
                            <p>{node.excerpt}</p>
                            <PostListAuthorUl>
                                <PostListAuthorLi>
                                    by {node.frontmatter.author}
                                </PostListAuthorLi>
                            </PostListAuthorUl>
                        </div>
                    </Link>
                ))}
                <PrevNextUl>
                    {!isFirst && (
                        <Link to={prevPage} rel="prev" style={{
                            color: prevPage ? '#cb4b16' : 'rgba(0,0,0,0.8)',
                            marginLeft: '-1rem', boxShadow: 'none', letterSpacing: '0.07em'
                        }}>
                            ← Previous
            </Link>
                    )}
                    {Array.from({ length: numPages }, (_, i) => (
                        <li
                            key={`pagination-number${i + 1}`}
                            style={{
                                margin: 0,
                                marginLeft: '-1rem', listStyleType: 'none'
                            }}
                        >
                            <Link
                                to={`/blog/${i === 0 ? '' : i + 1}`}
                                style={{
                                    color: i + 1 === currentPage ? '#cb4b16' : 'rgba(0,0,0,0.8)',
                                    paddingLeft: '5px', paddingRight: '5px', boxShadow: 'none', paddingBottom: '3px', letterSpacing: '0.07em'
                                }}
                            >
                                {i + 1}
                            </Link>
                        </li>
                    ))}
                    {!isLast && (
                        <Link to={nextPage} rel="next" style={{
                            color: nextPage ? '#cb4b16' : 'rgba(0,0,0,0.8)',
                            marginRight: '0.25rem',
                            boxShadow: 'none', letterSpacing: '0.07em'

                        }}>
                            Next →
            </Link>
                    )}
                </PrevNextUl>
            </PostDiv>
        </Layout >
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
          excerpt(pruneLength:250)
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