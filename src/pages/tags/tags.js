import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import { OutboundLink } from 'gatsby-plugin-gtag'

const TagsDiv = styled.div`
  width: 90%;
  max-width: 960px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & a {
    margin-bottom: 1.5rem;
    list-style-type: none; 
    background: #fdf6e3;
    color: #cb4b16; 
    width: 100%; 
    padding: 1rem; 
    tex-decoration: none; 
    font-size: 1.1rem; 
    letter-spacing: 0.07em;
  }
`

function TagsPage(props) {
  const data = props.data.allMarkdownRemark.group
  return (
    <Layout>
      <Helmet>
        <meta charset="utf-8" />
        <title>Tags Page</title>
        <Link rel="canonical" href="https://www.mariadcampbell.com/tags/tags" />
        <OutboundLink href="https://www.mariadcampbell.com/tags/tags/">Check out Maria D. Campbell's developer notebook tags page!</OutboundLink>
      </Helmet>
      <TagsDiv>
        {
          data.map((tag, i) => (
            <Link to={`/tags/${tag.fieldValue}`} key={i}>
              <FontAwesomeIcon icon={faTag} style={{ color: '#268bd2' }} /> {tag.fieldValue} {`(${tag.totalCount})`}
            </Link>
          ))
        }
      </TagsDiv>
    </Layout >
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

