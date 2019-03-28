import React from 'react'
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <ScrollUpButton />

            <footer className="site-footer">
                Built with
            {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>{` `}
                © {new Date().getFullYear()} Maria D.Campbell
          </footer>
        </>
    )
}

export default Footer