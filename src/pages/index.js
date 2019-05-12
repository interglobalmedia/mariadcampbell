import React from 'react'
import travel from '../images/chris-lawton-346402-unsplash.jpg'
import styled from '@emotion/styled'
import Header from '../components/Header/Header'
import {graphql} from 'gatsby'
import CookieConsent, {Cookies} from 'react-cookie-consent'
import {Helmet} from 'react-helmet'
import SEO from '../components/Seo/Seo'

export const Container = styled.div`
    background: rgba(255, 255, 255, 0.4);
    overflow-y: hidden;
`

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-right: auto;
    margin-bottom: 0;
    margin-left: auto;
`

export const BackgroundImage = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
`

export const FooterStyle = styled.footer`
    text-align: center;
    padding-bottom: 0.5rem;
    letter-spacing: 0.07em;
    @media (max-width: 374px) {
        position: fixed;
        left: 1rem;
        right: 1rem;
        bottom: 1.5rem;
        height: 30px;
        width: 90%;
    }
    & a {
        letter-spacing: 0.07em;
        color: #cb4b16;
        box-shadow: none;
        & :hover {
            text-decoration: underline;
        }
    }
`

const IndexPage = props => {
    const {data} = props
    const siteTitle = data.site.siteMetadata.siteTitle
    const keywords = data.site.siteMetadata.keywords
    return (
        <Container>
            <SEO
                location={props.location}
                siteTitle={siteTitle}
                keywords={keywords}
            />
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <div className="Site">
                <Header />
                <div className="Site-content">
                    <ImageWrapper>
                        <BackgroundImage src={travel} alt={siteTitle} />
                    </ImageWrapper>
                </div>
                <FooterStyle>
                    © {new Date().getFullYear()} {siteTitle}
                    <CookieConsent
                        location="bottom"
                        buttonText="Accept"
                        declineButtonText="Decline"
                        cookieName="MDCDevBlogCookieConsent"
                        style={{
                            background: 'rgba(0,0,0,1)',
                            paddingTop: '5px',
                        }}
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
                        This website uses cookies to enhance the user
                        experience.{' '}
                        <a
                            style={{color: '#cb4b16'}}
                            href="https://cookiesandyou.com/"
                            target="_new"
                        >
                            Learn more
                        </a>
                    </CookieConsent>
                </FooterStyle>
            </div>
        </Container>
    )
}

export default IndexPage

export const indexQuery = graphql`
    query indexQuery {
        site {
            siteMetadata {
                siteTitle
            }
        }
    }
`
