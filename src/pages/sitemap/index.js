import React from 'react'
import {Link, graphql} from 'gatsby'
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
    & a {
        box-shadow: none;
    }
    & a:hover h3 {
        text-decoration: underline;
    }
`

const PageLinksUl = styled.ul`
    list-style-type: square;
    & a {
        box-shadow: none;
    }
    & a:hover {
        text-decoration: underline;
    }
`

const MetaDiv = styled.div`
    box-shadow: none;
    color: rgba(153, 170, 181, 1);
`

const SiteMapPage = props => {
    const postList = props.data.allMarkdownRemark
    const {data} = props
    const title = data.site.siteMetadata.title
    const keywords = data.site.siteMetadata.keywords
    return (
        <Layout>
            <SEO location={props.location} keywords={keywords} title={title} />
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
                        <a href="https://www.mariadcampbell.com/rss.xml">RSS</a>
                    </li>
                </PageLinksUl>
                <h2>Posts</h2>
                <div>
                    {postList.edges.map(({node}, i) => (
                        <Link to={node.fields.slug} key={i}>
                            <h3>{node.frontmatter.title}</h3>
                            <MetaDiv>
                                by {node.frontmatter.author} on{' '}
                                {node.frontmatter.date}
                            </MetaDiv>
                            <PageLinksUl>
                                <li style={{listStyleType: 'square'}}>
                                    {node.excerpt}
                                </li>
                            </PageLinksUl>
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
                title
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
