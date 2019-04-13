import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../../components/Layout/Layout'
import Contact from '../../components/Contact/Contact'
import { OutboundLink } from 'gatsby-plugin-gtag'

const ContactPage = () => {
    return (
        <Layout>
            <Helmet>
                <meta charset="utf-8" />
                <title>Contact Page</title>
                <Link rel="canonical" href="https://www.mariadcampbell.com/contact/contact" />
                <OutboundLink href="https://www.mariadcampbell.com/contact/contact/">Check out Maria D. Campbell's developer notebook contact page!</OutboundLink>
            </Helmet>
            <Contact />
        </Layout>
    )
}

export default ContactPage