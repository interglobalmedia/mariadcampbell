import React, { Component } from 'react'
import Helmt from 'r4eact-helmet'
import { graphql } from 'gatsby'
import BlogPage from './blog-list-template'

class CategoryTemplate extends Component {
    render() {
        const { pageContext, data } = this.props;
        const { category } = pageContext;
        return (
            <div className="category-container">
                <Helmet title={`Posts in category "${category}"`} />
                <BlogPage postEdges={data.allMarkdownRemark.edges} />
            </div>
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
