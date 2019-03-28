import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="site-footer">
            Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>{` `}
            © {new Date().getFullYear()} Maria D.Campbell
          </footer>
    )
}

export default Footer