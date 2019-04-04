/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from "../Header/Header"
import Footer from '../Footer/Footer'
import './Layout.css'
import styled from '@emotion/styled'

const LayoutContainer = styled.div`
  width: 100%;
  background: rgba(255,198,0,1);
`

const Layout = ({ children }) => (
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
        <Header siteTitle={data.site.siteMetadata.title} />

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