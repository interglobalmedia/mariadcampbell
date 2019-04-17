import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import styled from '@emotion/styled'

const CategoriesH1 = styled.h1`
    display: flex;
    justify-content: flex-start;
    margin: 0 auto; 
    letter-spacing: 0.07em;
    width: 100%;
`

const CategoriesDiv = styled.div`
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

function CategoryTemplate(props) {
    const posts = props.data.allMarkdownRemark.edges
    const { category } = props.pageContext
    return (
        <Layout>
            <div style={{ width: '90%', maxWidth: '1026px', margin: '3rem auto' }}>
                <CategoriesH1>{`posts in category: ${category}`}</CategoriesH1>
                <CategoriesDiv>
                    {
                        posts.map(({ node }, i) =>
                            <Link to={node.fields.slug} key={i}>
                                {node.frontmatter.title}
                            </Link>
                        )
                    }
                </CategoriesDiv>
            </div>

        </Layout>
    )

}

export default CategoryTemplate

export const pageQuery = graphql`
    query CatsQuery($category: String!) {
    allMarkdownRemark(
        limit: 2000
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { categories: { eq: $category } }}
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
