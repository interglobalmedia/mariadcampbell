import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import styled from '@emotion/styled'

const SocialUl = styled.ul`
    box-shadow: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 3rem;
    margin-left: 0;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1rem;
    width: 100%;
    & li {
        // margin-right: 1.5rem;
        list-style-type: none;
        & a {
            color: rgba(132,0,88, 1);
            // background: whitesmoke;
            box-shadow: none; 
            // border-radius: 50%; 
            padding-top: 17px; 
            padding-bottom: 8px;
            padding-left: 8px; 
            padding-right: 8px; 
            & :nth-of-type(2) {
                padding-top: 20px; 
                padding-bottom: 5px;

            }
        }
    }
    @media (max-width: 374px) {
        margin-left: 1rem;
    }
`

const Share = props => {
    const twitter = `https://twitter.com/intent/tweet?url=${props.url +
        props.pathname}&text=${props.title} by @letsbsocial1`
    const fb = `https://www.facebook.com/sharer/sharer.php?u=${props.url +
        props.pathname}&text=${props.title}`
    const linkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${props.url + props.pathname}&text=${props.title}`
    return (
        <SocialUl>
            <li>
                <a href={fb} target="blank">
                    <FontAwesomeIcon icon={faFacebookF} size='2x' style={{ width: '24px', height: '24px', marginLeft: '-0.5rem' }} />Facebook
                </a>
            </li>
            <li>
                <a href={twitter} target="blank">
                    <FontAwesomeIcon icon={faTwitter} size='2x' style={{ width: '24px', height: '24px', marginRight: '0.25rem' }} />Twitter
                </a>
            </li>
            <li>
                <a href={linkedin} target="blank">
                    <FontAwesomeIcon icon={faLinkedinIn} size='2x' style={{ width: '24px', height: '24px', marginRight: '0.25rem' }} />Linkedin
                </a>
            </li>
        </SocialUl>
    )
}

export default Share