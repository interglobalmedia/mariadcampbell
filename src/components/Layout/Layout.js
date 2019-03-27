/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "../Header/Header"
import "./Layout.css"
import '../../pages/post.css'

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
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="Site"
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main className="Site-content"
            style={{ margin: '6rem auto 2rem', width: '100%' }}>{children}
          </main>
          <footer className="site-footer">
            Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>{` `}
            © {new Date().getFullYear()} Maria D. Campbell
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
