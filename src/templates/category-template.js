import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/Layout/Layout'
import styled from '@emotion/styled'
import {Helmet} from 'react-helmet'

export const TagCatWrapper = styled.div`
    width: 90%;
    max-width: 1026px;
    margin: 3rem auto;
`

export const TagsCategoriesH1 = styled.h1`
    display: flex;
    justify-content: flex-start;
    margin: 0 auto;
    letter-spacing: 0.07em;
    width: 100%;
`

export const TagsCategoriesDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0.75rem auto 4rem;
    width: 100%;
    & a {
        background: rgb(207, 203, 177);
        width: 100%;
        padding: 1rem;
        font-size: 1.1rem;
        margin: 1.5rem auto 0;
        border-bottom: 1px solid rgb(226, 39, 74);
        & :hover {
            border-bottom: 0;
        }
    }
`

const CategoryTemplate = props => {
    const posts = props.data.allMarkdownRemark.edges
    const {category} = props.pageContext
    return (
        <Layout>
            <Helmet>
                <title>Categories Page</title>
            </Helmet>
            <TagCatWrapper>
                <TagsCategoriesH1>{`posts in category: ${category}`}</TagsCategoriesH1>
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

export default CategoryTemplate

export const pageQuery = graphql`
    query catsQuery($category: String!) {
        allMarkdownRemark(
            limit: 2000
            sort: {fields: [frontmatter___date], order: DESC}
            filter: {frontmatter: {categories: {eq: $category}}}
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
                        categories
                    }
                }
            }
        }
    }
`
