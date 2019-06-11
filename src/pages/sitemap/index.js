import React from 'react'
import {Link, graphql} from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../../components/Layout/Layout'
import SEO from '../../components/Seo/Seo'

const SiteMapDiv = styled.div`
    margin: 3rem auto;
    width: 90%;
    max-width: 1026px;
    background: rgb(207, 203, 177);
    padding: 1.5rem;
    letter-spacing: 0.07em;
    & h1,
    & h2,
    & h4 {
        font-weight: 600;
    }
    & h4 {
        text-transform: capitalize;
        font-size: 1.2rem;
    }
    & a {
        box-shadow: none;
        color: rgb(25, 13, 8);
    }
    & a:hover h3 {
        text-decoration: underline;
    }
`

const PageLinksUl = styled.ul`
    & li {
        list-style-type: square;
        color: rgb(47, 0, 0);
    }
    & a {
        box-shadow: none;
    }
    & a:hover {
        text-decoration: underline;
    }
    & span {
        color: #283148;
    }
`

const MetaDiv = styled.div`
    box-shadow: none;
    color: #283148;
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
                        <Link
                            to="/"
                            title={`visit the link to the Home Page to view what our Landing Page looks like`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blog"
                            title={`visit the link to the Blog Page to read our posts`}
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/categories"
                            title={`visit the link to our Categories Page to view the various categories our Blog contains`}
                        >
                            Categories
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/tags"
                            title={`visit the link to our Tags Page to view the various tags our Blog contains`}
                        >
                            Tags
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            title={`visit the link to the Contact Page to connect with us`}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://www.mariadcampbell.com/rss.xml"
                            title={`visit the link to our RSS Feed to view our complete site content`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            RSS
                        </a>
                    </li>
                </PageLinksUl>
                <h2>Posts</h2>
                <div>
                    {postList.edges.map(({node}, i) => (
                        <div key={i}>
                            <Link
                                to={node.fields.slug}
                                title={`visit the link to the post entitled "${
                                    node.frontmatter.title
                                }" to read more`}
                            >
                                <h4>{node.frontmatter.title}</h4>
                            </Link>
                            <MetaDiv>
                                by {node.frontmatter.author} on{' '}
                                {node.frontmatter.date}
                            </MetaDiv>
                            <PageLinksUl>
                                <li style={{listStyleType: 'square'}}>
                                    <span>{node.excerpt}</span>
                                </li>
                            </PageLinksUl>
                        </div>
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
