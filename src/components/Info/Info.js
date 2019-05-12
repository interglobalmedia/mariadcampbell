import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faLinkedinIn,
    faGithubAlt,
} from '@fortawesome/free-brands-svg-icons'
import {rhythm} from '../../utils/typography'
import {StaticQuery, graphql} from 'gatsby'
import '../../components/Layout/Layout.css'
import styled from '@emotion/styled'
import profileSmall from '../../images/profileSmall.png'

export const InfoLayout = styled.ul`
    margin: 3rem auto 0.5rem;
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
    maxwidth: 150px;
    maxheight: 150px;
    margin-top: ${rhythm(1 / 4)};
    margin-left: ${rhythm(1 / 2)};
`

const ImageImg = styled.img`
    max-height: 150px;
    max-width: 150px;
    margin-right: ${rhythm(1 / 4)};
    margin-top: ${rhythm(1 / 2)};
    margin-bottom: ${rhythm(1 / 2)};
    padding-right: ${rhythm(1 / 4)};
    max-width: 150px;
    max-height: 150px;
    float: left;
    outside: circle();
    shape-outside: circle();
`

export const TextLi = styled.li`
    text-align: left;
    margin-left: ${rhythm(1 / 2)};
    margin-bottom: ${rhythm(-1 / 4)};
    margin-top: ${rhythm(1 / 1)};
    margin-right: ${rhythm(1 / 8)};
`

export const ParaStyle = styled.p`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`

export const SocialMediaUl = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    margin-top: 2.5rem;
    & li {
        box-shadow: none;
        display: flex;
        margin-right: 40px;
        list-style-type: none;
        padding-bottom: 1rem;
        &:first-of-type {
            margin-left: 1.25rem;
        }
        & a {
            color: #268bd2;
            box-shadow: none;
            padding: 5px 8px;
        }
    }
`

export const SocialStrong = styled.strong`
    color: #268bd2;
`

const InfoPage = ({author}) => (
    <StaticQuery
        query={graphql`
            query InfoPageQuery {
                site {
                    siteMetadata {
                        siteTitle
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
            <InfoLayout>
                <InfoTextUl>
                    <ImageDiv>
                        <ImageImg src={profileSmall} alt={author} />
                        <TextLi>
                            <p>
                                I design, develop, and teach experiences that
                                make people's lives simpler. When I’ m not
                                coding, I love to go to the countryside to
                                recharge, watch Film Noir and mystery movies,
                                listen to music, ponder over surrealist art, and
                                create exotic cuisine.
                            </p>
                            <ParaStyle>
                                <a
                                    href={`https://twitter.com/${
                                        data.site.siteMetadata.social.twitter
                                    }`}
                                    target="blank"
                                >
                                    <SocialStrong>
                                        <FontAwesomeIcon
                                            icon={faTwitter}
                                            size="2x"
                                            style={{
                                                borderRadius: '50%',
                                                width: '30px',
                                                height: '30px',
                                                marginRight: '1.5rem',
                                                marginLeft: '-1.5rem',
                                            }}
                                        />
                                    </SocialStrong>
                                </a>
                                <a
                                    href={`https://github.com/${
                                        data.site.siteMetadata.social.github
                                    }`}
                                    target="blank"
                                >
                                    <SocialStrong>
                                        <FontAwesomeIcon
                                            icon={faGithubAlt}
                                            size="2x"
                                            style={{
                                                width: '30px',
                                                height: '30px',
                                                marginRight: '1.5rem',
                                            }}
                                        />
                                    </SocialStrong>
                                </a>
                                <a
                                    href={`https://www.linkedin.com/in/${
                                        data.site.siteMetadata.social.linkedin
                                    }`}
                                    target="blank"
                                >
                                    <SocialStrong>
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
                            </ParaStyle>
                        </TextLi>
                    </ImageDiv>
                </InfoTextUl>
            </InfoLayout>
        )}
    />
)

export default InfoPage
