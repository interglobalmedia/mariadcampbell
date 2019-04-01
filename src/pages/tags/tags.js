import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faTag } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'
import './tags.css'

const TagsDiv = styled.div`
  width: 90%;
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

function TagsPage(props) {
  const data = props.data.allMarkdownRemark.group
  return (
    <Layout>
      <TagsDiv>
        <p className="tags-title"><FontAwesomeIcon icon={faHashtag} style={{ width: '36px', height: '36px' }} /></p>
        {
          data.map(tag => (
            <Link to={`/tags/${tag.fieldValue}`} style={{
              marginBottom: '2rem',
              listStyleType: 'none', background: '#fdf6e3', color: '#cb4b16', width: '100%', padding: '1rem', textDecoration: 'none', fontSize: '1.1rem', letterSpacing: '0.07em'
            }}>
              <FontAwesomeIcon icon={faTag} style={{ color: '#268bd2' }} /> {tag.fieldValue} {`(${tag.totalCount})`}
            </Link>
          ))
        }
      </TagsDiv>
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

