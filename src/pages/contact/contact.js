import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../../components/Layout/Layout'
import Contact from '../../components/Contact/Contact'

const ContactPage = () => {
    return (
        <Layout>
            <Contact />
        </Layout>
    )
}

export default ContactPage