import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import styled from '@emotion/styled'

const SocialUl = styled.ul`
    box-shadow: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 2.5rem;
    & li {
        margin-right: 1.5rem;
        list-style-type: none;
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
            & :nth-of-type(2) {
                padding-top: 20px; 
                padding-bottom: 5px;

            }
        }
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
                    <FontAwesomeIcon icon={faFacebookF} size='2x' style={{ width: '30px', height: '30px' }} />
                </a>
            </li>
            <li>
                <a href={twitter} target="blank">
                    <FontAwesomeIcon icon={faTwitter} size='2x' style={{ width: '30px', height: '30px' }} />
                </a>
            </li>
            <li>
                <a href={linkedin} target="blank">
                    <FontAwesomeIcon icon={faLinkedinIn} size='2x' style={{ width: '30px', height: '30px' }} />
                </a>
            </li>
        </SocialUl>
    )
}

export default Share