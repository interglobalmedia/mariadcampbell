import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faLinkedinIn,
    faGithubAlt,
} from '@fortawesome/free-brands-svg-icons'
import {rhythm} from '../../utils/typography'
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

export const InfoLayout = styled.ul`
    margin: 2rem auto 1.5rem;
    width: 100vw;
    margin-left: 50%;
    transform: translateX(-50%);
`

export const InfoTextUl = styled.ul`
    display: flex;
    align-items: center;
    padding: 1rem 0.5rem 0;
    width: 90%;
    max-width: 57em;
    margin-left: auto;
    margin-right: auto;
    background: whitesmoke;
    & li {
        list-style-type: none;
        letter-spacing: 0.07em;
        line-height: 1.7;
    }
`

export const ImageDiv = styled.div`
    display: block;
    margin-top: ${rhythm(1 / 2)};
    margin-left: ${rhythm(1 / 2)};
`

export const TextLi = styled.li`
    text-align: left;
    margin-left: ${rhythm(1 / 2)};
    margin-bottom: ${rhythm(-1 / 4)};
    margin-top: ${rhythm(1 / 1)};
    margin-right: ${rhythm(1 / 8)};
`

export const SocialStyle = styled.p`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-left: 0.75rem;
    width: 100%;
    max-width: 1026px;
`

export const SocialStrong = styled.strong`
    color: rgb(25, 13, 8);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    &:hover {
        color: rgb(226, 39, 74);
        transition: 1s ease-out;
    }
`

const Info = ({author}) => (
    <StaticQuery
        query={graphql`
            query InfoPageQuery {
                avatar: file(relativePath: {eq: "profileSmall.png"}) {
                    childImageSharp {
                        fixed(width: 150, height: 150) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                site {
                    siteMetadata {
                        title
                        author
                        social {
                            twitter
                            github
                            linkedin
                        }
                    }
                }
            }
        `}
        render={data => (
            <InfoLayout as="ul">
                <InfoTextUl as="ul">
                    <ImageDiv as="div">
                        <Image
                            fixed={data.avatar.childImageSharp.fixed}
                            alt="The author Maria D. Campbell"
                            style={{
                                maxHeight: '150px',
                                maxWidth: '150px',
                                marginRight: rhythm(1 / 4),
                                marginTop: rhythm(1 / 2),
                                marginBottom: rhythm(1 / 2),
                                paddingRight: rhythm(1 / 4),
                                float: 'left',
                                outside: 'circle()',
                                shapeOutside: 'circle()',
                            }}
                        />
                        <TextLi as="li">
                            <p>
                                I design, develop, and teach experiences that
                                make people's lives simpler. When I’ m not
                                coding, I love to go to the countryside to
                                recharge, watch Film Noir and mystery movies,
                                listen to music, ponder over surrealist art, and
                                create exotic cuisine.
                            </p>
                            <SocialStyle as="p">
                                <a
                                    href={`https://twitter.com/${
                                        data.site.siteMetadata.social.twitter
                                    }`}
                                    target="_new"
                                    rel="noopener noreferrer"
                                    title={`visit link to Maria's Twitter profile to follow her on Twitter`}
                                >
                                    <SocialStrong as="strong">
                                        <FontAwesomeIcon
                                            icon={faTwitter}
                                            size="2x"
                                            style={{
                                                borderRadius: '50%',
                                                width: '30px',
                                                height: '30px',
                                            }}
                                        />
                                    </SocialStrong>
                                </a>
                                <a
                                    href={`https://github.com/${
                                        data.site.siteMetadata.social.github
                                    }`}
                                    target="_new"
                                    rel="noopener noreferrer"
                                    title={`visit link to Maria's Github profile to follow her on Github`}
                                >
                                    <SocialStrong as="strong">
                                        <FontAwesomeIcon
                                            icon={faGithubAlt}
                                            size="2x"
                                            style={{
                                                width: '30px',
                                                height: '30px',
                                            }}
                                        />
                                    </SocialStrong>
                                </a>
                                <a
                                    href={`https://www.linkedin.com/in/${
                                        data.site.siteMetadata.social.linkedin
                                    }`}
                                    target="_new"
                                    rel="noopener noreferrer"
                                    title={`visit link to Maria's Linkedin profile to connect with her on Linkedin`}
                                >
                                    <SocialStrong as="strong">
                                        <FontAwesomeIcon
                                            icon={faLinkedinIn}
                                            size="2x"
                                            style={{
                                                borderRadius: '50%',
                                                width: '30px',
                                                height: '30px',
                                            }}
                                        />
                                    </SocialStrong>
                                </a>
                            </SocialStyle>
                        </TextLi>
                    </ImageDiv>
                </InfoTextUl>
            </InfoLayout>
        )}
    />
)

export default Info
