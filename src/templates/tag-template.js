/* eslint-disable no-unused-vars */
import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/Layout/Layout'
import styled from '@emotion/styled'
import {Helmet} from 'react-helmet'
import {
    TagsCategoriesDiv,
    TagCatWrapper,
    TagsCategoriesH1,
} from './category-template'

const Tags = props => {
    const posts = props.data.allMarkdownRemark.edges
    const {tag} = props.pageContext
    return (
        <Layout>
            <Helmet>
                <title>Tags Page</title>
            </Helmet>
            <TagCatWrapper>
                <TagsCategoriesH1>{`posts in: ${tag}`}</TagsCategoriesH1>
                <TagsCategoriesDiv>
                    {posts.map(({node}, i) => (
                        <Link to={node.fields.slug} key={i}>
                            {node.frontmatter.title}
                        </Link>
                    ))}
                </TagsCategoriesDiv>
            </TagCatWrapper>
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
