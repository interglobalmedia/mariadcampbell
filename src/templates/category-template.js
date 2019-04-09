import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import BlogPage from './blog-list-template'
import Layout from '../components/Layout/Layout'

class CategoryTemplate extends Component {
    render() {
        const { pageContext, data } = this.props;
        const { category } = pageContext;
        return (
            <Layout>
                <div className="category-container">
                    <Helmet title={`Posts in category "${category}"`} />
                    <BlogPage postEdges={data.allMarkdownRemark.edges} />
                </div>
            </Layout>
        )
    }
}

export default CategoryTemplate

export const pageQuery = graphql`
    query CategoryPage($category: String) {
        allMarkdownRemark(
            limit: 1000
            filter: {fields: {category: {$eq: $category}}}
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                        category
                    }
                    excerpt
                    timeToRead
                    frontmatter {
                        title
                        tags
                        date
                    }
                }
            }
        }
    }
`
