import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import Layout from '../../components/Layout/Layout'
import { rhythm } from '../../utils/typography'
import '../../components/Layout/Layout.css'
import styled from '@emotion/styled'
import profileSmall from '../../img/profileSmall.png'

const InfoLayout = styled.div`
  width: 90%;
  margin: 3rem auto 0;
`

const InfoFollow = styled.li`
  box-shadow: none;
  border-bottom: 1px solid rgba(0,0,0,0.8);
  margin-right: 40px;
  &:hover {
    border-bottom: none;
  }
`

const InfoFollowFirst = styled.li`
  box-shadow: none;
  border-bottom: 1px solid rgba(0,0,0,0.8);
  margin-right: 40px;
  margin-left: 20px;
  &:hover {
    border-bottom: none;
  }
`


export const InfoPage = ({ author }) => {
  const twitter = `https://twitter.com/letsbsocial1`
  const github = `https://github.com/interglobalmedia`
  const linkedin = `https://www.linkedin.com/in/mariacampbell/`
  return (
    <Layout>
      <InfoLayout>
        <ul className="info-text" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', listStyleType: 'none', width: '90%', maxWidth: '960px', margin: 'auto' }}>
          <li style={{ width: '100%', maxWidth: '100px' }}>
            <img src={profileSmall} style={{ width: '100px', height: '100px', marginRight: rhythm(1 / 1) }} alt={author} />
          </li>
          <li style={{ width: '100%', maxWidth: '600px', marginLeft: rhythm(1 / 1) }}>
            I design, develop, and teach experiences that make people's lives simpler.

            When I’ m not coding, I love to go to the countryside to recharge, watch Film Noir and mystery movies, listen to music, ponder over surrealist art, and create exotic cuisine.

                  Be sure to follow me on <strong>Twitter</strong>, <strong>Github</strong>, or <strong>Linkedin</strong>!
                </li>
        </ul>
        <ul className="social-media" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', listStyleType: 'none', marginTop: '2.5rem', marginBottom: '2.5rem' }}>
          <InfoFollowFirst>
            <a href={twitter} target="blank" style={{
              color: 'rgba(0,0,0,0.9)', boxShadow: 'none'
            }}>
              <FontAwesomeIcon icon={faTwitter} size='2x' style={{ borderRadius: '50%', width: '30px', height: '30px' }} />
            </a>
          </InfoFollowFirst>
          <InfoFollow>
            <a href={github} target="blank" style={{ color: 'rgba(0,0,0,0.9)', boxShadow: 'none' }}>
              <FontAwesomeIcon icon={faGithubAlt} size='2x' style={{ width: '30px', height: '30px' }} />
            </a>
          </InfoFollow>
          <InfoFollow>
            <a href={linkedin} target="blank" style={{ color: 'rgba(0,0,0,0.9)', boxShadow: 'none' }}>
              <FontAwesomeIcon icon={faLinkedinIn} size='2x' style={{ borderRadius: '50%', width: '30px', height: '30px' }} />
            </a>
          </InfoFollow>
        </ul>
      </InfoLayout>
    </Layout >
  )
}

export default InfoPage

export const infoQuery = graphql`
  query {
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