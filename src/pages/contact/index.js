import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../../components/Layout/Layout'
import Contact from '../../components/Contact/Contact'
import SEO from '../../components/Seo/Seo'

const ContactPage = props => {
    const {data} = props
    const title = data.site.siteMetadata.title
    const keywords = data.site.siteMetadata.keywords
    return (
        <Layout>
            <SEO location={props.location} title={title} keywords={keywords} />
            <Contact />
        </Layout>
    )
}

export default ContactPage

export const contactQuery = graphql`
    query contactQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
