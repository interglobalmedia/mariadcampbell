import React from 'react'
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button'
import styled from "@emotion/styled"

const FooterStyle = styled.footer`
    text-align: center;
    padding-bottom: 0.5rem;
`

const Footer = () => {
    return (
        <>
            <ScrollUpButton style={{ outline: 'none' }} />
            <FooterStyle>
                Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>{` `}
                © {new Date().getFullYear()} Maria D.Campbell
            </FooterStyle>
        </>
    )
}

export default Footer