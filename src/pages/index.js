import React from 'react'
import { Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import './post.css'
import './index.css'
import Layout from '../components/layout'
import Author from '../components/author'

const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark
  const twitter = `https://twitter.com/letsbsocial1`
  const github = `https://github.com/interglobalmedia`
  const linkedin = `https://www.linkedin.com/in/mariacampbell/`

  return (

    <Layout>
      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} className="link" >
          <div className="post-list">
            <h1 className="post-list-title">{node.frontmatter.title}</h1>
            <p className="post-list-excerpt">{node.excerpt}</p>
            <div className="post-list-date">
              <Author /> on {node.frontmatter.date}
            </div>
            <ul className="social-media-home">
              <li>
                <a href={twitter} target="blank">
                  <FontAwesomeIcon icon={faTwitter} size='2x' style={{ border: '1px solid rgba(0, 0, 0, 0.8)', borderRadius: '50%', width: '36px', height: '36px', padding: '5px', marginRight: '1rem' }} />
                </a>
              </li>
              <li>
                <a a href={github} target="blank">
                  <FontAwesomeIcon icon={faGithubAlt} size='2x' style={{ border: '1px solid rgba(0, 0, 0, 0.8)', borderRadius: '50%', width: '36px', height: '36px', padding: '5px', marginRight: '1rem' }} />
                </a>
              </li>
              <li>
                <a a href={linkedin} target="blank">
                  <FontAwesomeIcon icon={faLinkedinIn} size='2x' style={{ border: '1px solid rgba(0, 0, 0, 0.8)', borderRadius: '50%', width: '36px', height: '36px', padding: '5px' }} />
                </a>
              </li>
            </ul>
          </div>
        </Link>
      ))}
    </Layout>
  )
}
export default IndexPage;
export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
            author
          }
        }
      }
    }
  }
`

const indexQuery = graphql`
  query IndexQuery {
              site {
            siteMetadata {
              author
            }
          }
        }
`