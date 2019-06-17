import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../../components/Layout/Layout'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTag} from '@fortawesome/free-solid-svg-icons'
import {TagsCategoriesDiv} from '../categories'
import SEO from '../../components/Seo/Seo'

const TagsPage = props => {
    const data = props.data.allMarkdownRemark.group
    const title = props.data.site.siteMetadata.title
    const keywords = props.data.site.siteMetadata.keywords
    return (
        <Layout>
            <SEO location={props.location} title={title} keywords={keywords} />
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
        site {
            siteMetadata {
                title
                keywords
            }
        }
    }
`
