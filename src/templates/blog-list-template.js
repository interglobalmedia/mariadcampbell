import React from 'react'
import {Link, graphql} from 'gatsby'
import {rhythm} from '../utils/typography'
import Layout from '../components/Layout/Layout'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import {Helmet} from 'react-helmet'
import {OutboundLink} from 'gatsby-plugin-gtag'

export const PostDiv = styled.div`
    width: 90%;
    max-width: 1026px;
    margin: 3rem auto;
    & a {
        box-shadow: none;
    }
`

export const PostListDiv = styled.div`
    position: relative;
    border: 1px solid gainsboro;
    padding: 1rem 1rem 0;
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

export const PostListTitle = styled.h1`
    font-size: 1.3rem;
    font-weight: normal;
    margin-bottom: 0.25rem;
    line-height: 1.3;
    color: #cb4b16;
    & :hover {
        text-decoration: underline;
    }
`

export const ExcerptWrapUl = styled.ul`
    display: flex;
    flex-direction: column;
    margin-left: 0;
    & li {
        list-style-type: none;
    }
    & img {
        padding-right: ${rhythm(1 / 2)};
        padding-top: ${rhythm(1 / 2)};
    }
    @media (min-width: 600px) {
        flex-direction: row;
        align-items: flex-start;
        & li:nth-of-type(2) {
            padding-top: ${rhythm(1 / 2)};
        }
    }
`

export const PostListMetaDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
`

export const PrevNextUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    width: 100%;
    max-width: 960px;
    margin: 1.5rem auto;
    & a:hover {
        text-decoration: underline;
    }
`

const BlogPage = props => {
    const postList = props.data.allMarkdownRemark
    const {currentPage, numPages} = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
        currentPage - 1 === 1
            ? '/blog/'
            : `/blog/${(currentPage - 1).toString()}`
    const nextPage = `/blog/${(currentPage + 1).toString()}`
    return (
        <Layout>
            <Helmet>
                <meta charset="utf-8" />
                <title>Blog Page</title>
                <Link
                    rel="canonical"
                    href="https://www.mariadcampbell.com/blog"
                />
                <OutboundLink href="https://www.mariadcampbell.com/blog/">
                    Check out Maria D. Campbell's developer notebook blog list
                    page!
                </OutboundLink>
            </Helmet>
            <PostDiv>
                {postList.edges.map(({node}, i) => (
                    <Link to={node.fields.slug} key={i}>
                        <PostListDiv>
                            <PostListTitle>
                                {node.frontmatter.title}
                            </PostListTitle>
                            <PostListMetaDiv>
                                by {node.frontmatter.author} on{' '}
                                {node.frontmatter.date}
                            </PostListMetaDiv>
                            <ExcerptWrapUl>
                                <li>
                                    <Img
                                        fixed={
                                            node.frontmatter.image
                                                .childImageSharp.fixed
                                        }
                                    />
                                </li>
                                <li>{node.excerpt}</li>
                            </ExcerptWrapUl>
                        </PostListDiv>
                    </Link>
                ))}
                <PrevNextUl>
                    {!isFirst && (
                        <Link
                            to={prevPage}
                            rel="prev"
                            style={{
                                color: prevPage ? '#cb4b16' : 'rgba(0,0,0,0.8)',
                                boxShadow: 'none',
                                letterSpacing: '0.07em',
                                marginLeft: '-1rem',
                            }}
                        >
                            ← Newer
                        </Link>
                    )}
                    {!isLast && (
                        <Link
                            to={nextPage}
                            rel="next"
                            style={{
                                color: nextPage ? '#cb4b16' : 'rgba(0,0,0,0.8)',
                                boxShadow: 'none',
                                letterSpacing: '0.07em',
                            }}
                        >
                            Older →
                        </Link>
                    )}
                </PrevNextUl>
            </PostDiv>
        </Layout>
    )
}

export default BlogPage

export const blogListQuery = graphql`
    query blogListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    excerpt(pruneLength: 150)
                    frontmatter {
                        date(formatString: "DD MMMM, YYYY")
                        title
                        author
                        image {
                            childImageSharp {
                                fixed(width: 200) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
