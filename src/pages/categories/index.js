import React from 'react'
import {Link, graphql} from 'gatsby'
import {Helmet} from 'react-helmet'
import Layout from '../../components/Layout/Layout'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFolder} from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'

export const TagsCategoriesDiv = styled.div`
    width: 90%;
    max-width: 960px;
    margin: 3rem auto 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    & a {
        margin-bottom: 1.5rem;
        list-style-type: none;
        background: rgb(207, 203, 177);
        color: rgb(226, 39, 74);
        width: 100%;
        padding: 1rem;
        tex-decoration: none;
        font-size: 1.1rem;
        letter-spacing: 0.07em;
        border-bottom: 1px solid rgb(226, 39, 74);
        & :hover {
            border-bottom: 0;
        }
    }
`

const CategoriesPage = props => {
    const data = props.data.allMarkdownRemark.group
    return (
        <Layout>
            <Helmet>
                <meta charset="utf-8" />
                <title>Categories Page</title>
                <Link
                    rel="canonical"
                    href="https://www.mariadcampbell.com/categories"
                />
            </Helmet>
            <TagsCategoriesDiv>
                {data.map((category, i) => (
                    <Link to={`/categories/${category.fieldValue}`} key={i}>
                        <FontAwesomeIcon
                            icon={faFolder}
                            style={{
                                color: 'rgb(25,13,8)',
                                marginRight: '0.5rem',
                            }}
                        />
                        {category.fieldValue} {`(${category.totalCount})`}
                    </Link>
                ))}
            </TagsCategoriesDiv>
        </Layout>
    )
}

export default CategoriesPage

export const pageQuery = graphql`
    query catPageQuery {
        allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___categories) {
                fieldValue
                totalCount
            }
        }
    }
`
