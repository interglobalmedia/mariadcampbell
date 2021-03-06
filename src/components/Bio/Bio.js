import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'
import {rhythm} from '../../utils/typography'
import profileSmall from '../../images/profileSmall.png'
import {SocialStrong} from '../Info/Info'

const BioContainerWrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${rhythm(2.5)};
`

const BioContainerDiv = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-top: 1px solid rgba(0, 0, 0, 0.8);
    border-bottom: 1px solid rgba(0, 0, 0, 0.8);
    padding-top: 1.5rem;
    padding-right: 0.25rem;
    background: rgba(147, 173, 92, 0.4);
    & a {
        color: #cb4b16;
        box-shadow: none;
        & :hover {
            text-decoration: underline;
        }
    }
`

function Bio() {
    return (
        <StaticQuery
            query={graphql`
                query BioQuery {
                    site {
                        siteMetadata {
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
            render={data => {
                const {author, social} = data.site.siteMetadata
                return (
                    <BioContainerWrapperDiv as="div">
                        <BioContainerDiv as="div">
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
                                Written by{' '}
                                <SocialStrong as="strong">
                                    {author}
                                </SocialStrong>{' '}
                                who lives and works in New York City building
                                useful things. Be sure to follow me on{' '}
                                <a
                                    href={`https://twitter.com/${
                                        social.twitter
                                    }`}
                                >
                                    Twitter
                                </a>
                                ,{' '}
                                <a href={`https://github.com/${social.github}`}>
                                    Github
                                </a>{' '}
                                or{' '}
                                <a
                                    href={`https://www.linkedin.com/in/${
                                        social.linkedin
                                    }`}
                                >
                                    Linkedin
                                </a>
                                !
                            </p>
                        </BioContainerDiv>
                    </BioContainerWrapperDiv>
                )
            }}
        />
    )
}

export default Bio
