/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'
import {Helmet} from 'react-helmet'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.css'
import styled from '@emotion/styled'

export const LayoutContainer = styled.div`
    width: 100%;
    background: rgba(235, 233, 90, 1);
`

const Layout = ({children}) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <Helmet>
                    <meta
                        name="keywords"
                        content="web development, react, mongodb, postgresql, gatsbyjs, nodejs, npm, jsx, css in js, styled components, jira, atlassian, git, distributed version control, github, development, production, continuous deployment, git integration, css3, html5, audio, video full stack development, front end development, back end development, automated workflows, aws, netlify, gh-pages, heroku, command line, osx, serverless stack, cross browser compatibility, shadow dom, testing, jest testing, html5 canvas, webgl, linting, eslint, prettier, babel, webpack, css modules, sass, homebrew, responsive design, es6, modern javascript, node security, npm audit fix"
                    />
                </Helmet>
                <LayoutContainer>
                    <Header siteTitle={data.site.siteMetadata.title} />

                    <div className="Site">
                        <main className="Site-content">{children}</main>

                        <Footer />
                    </div>
                </LayoutContainer>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
