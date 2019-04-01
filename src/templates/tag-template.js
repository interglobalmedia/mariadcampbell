import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import styled from '@emotion/styled'

const TagsDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const TagsH1 = styled.h1`
    display: flex;
    justify-content: flex-start;
    margin: 3rem auto 0; 
    padding-left: 1.5rem; 
    letter-spacing: 0.07em;
`

function Tags(props) {
    const posts = props.data.allMarkdownRemark.edges
    const { tag } = props.pageContext
    return (
        <Layout>
            <TagsH1>{`posts in: ${tag}`}</TagsH1>
            <TagsDiv>
                {
                    posts.map(({ node }, i) =>
                        <Link to={node.fields.slug} style={{ marginBottom: '2rem', listStyleType: 'none', background: '#fdf6e3', color: '#cb4b16', width: '90%', padding: '1rem', textDecoration: 'none', fontSize: '1.1rem', margin: '2rem auto 0', letterSpacing: '0.07em' }}>
                            {node.frontmatter.title}
                        </Link>
                    )
                }
            </TagsDiv>
        </Layout>
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