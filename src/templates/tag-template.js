import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import styled from '@emotion/styled'

const TagsH1 = styled.h1`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto; 
    letter-spacing: 0.07em;
    width: 100%;
    max-width: 960px;
    @media (max-width: 599px) {
        width: 100%;
        display: flex;
        justifyContent: flex-start;
    }
`

const TagsDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.75rem auto 4rem;
    width: 100%;
    & a {
        margin-bottom: 2rem; 
        list-style-type: none; 
        background: #fdf6e3; 
        color: #cb4b16; 
        width: 100%;
        max-width: 960px; 
        padding: 1rem; 
        text-decoration: none; 
        font-size: 1.1rem; 
        margin: 2rem auto 0; 
        letter-spacing: 0.07em;
    }
`

function Tags(props) {
    const posts = props.data.allMarkdownRemark.edges
    const { tag } = props.pageContext
    return (
        <Layout>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '90%', maxWidth: '960px', margin: '0 auto' }}>
                <TagsH1 >{`posts in: ${tag}`}</TagsH1>
                <TagsDiv>
                    {
                        posts.map(({ node }, i) =>
                            <Link to={node.fields.slug} key={i}>
                                {node.frontmatter.title}
                            </Link>
                        )
                    }
                </TagsDiv>
            </div>
        </Layout >
    )
}

export default Tags

export const query = graphql`
query TagsQuery($tag: String!) {
    allMarkdownRemark(
        limit: 2000
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { tags: { eq: $tag } }}
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