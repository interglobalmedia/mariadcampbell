import React from 'react'
import {Helmet} from 'react-helmet'
import {Link} from 'gatsby'
import Layout from '../../components/Layout/Layout'
import Contact from '../../components/Contact/Contact'
import {OutboundLink} from 'gatsby-plugin-gtag'

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <meta charset="utf-8" />
                <meta
                    name="keywords"
                    content="web development, react, mongodb, postgresql, gatsbyjs, nodejs, npm, jsx, css in js, styled components, jira, atlassian, git, distributed version control, github, development, production, continuous deployment, git integration, css3, html5, audio, video, full stack development, front end development, back end development, automated workflows, aws, netlify, gh-pages, heroku, command line, osx, serverless stack, cross browser compatibility, shadow dom, testing, jest testing, html5 canvas, webgl, linting, eslint, prettier, babel, webpack, css modules, sass, homebrew, responsive design, es6, modern javascript, node security, npm audit fix"
                />
                <title>Contact Page</title>
                <Link
                    rel="canonical"
                    href="https://www.mariadcampbell.com/contact/contact"
                />
                <OutboundLink href="https://www.mariadcampbell.com/contact/contact/">
                    Check out the Maria D. Campbell developer notebook contact
                    page!
                </OutboundLink>
            </Helmet>
            <Layout>
                <Contact />
            </Layout>
        </>
    )
}

export default ContactPage
