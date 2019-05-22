import React from 'react'
import travel from '../images/chris-lawton-346402-unsplash.jpg'
import styled from '@emotion/styled'
import IndexHeader from '../components/IndexHeader/IndexHeader'
import {Link, graphql} from 'gatsby'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faDirections,
    faRss,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import CookieConsent, {Cookies} from 'react-cookie-consent'
import SEO from '../components/Seo/Seo'

export const Container = styled.div`
    position: fixed;
    overflow-y: hidden;
    min-width: 100%;
    min-height: 100%;
`

export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
    overflow-y: hidden;
`

export const HeaderTitle = styled.h1`
    margin-top: 1.25rem;
    color: rgba(0, 0, 0, 0.9);
    font-size: 130%;
    & a {
        color: rgba(0, 0, 0, 0.9);
        font-size: 1.3rem;
        font-weight: 400;
        letter-spacing: 0.07em;
        padding: 1.0875rem;
        box-shadow: none;
        & :hover {
            text-decoration: underline;
            color: #cb4b16;
        }
    }
`

export const FooterStyle = styled.footer`
    text-align: center;
    padding-bottom: 0.5rem;
    letter-spacing: 0.07em;
    color: ghostwhite;
    position: fixed;
    left: 1rem;
    right: 1rem;
    bottom: 2.75rem;
    height: 30px;
    width: 90%;
    background-color: transparent;
    font-size: 1.1rem;
    letter-spacing: 0.08em;
    & a {
        letter-spacing: 0.07em;
        color: #cb4b16;
        box-shadow: none;
        text-align: center;
        & :hover {
            text-decoration: underline;
        }
    }
`

const IconsDiv = styled.div`
    font-size: 1rem;
    padding-bottom: 1rem;
    letter-spacing: 0.07em;
    @media (min-width: 375px) {
        font-size: 1.2rem;
        letter-spacing: 0.07em;
        padding-bottom: 1rem;
    }
`

const IndexPage = props => {
    const {data} = props
    const title = data.site.siteMetadata.title
    const keywords = data.site.siteMetadata.keywords
    return (
        <>
            <Container>
                <SEO
                    location={props.location}
                    title={title}
                    keywords={keywords}
                />
                <div className="Site">
                    <IndexHeader />
                    <div className="Site-content">
                        <HeaderTitle>
                            <Link
                                className="menu-item"
                                to="/"
                                activeStyle={{color: 'whitesmoke'}}
                            >
                                {title}
                            </Link>
                        </HeaderTitle>
                        <BackgroundImage src={travel} alt={title} />
                    </div>
                    <FooterStyle>
                        <IconsDiv>
                            <Link
                                style={{
                                    marginRight: '1.2rem',
                                    color: 'whitesmoke',
                                }}
                                to="/contact"
                            >
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    style={{color: 'whitesmoke'}}
                                />
                                Contact
                            </Link>
                            <Link
                                style={{
                                    marginRight: '1.2rem',
                                    color: 'whitesmoke',
                                }}
                                to="/sitemap"
                            >
                                <FontAwesomeIcon
                                    icon={faDirections}
                                    style={{color: 'whitesmoke'}}
                                />
                                Sitemap
                            </Link>

                            <a
                                style={{color: 'whitesmoke'}}
                                href="https://www.mariadcampbell.com/rss.xml"
                            >
                                <FontAwesomeIcon
                                    icon={faRss}
                                    style={{color: 'whitesmoke'}}
                                />
                                RSS
                            </a>
                            <br />
                        </IconsDiv>
                        © {new Date().getFullYear()} {title}
                        <CookieConsent
                            location="bottom"
                            buttonText="Accept"
                            declineButtonText="Decline"
                            cookieName="MDCDevBlogCookieConsent"
                            style={{
                                background: 'rgba(0,0,0,1)',
                                paddingTop: '5px',
                                zIndex: '9999',
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
        </>
    )
}

export default IndexPage

export const indexQuery = graphql`
    query indexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
