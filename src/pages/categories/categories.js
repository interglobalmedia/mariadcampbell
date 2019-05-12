import React from 'react'
import {Link, graphql} from 'gatsby'
import {Helmet} from 'react-helmet'
import Layout from '../../components/Layout/Layout'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFolder} from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'
import SEO from '../../components/Seo/Seo'

export const CategoriesDiv = styled.div`
    width: 90%;
    max-width: 1026px;
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

const CategoriesPage = props => {
    const data = props.data.allMarkdownRemark.group
    const siteTitle = data.site.siteMetadata.siteTitle
    const keywords = data.site.siteMetadata.keywords
    return (
        <Layout>
            <SEO
                location={props.location}
                title={siteTitle}
                keywords={keywords}
            />
            <Helmet>
                <title>Categories Page</title>
            </Helmet>
            <CategoriesDiv>
                {data.map((category, i) => (
                    <Link to={`/categories/${category.fieldValue}`} key={i}>
                        <FontAwesomeIcon
                            icon={faFolder}
                            style={{
                                color: '#268bd2',
                                marginRight: '0.5rem',
                            }}
                        />
                        {category.fieldValue} {`(${category.totalCount})`}
                    </Link>
                ))}
            </CategoriesDiv>
        </Layout>
    )
}

export default CategoriesPage

export const catQuery = graphql`
    query {
        site {
            siteMetadata {
                siteTitle
            }
        }
        allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___categories) {
                fieldValue
                totalCount
            }
        }
    }
`
