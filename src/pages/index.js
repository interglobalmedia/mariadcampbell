import React from 'react'
import travel from '../images/chris-lawton-346402-unsplash.jpg'
import styled from 'styled-components'
import IndexHeader from '../components/IndexHeader/IndexHeader'
import {Link, graphql} from 'gatsby'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faDirections,
    faRss,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import CookieConsent from 'react-cookie-consent'
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
    font-size: 130%;
    font-weight: 400;
    letter-spacing: 0.07em;
    & a {
        padding: 1.0875rem;
        color: whitesmoke;
    }
`

export const FooterStyle = styled.footer`
    text-align: center;
    color: ghostwhite;
    height: 75px;
    width: 100%;
    font-size: 1.1rem;
    letter-spacing: 0.08em;
    background: none repeat scroll 0 0 transparent;
    & a {
        text-align: center;
    }
`
const FooterDiv = styled.div`
    text-align: center;
    margin: auto;
`

const IconsDiv = styled.div`
    font-size: 1rem;
    padding-bottom: 1rem;
    & a {
        color: whitesmoke;
    }
    @media (min-width: 375px) {
        font-size: 1.2rem;
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
                                title={`link to the Home Page containing the name of Maria's developer blog entitled "Maria D. Campbell"`}
                            >
                                {title}
                            </Link>
                        </HeaderTitle>
                        <BackgroundImage src={travel} alt={title} />
                    </div>
                    <FooterStyle>
                        <FooterDiv>
                            <IconsDiv>
                                <Link
                                    style={{
                                        marginRight: '1.2rem',
                                    }}
                                    to="/contact"
                                    title={`visit link to main Contact page to learn how to connect with us`}
                                >
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    Contact
                                </Link>
                                <Link
                                    style={{
                                        marginRight: '1.2rem',
                                    }}
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
                            </IconsDiv>
                            © {new Date().getFullYear()} {title}
                        </FooterDiv>
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
                                rel="noopener noreferrer"
                                title={`visit the cookies and you website to learn more about how cookies work`}
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
