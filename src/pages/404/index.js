import React from 'react'
import styled from '@emotion/styled'
import {graphql} from 'gatsby'
import Layout from '../../components/Layout/Layout'
import SEO from '../../components/Seo/Seo'

const NotFoundDiv = styled.div`
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const NotFoundPage = props => {
    const {data} = props
    const title = data.site.siteMetadata.title
    return (
        <Layout location={props.location} title={title}>
            <NotFoundDiv>
                <SEO title="404: Not found" />
                <h1>NOT FOUND</h1>
                <p>
                    You just hit a route that doesn&#39;t exist... the sadness.
                </p>
            </NotFoundDiv>
        </Layout>
    )
}

export default NotFoundPage

export const query = graphql`
    query notFoundQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
