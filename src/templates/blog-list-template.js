import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import styled from '@emotion/styled'

const PostDiv = styled.div`
    width: 90%;
    maxWidth: 960px;
    margin: 3rem auto;
    & a {
        box-shadow: none;
    }
`

const PostListDiv = styled.div`
    position: relative;
    border: 1px solid gainsboro;
    padding: 1rem 1rem 0.25rem;
    box-shadow: 0 -1px 4px #ede7e7;
    margin: 1rem 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: rgba(0, 0, 0, 0.8);
    letter-spacing: 0.07em;
    &:hover {
        background-color: whitesmoke;
    }
`

const PostListTitle = styled.h1`
    font-size: 1.3rem;
    font-weight: normal;
    margin-top: 0.25rem;
    line-height: 1.3;
    color: #cb4b16;
    & :hover {
        text-decoration: underline;
    }
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
    margin: 1.5rem auto;
    & a:hover {
        text-decoration: underline;
    }
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
                    <Link to={node.fields.slug} key={i}>
                        <PostListDiv>
                            <PostListDate>on {node.frontmatter.date}</PostListDate>
                            <PostListTitle>{node.frontmatter.title}</PostListTitle>
                            <p>{node.excerpt}</p>
                            <PostListAuthorUl>
                                <PostListAuthorLi>
                                    by {node.frontmatter.author}
                                </PostListAuthorLi>
                            </PostListAuthorUl>
                        </PostListDiv>
                    </Link>
                ))}
                <PrevNextUl>
                    {!isFirst && (
                        <Link to={prevPage} rel="prev" style={{
                            color: prevPage ? '#cb4b16' : 'rgba(0,0,0,0.8)',
                            boxShadow: 'none', letterSpacing: '0.07em', marginLeft: '-1rem'
                        }}>
                            ← Previous
                        </Link>
                    )}
                    {Array.from({ length: numPages }, (_, i) => (
                        <li
                            key={`pagination-number${i + 1}`}
                            style={{
                                margin: 0,
                                listStyleType: 'none', marginLeft: '-1rem'
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