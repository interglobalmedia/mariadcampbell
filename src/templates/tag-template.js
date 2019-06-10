/* eslint-disable no-unused-vars */
import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/Layout/Layout'
import styled from '@emotion/styled'
import {Helmet} from 'react-helmet'
import {TagsCategoriesDiv} from './category-template'

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

const Tags = props => {
    const posts = props.data.allMarkdownRemark.edges
    const {tag} = props.pageContext
    return (
        <Layout>
            <Helmet>
                <title>Tags Page</title>
            </Helmet>
            <TagWrapper>
                <TagsH1>{`posts in: ${tag}`}</TagsH1>
                <TagsCategoriesDiv>
                    {posts.map(({node}, i) => (
                        <Link to={node.fields.slug} key={i}>
                            {node.frontmatter.title}
                        </Link>
                    ))}
                </TagsCategoriesDiv>
            </TagWrapper>
        </Layout>
    )
}

export default Tags

export const pageQuery = graphql`
    query tagsQuery($tag: String!) {
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
