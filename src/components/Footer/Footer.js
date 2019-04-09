import React from 'react'
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button'
import styled from "@emotion/styled"
import InfoPage from '../Info/Info'

const FooterStyle = styled.footer`
    text-align: center;
    padding-bottom: 0.5rem;
    letter-spacing: 0.07em;
    width: 100%;
    margin: 0 auto;
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    background: rgba(44,60,160, 1);
    & a {
        color: #cb4b16;
        box-shadow: none;
        margin-bottom: 3rem;
        & :hover {
            text-decoration: underline;
        }
    }
`

const Footer = () => {
    return (
        <>
            <FooterStyle>

                <InfoPage />

                <ScrollUpButton style={{
                    outline: 'none',
                    background: 'transparent'
                }} />
                <div style={{ marginTop: '2.25rem', color: 'whitesmoke' }}>© {new Date().getFullYear()} Maria D. Campbell</div>
            </FooterStyle>
        </>
    )
}

export default Footer