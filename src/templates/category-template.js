import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'

function CategoryTemplate(props) {
    const posts = props.data.allMarkdownRemark.edges
    const { category } = props.pageContext
    return (
        <Layout>
            <div className="category-container">
                <span>{`Posts in category ${category}`}</span>
                <div>
                    {
                        posts.map(({ node }, i) =>
                            <Link to={node.fields.slug} key={i}>
                                {node.frontmatter.title}
                            </Link>
                        )
                    }
                </div>
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
