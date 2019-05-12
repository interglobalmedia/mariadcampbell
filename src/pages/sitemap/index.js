import React from 'react'
import {Link, graphql} from 'gatsby'
import {Helmet} from 'react-helmet'
import styled from '@emotion/styled'
import Layout from '../../components/Layout/Layout'
import SEO from '../../components/Seo/Seo'

const SiteMapDiv = styled.div`
    margin: 3rem auto;
    width: 90%;
    max-width: 1026px;
    background: rgba(250, 238, 184, 1);
    padding: 1.5rem;
    letter-spacing: 0.07em;
`

const PageLinksUl = styled.ul`
    list-style-type: square;
    & a {
        box-shadow: none;
    }
`

const SiteMapPage = props => {
    const postList = props.data.allMarkdownRemark
    const {data} = props
    const siteTitle = data.site.siteMetadata.siteTitle
    const keywords = data.site.siteMetadata.keywords
    return (
        <Layout>
            <SEO
                location={props.location}
                title={siteTitle}
                keywords={keywords}
            />
            <Helmet>
                <title>Sitemap Page</title>
            </Helmet>
            <SiteMapDiv>
                <h1>Site Map</h1>
                <h2>Pages</h2>
                <PageLinksUl>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/categories">Categories</Link>
                    </li>
                    <li>
                        <Link to="/tags">Tags</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/rss.xml">RSS</Link>
                    </li>
                </PageLinksUl>
                <h2>Posts</h2>
                <div>
                    {postList.edges.map(({node}, i) => (
                        <Link to={node.fields.slug} key={i}>
                            <div>
                                <h3>{node.frontmatter.title}</h3>
                                <div>
                                    by {node.frontmatter.author} on{' '}
                                    {node.frontmatter.date}
                                </div>
                                <ul>
                                    <li style={{listStyleType: 'square'}}>
                                        {node.excerpt}
                                    </li>
                                </ul>
                            </div>
                        </Link>
                    ))}
                </div>
            </SiteMapDiv>
        </Layout>
    )
}

export default SiteMapPage

export const sitemapQuery = graphql`
    query sitemapQuery {
        site {
            siteMetadata {
                siteTitle
                keywords
            }
        }
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            edges {
                node {
                    fields {
                        slug
                    }
                    excerpt(pruneLength: 150)
                    frontmatter {
                        date(formatString: "DD MMMM, YYYY")
                        title
                        author
                    }
                }
            }
        }
    }
`
