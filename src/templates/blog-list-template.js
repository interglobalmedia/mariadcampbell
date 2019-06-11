import React from 'react'
import {Link, graphql} from 'gatsby'
import {rhythm} from '../utils/typography'
import Layout from '../components/Layout/Layout'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import SEO from '../components/Seo/Seo'

export const PostDiv = styled.div`
    width: 90%;
    max-width: 1026px;
    margin: 3rem auto;
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
    color: rgba(25, 13, 8);
    letter-spacing: 0.07em;
    &:hover {
        background-color: rgb(207, 203, 177);
    }
`

export const PostListTitle = styled.h1`
    font-size: 1.3rem;
    font-weight: normal;
    margin-bottom: 0.25rem;
    line-height: 1.3;
    color: rgb(226, 39, 74);
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
    justify-content: space-between;
    width: 100%;
    max-width: 1026px;
    margin: 1.5rem auto;
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
    const {data} = props
    const title = data.site.siteMetadata.title
    const keywords = data.site.siteMetadata.keywords
    return (
        <Layout>
            <SEO location={props.location} title={title} keywords={keywords} />
            <PostDiv>
                {postList.edges.map(({node}, i) => (
                    <PostListDiv key={i}>
                        <Link
                            to={node.fields.slug}
                            title={`visit link to the post entitled "${
                                node.frontmatter.title
                            }" to read more`}
                        >
                            <PostListTitle>
                                {node.frontmatter.title}
                            </PostListTitle>
                        </Link>
                        <PostListMetaDiv>
                            by {node.frontmatter.author} on{' '}
                            {node.frontmatter.date}
                        </PostListMetaDiv>
                        <ExcerptWrapUl>
                            <li>
                                <Img
                                    fixed={
                                        node.frontmatter.image.childImageSharp
                                            .fixed
                                    }
                                />
                            </li>
                            <li>{node.excerpt}</li>
                        </ExcerptWrapUl>
                    </PostListDiv>
                ))}
                <PrevNextUl>
                    {!isFirst && (
                        <Link
                            to={prevPage}
                            rel="prev"
                            style={{
                                color: prevPage
                                    ? 'rgb(226,39,74)'
                                    : 'rgba(0,0,0,0.8)',
                                boxShadow: 'none',
                                letterSpacing: '0.07em',
                                marginLeft: '0.25rem',
                            }}
                            title={`visit link to newer posts to read more recent content`}
                        >
                            ← Newer
                        </Link>
                    )}
                    {!isLast && (
                        <Link
                            to={nextPage}
                            rel="next"
                            style={{
                                color: nextPage
                                    ? 'rgb(226,39,74)'
                                    : 'rgba(0,0,0,0.8)',
                                boxShadow: 'none',
                                letterSpacing: '0.07em',
                                marginLeft: '0.5rem',
                            }}
                            title={`visit link to older posts to read older content`}
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
        site {
            siteMetadata {
                title
            }
        }
    }
`
