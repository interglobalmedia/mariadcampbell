import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import Layout from '../../components/Layout/Layout'
import { rhythm } from '../../utils/typography'
import '../../components/Layout/Layout.css'
import styled from '@emotion/styled'
import profileSmall from '../../images/profileSmall.png'

const InfoLayout = styled.div`
  width: 90%;
  margin: 3rem auto 0;
`

const InfoTextUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  max-width: 960px;
  margin: auto;
  & li {
    list-style-type: none;
    letter-spacing: 0.07em;
    line-height: 1.7;
    width: 100%;
  }
`

const ImageLi = styled.li`
  max-width: 100px;
`

const TextLi = styled.li`
  max-width: 600px;
  margin-left: ${rhythm(1 / 1)};
`

const SocialMediaUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  & li {
    box-shadow: none;
    margin-right: 40px;
    list-style-type: none;
    &:first-of-type {
      margin-left: 1.25rem;
    }
    & a {
      color: #cb4b16;
      box-shadow: none; 
      border: 1px solid rgba(0,0,0,0.8); 
      border-radius: 50%;
      padding-top: 17px; 
      padding-bottom: 8px; 
      padding-left: 8px; 
      padding-right: 8px; 
      background: rgba(29,202,255, 1);
    }
  }
`

export const SocialStrong = styled.strong`
  color: #268bd2;
`

export const InfoPage = ({ author }) => {
  const twitter = `https://twitter.com/letsbsocial1`
  const github = `https://github.com/interglobalmedia`
  const linkedin = `https://www.linkedin.com/in/mariacampbell/`
  return (
    <Layout>
      <InfoLayout>
        <InfoTextUl>
          <ImageLi>
            <img src={profileSmall} style={{ width: '100px', height: '100px', marginRight: rhythm(1 / 1) }} alt={author} />
          </ImageLi>
          <TextLi>
            I design, develop, and teach experiences that make people's lives simpler.

            When I’ m not coding, I love to go to the countryside to recharge, watch Film Noir and mystery movies, listen to music, ponder over surrealist art, and create exotic cuisine. Be sure to follow me on <SocialStrong>Twitter</SocialStrong>, <SocialStrong>Github</SocialStrong>, or <SocialStrong>Linkedin</SocialStrong>!
          </TextLi>
        </InfoTextUl>
        <SocialMediaUl>
          <li>
            <a href={twitter} target="blank">
              <FontAwesomeIcon icon={faTwitter} size='2x' style={{ borderRadius: '50%', width: '30px', height: '30px' }} />
            </a>
          </li>
          <li>
            <a href={github} target="blank">
              <FontAwesomeIcon icon={faGithubAlt} size='2x' style={{ width: '30px', height: '30px' }} />
            </a>
          </li>
          <li>
            <a href={linkedin} target="blank">
              <FontAwesomeIcon icon={faLinkedinIn} size='2x' style={{ borderRadius: '50%', width: '30px', height: '30px' }} />
            </a>
          </li>
        </SocialMediaUl>
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