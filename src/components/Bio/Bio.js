import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { rhythm } from '../../utils/typography'
import profileSmall from '../../img/profileSmall.png'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              flexDirection: 'column',
              marginBottom: rhythm(2.5),
            }}
          >
            <div className="bio-container" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', borderTop: '1px solid rgba(0,0,0,0.8)', borderBottom: '1px solid rgba(0,0,0,0.8)', paddingTop: '1.5rem', paddingRight: '0.25rem', background: 'rgba(147,173,92,0.4)' }}>
              <img
                src={profileSmall}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginLeft: rhythm(1 / 2),
                  marginBottom: 0,
                  width: 50,
                  height: 50,
                  borderRadius: `50%`,
                }}
              />
              <p>
                Written by <strong>{author}</strong> who lives and works in New York City building useful things. Be sure to follow me on <a href={`https://twitter.com/${social.twitter}`} style={{ color: '#cb4b16', boxShadow: 'none' }}>Twitter</a>, <a href={`https://github.com/${social.github}`} style={{ color: '#cb4b16', boxShadow: 'none' }}>Github</a> or <a href={`https://www.linkedin.com/in/${social.linkedin}`} style={{ color: '#cb4b16', boxShadow: 'none' }}>Linkedin</a>!
              </p>
              <div>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

export default Bio

const bioQuery = graphql`
query BioQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
        }
        social {
          github
        }
        social {
          linkedin
        }
      }
    }
  }
`