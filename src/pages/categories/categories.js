import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../../components/Layout/Layout'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFolder} from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'
import {Helmet} from 'react-helmet'
import {OutboundLink} from 'gatsby-plugin-gtag'

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
    return (
        <>
            <Helmet>
                <meta charset="utf-8" />
                <meta
                    name="keywords"
                    content="web development, react, mongodb, postgresql, gatsbyjs, nodejs, npm, jsx, css in js, styled components, jira, atlassian, git, distributed version control, github, development, production, continuous deployment, git integration, css3, html5, audio, video, full stack development, front end development, back end development, automated workflows, aws, netlify, gh-pages, heroku, command line, osx, serverless stack, cross browser compatibility, shadow dom, testing, jest testing, html5 canvas, webgl, linting, eslint, prettier, babel, webpack, css modules, sass, homebrew, responsive design, es6, modern javascript, node security, npm audit fix"
                />
                <title>Categories Page</title>
                <Link
                    rel="canonical"
                    href="https://www.mariadcampbell.com/categories/categories"
                />
                <OutboundLink href="https://www.mariadcampbell.com/categories/categories/">
                    Check out the Maria D. Campbell developer notebook
                    categories page!
                </OutboundLink>
            </Helmet>
            <Layout>
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
        </>
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
        allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___categories) {
                fieldValue
                totalCount
            }
        }
    }
`
