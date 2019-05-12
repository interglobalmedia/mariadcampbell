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
                        siteTitle
                    }
                }
            }
        `}
        render={data => (
            <LayoutContainer>
                <Header siteTitle={data.site.siteMetadata.siteTitle} />
                <div className="Site">
                    <main className="Site-content">{children}</main>
                    <Footer />
                </div>
            </LayoutContainer>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
