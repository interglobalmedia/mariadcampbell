import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { StaticQuery, graphql } from "gatsby"
import Layout from '../components/Layout/Layout'
import './info.css'
import profileSmall from '../images/profileSmall.png'

function InfoPage() {
  const twitter = `https://twitter.com/letsbsocial1`
  const github = `https://github.com/interglobalmedia`
  const linkedin = `https://www.linkedin.com/in/mariacampbell/`
  return (

    <StaticQuery
      query={infoQuery}
      render={data => {
        const { author } = data.site.siteMetadata

        return (
          <Layout>
            <div className="info-layout">
              <ul className="info-text">
                <img src={profileSmall} width="150" height="150" alt={author} />
                <li>
                  I design, develop, and teach experiences that make people's lives simpler.
                </li>
                <li>
                  When I’ m not coding, I love to go to the countryside to recharge, watch Film Noir and mystery movies, listen to music, ponder over surrealist art, and create exotic cuisine.
                </li>
                <li>
                  Be sure to follow me on <strong>Twitter</strong>, <strong>Github</strong>, or <strong>Linkedin</strong>!
                </li>
              </ul>
              <ul className="social-media">
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
          </Layout >
        )
      }}
    />
  )
}

export default InfoPage

const infoQuery = graphql`
  query InfoQuery {
              site {
            siteMetadata {
              author
            }
          }
        }
`