import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../../components/Layout/Layout'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTag} from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'
import {Helmet} from 'react-helmet'
import {TagsCategoriesDiv} from '../categories'

const TagsPage = props => {
    const data = props.data.allMarkdownRemark.group
    return (
        <Layout>
            <Helmet>
                <meta charset="utf-8" />
                <title>Categories Page</title>
                <Link
                    rel="canonical"
                    href="https://www.mariadcampbell.com/tags"
                />
            </Helmet>
            <TagsCategoriesDiv>
                {data.map((tag, i) => (
                    <Link to={`/tags/${tag.fieldValue}`} key={i}>
                        <FontAwesomeIcon
                            icon={faTag}
                            style={{
                                color: 'rgb(25,13,8)',
                                marginRight: '0.5rem',
                            }}
                        />
                        {tag.fieldValue} {`(${tag.totalCount})`}
                    </Link>
                ))}
            </TagsCategoriesDiv>
        </Layout>
    )
}

export default TagsPage

export const pageQuery = graphql`
    query tagPageQuery {
        allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`
