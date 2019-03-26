import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import './tags.css'

function TagsPage(props) {
  const data = props.data.allMarkdownRemark.group
  return (
    <Layout>
      <div className="tags">
        <p className="tags-title"><FontAwesomeIcon icon={faHashtag} /></p>
        {
          data.map(tag => (
            <Link to={`/tags/${tag.fieldValue}`}>
              {tag.fieldValue} {`(${tag.totalCount})`}
            </Link>
          ))
        }
      </div>
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

