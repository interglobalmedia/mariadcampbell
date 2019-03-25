import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import './author.css'

function Author() {
    return (
        <StaticQuery
            query={authorQuery}
            render={data => {
                const { author } = data.site.siteMetadata
                return (
                    <ul className="author-container">
                        <li>by {author}</li>
                    </ul>
                )
            }}
        />
    )
}

export default Author

const authorQuery = graphql`
  query AuthorQuery {
              site {
            siteMetadata {
              author
            }
          }
        }
`
