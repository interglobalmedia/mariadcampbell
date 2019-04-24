import React from 'react'
import travel from '../images/chris-lawton-346402-unsplash.jpg'
import styled from '@emotion/styled'
import Header from '../components/Header/Header'
import {Helmet} from 'react-helmet'
import {Link} from 'gatsby'
import {OutboundLink} from 'gatsby-plugin-gtag'
import PropTypes from 'prop-types'

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

const IndexPage = ({siteTitle}) => {
    return (
        <>
            <Helmet>
                <meta charset="utf-8" />
                <meta
                    name="keywords"
                    content="web development, react, mongodb, postgresql, gatsbyjs, nodejs, npm, jsx, css in js, styled components, jira, atlassian, git, distributed version control, github, development, production, continuous deployment, git integration, css3, html5, audio, video, full stack development, front end development, back end development, automated workflows, aws, netlify, gh-pages, heroku, command line, osx, serverless stack, cross browser compatibility, shadow dom, testing, jest testing, html5 canvas, webgl, linting, eslint, prettier, babel, webpack, css modules, sass, homebrew, responsive design, es6, modern javascript, node security, npm audit fix"
                />
                <title>{siteTitle}</title>
                <Link rel="canonical" href="https://www.mariadcampbell.com/" />
                <OutboundLink href="https://www.mariadcampbell.com">
                    Check out the Maria D. Campbell developer notebook!
                </OutboundLink>
            </Helmet>
            <Container>
                <div className="Site">
                    <Header />
                    <div className="Site-content">
                        <ImageWrapper>
                            <BackgroundImage src={travel} alt={siteTitle} />
                        </ImageWrapper>
                    </div>
                    <FooterStyle>
                        © {new Date().getFullYear()} {siteTitle}
                    </FooterStyle>
                </div>
            </Container>
        </>
    )
}

IndexPage.propTypes = {
    siteTitle: PropTypes.string.isRequired,
}

IndexPage.defaultProps = {
    siteTitle: `Maria D. Campbell`,
}

export default IndexPage
