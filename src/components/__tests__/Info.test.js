import React from 'react'
import {render} from 'react-testing-library'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faLinkedinIn,
    faGithubAlt,
} from '@fortawesome/free-brands-svg-icons'
import {ParaStyle, SocialStrong} from '../Info/Info'

describe('InfoPage', () => {
    it(`should render social follow links`, () => {
        const data = {
            site: {
                siteMetadata: {
                    social: {
                        twitter: `letsbsocial1`,
                        github: `interglobalmedia`,
                        linkedin: `mariacampbell`,
                    },
                },
            },
        }
        const {container} = render(
            <ParaStyle>
                <a
                    href={`https://twitter.com${
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
                    href={`https://github.com${
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
                    href={`https://linkedin.com/in/${
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
            </ParaStyle>,
        )
        expect(container).toBeInTheDocument()
    })
})
