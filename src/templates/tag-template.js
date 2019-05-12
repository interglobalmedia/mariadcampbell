/* eslint-disable no-unused-vars */
import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/Layout/Layout'
import styled from '@emotion/styled'
import {Helmet} from 'react-helmet'
import SEO from '../components/Seo/Seo'

const TagWrapper = styled.div`
    width: 90%;
    max-width: 1026px;
    margin: 3rem auto;
`

export const TagsH1 = styled.h1`
    display: flex;
    justify-content: flex-start;
    margin: 0 auto;
    letter-spacing: 0.07em;
    width: 100%;
`

export const TagsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0.75rem auto 4rem;
    width: 100%;
    & a {
        list-style-type: none;
        background: #fdf6e3;
        color: #cb4b16;
        width: 100%;
        padding: 1rem;
        text-decoration: none;
        font-size: 1.1rem;
        margin: 1.5rem auto 0;
        letter-spacing: 0.07em;
    }
`

const Tags = props => {
    const posts = props.data.allMarkdownRemark.edges
    const {tag} = props.pageContext
    const {data} = props
    const siteTitle = data.site.siteMetadata.siteTitle
    const keywords = data.site.siteMetadata.keywords
    return (
        <Layout>
            <SEO
                location={props.location}
                title={siteTitle}
                keywords={keywords}
            />
            <Helmet>
                <title>Tags Page</title>
            </Helmet>
            <TagWrapper>
                <TagsH1>{`posts in: ${tag}`}</TagsH1>
                <TagsDiv>
                    {posts.map(({node}, i) => (
                        <Link to={node.fields.slug} key={i}>
                            {node.frontmatter.title}
                        </Link>
                    ))}
                </TagsDiv>
            </TagWrapper>
        </Layout>
    )
}

export default Tags

export const query = graphql`
    query TagsQuery($tag: String!) {
        allMarkdownRemark(
            limit: 2000
            sort: {fields: [frontmatter___date], order: DESC}
            filter: {frontmatter: {tags: {eq: $tag}}}
        ) {
            edges {
                node {
                    frontmatter {
                        title
                    }
                    fields {
                        slug
                    }
                    frontmatter {
                        tags
                    }
                }
            }
        }
    }
`
