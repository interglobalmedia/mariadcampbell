import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'

function Categories(props) {
    const data = props.data.allMarkdownRemark.group
    return (
        <Layout>
            <div>
                {
                    data.map((category, index) => {
                        <Link to={`/categories/${category.fieldValue}`} key={index}>
                            <FontAwesomeIcon icon={faFolder} style={{ color: '#268bd2' }} />
                            {category.fieldValue} {`(${category.totalCount})`}
                        </Link>
                    })
                }
            </div>
        </Layout>
    )
}

export default Categories

export const pageQuery = graphql`
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