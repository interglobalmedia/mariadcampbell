import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'

const CategoriesDiv = styled.div`
    width: 90%;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & a {
    margin-bottom: 2rem;
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

function CategoriesPage(props) {
    const data = props.data.allMarkdownRemark.group
    return (
        <Layout>
            <CategoriesDiv>
                {
                    data.map((category, index) => (
                        <Link to={`/categories/${category.fieldValue}`} key={index}>
                            <FontAwesomeIcon icon={faFolder} style={{ color: '#268bd2', marginRight: '0.5rem' }} />
                            {category.fieldValue} {`(${category.totalCount})`}
                        </Link>
                    ))
                }
            </CategoriesDiv>
        </Layout>
    )
}

export default CategoriesPage

export const catQuery = graphql`
    query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`