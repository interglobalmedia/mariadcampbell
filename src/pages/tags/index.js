import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../../components/Layout/Layout'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTag} from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'
import {Helmet} from 'react-helmet'

export const TagsDiv = styled.div`
    width: 90%;
    max-width: 1026px;
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

const TagsPage = props => {
    const data = props.data.allMarkdownRemark.group
    return (
        <Layout>
            <Helmet>
                <title>Tags Page</title>
            </Helmet>
            <TagsDiv>
                {data.map((tag, i) => (
                    <Link to={`/tags/${tag.fieldValue}`} key={i}>
                        <FontAwesomeIcon
                            icon={faTag}
                            style={{color: '#268bd2'}}
                        />{' '}
                        {tag.fieldValue} {`(${tag.totalCount})`}
                    </Link>
                ))}
            </TagsDiv>
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