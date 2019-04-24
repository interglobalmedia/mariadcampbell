import React from 'react'
import {Link, graphql} from 'gatsby'
import {Helmet} from 'react-helmet'
import {OutboundLink} from 'gatsby-plugin-gtag'
import Layout from '../../components/Layout/Layout'

const SiteMapPage = props => {
    const postList = props.data.allMarkdownRemark
    return (
        <>
            <Helmet>
                <meta charset="utf-8" />
                <meta
                    name="keywords"
                    content="web development, react, mongodb, postgresql, gatsbyjs, nodejs, npm, jsx, css in js, styled components, jira, atlassian, git, distributed version control, github, development, production, continuous deployment, git integration, css3, html5, audio, video, full stack development, front end development, back end development, automated workflows, aws, netlify, gh-pages, heroku, command line, osx, serverless stack, cross browser compatibility, shadow dom, testing, jest testing, html5 canvas, webgl, linting, eslint, prettier, babel, webpack, css modules, sass, homebrew, responsive design, es6, modern javascript, node security, npm audit fix"
                />
                <title>Site Map</title>
                <Link
                    rel="canonical"
                    href="https://www.mariadcampbell.com/sitemap/sitemap"
                />
                <OutboundLink href="https://www.mariadcampbell.com/sitemap/sitemap">
                    Check out the Maria D. Campbell developer notebook sitemap
                    page!
                </OutboundLink>
            </Helmet>
            <Layout>
                <div
                    style={{
                        margin: '3rem auto',
                        width: '90%',
                        maxWidth: '1026px',
                        background: 'rgba(250, 238, 184, 1)',
                        padding: '1.5rem',
                        letterSpacing: '0.07em',
                    }}
                >
                    <h1>Site Map</h1>
                    <h2>Pages</h2>
                    <ul style={{listStyleType: 'square'}}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/categories/categories">Categories</Link>
                        </li>
                        <li>
                            <Link to="/tags/tags">Tags</Link>
                        </li>
                        <li>
                            <Link to="/contact/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/rss.xml">RSS</Link>
                        </li>
                    </ul>
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
                </div>
            </Layout>
        </>
    )
}

export default SiteMapPage

export const sitemapQuery = graphql`
    query SiteMapQuery {
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
