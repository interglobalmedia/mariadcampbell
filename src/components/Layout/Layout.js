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
import './Layout.scss'
import styled from '@emotion/styled'
import Search from '../Search/Search'

export const LayoutContainer = styled.div`
    width: 100%;
    background: #fdf6e3;
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
            <LayoutContainer>
                <Header title={data.site.siteMetadata.title} />
                <div className="Site">
                    <Search />
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
