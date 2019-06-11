import React from 'react'
import {CircleArrow as ScrollUpButton} from 'react-scroll-up-button'
import styled from '@emotion/styled'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faDirections,
    faRss,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'gatsby'
import Info from '../Info/Info'
import CookieConsent from 'react-cookie-consent'

export const FooterStyle = styled.footer`
    text-align: center;
    padding-bottom: 0.5rem;
    letter-spacing: 0.07em;
    width: 100%;
    margin: 0 auto -1.5rem;
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: rgb(25, 13, 8);
    & a {
        color: whitesmoke;
        margin-bottom: 3rem;
    }
`

export const CreditWrapperDiv = styled.div`
    margin-top: 2.25rem;
    color: whitesmoke;
`

const Footer = () => {
    return (
        <FooterStyle>
            <div
                style={{
                    display: 'flex',
                    fontSize: '1.2rem',
                    letterSpacing: '0.07em',
                }}
            >
                <Link
                    style={{marginRight: '1.2rem'}}
                    to="/contact"
                    title={`visit link to main Contact page to learn how to connect with us`}
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                    Contact
                </Link>
                <Link
                    style={{marginRight: '1.2rem'}}
                    to="/sitemap"
                    title={`visit link to Sitemap page to get an overview of the entire site`}
                >
                    <FontAwesomeIcon icon={faDirections} />
                    Sitemap
                </Link>

                <a
                    href="https://www.mariadcampbell.com/rss.xml"
                    title={`visit link to RSS Feed page to view or subscribe to our RSS Feed`}
                >
                    <FontAwesomeIcon icon={faRss} />
                    RSS
                </a>
            </div>
            <Info />

            <ScrollUpButton
                ContainerClassName="ScrollUpButton__Container"
                style={{
                    outline: 'none',
                    background: 'rgb(226,39,74)',
                    border: ' 5px solid rgb(226,39,74)',
                }}
            />
            <CreditWrapperDiv>
                © {new Date().getFullYear()} Maria D. Campbell
            </CreditWrapperDiv>
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                declineButtonText="Decline"
                cookieName="MDCDevBlogCookieConsent"
                style={{background: 'rgba(0,0,0,1)', paddingTop: '5px'}}
                buttonStyle={{color: '#4e503b', fontSize: '1rem'}}
                declineButtonStyle={{fontSize: '1rem'}}
                expires={150}
                onAccept={() => {
                    alert('Great!')
                }}
                enableDeclineButton
                onDecline={() => {
                    alert('Sorry to hear that!')
                }}
            >
                This website uses cookies to enhance the user experience.{' '}
                <a
                    href="https://cookiesandyou.com/"
                    target="_new"
                    rel="noopener noreferrer"
                    title={`visit the cookies and you website to learn more about how cookies work`}
                >
                    Learn more
                </a>
            </CookieConsent>
        </FooterStyle>
    )
}

export default Footer
