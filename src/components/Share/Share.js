import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import './Share.css'
import styled from '@emotion/styled'

const SocialUl = styled.ul`
    box-shadow: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 2.5rem;
`

const SocialLi = styled.li`
    list-style-type: none;
    margin-right: 1.5rem;
`

const Share = props => {
    const twitter = `https://twitter.com/intent/tweet?url=${props.url +
        props.pathname}&text=${props.title} by @letsbsocial1`
    const fb = `https://www.facebook.com/sharer/sharer.php?u=${props.url +
        props.pathname}&text=${props.title}`
    const linkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${props.url + props.pathname}&text=${props.title}`
    return (
        <SocialUl>
            <SocialLi>
                <a href={fb} target="blank" style={{ color: '#cb4b16', boxShadow: 'none', border: '1px solid rgba(0,0,0,0.8)', borderRadius: '50%', paddingTop: '17px', paddingBottom: '8px', paddingLeft: '8px', paddingRight: '8px', background: 'rgba(29,202,255, 1)' }}>
                    <FontAwesomeIcon icon={faFacebookF} size='2x' style={{ width: '30px', height: '30px' }} />
                </a>
            </SocialLi>
            <SocialLi>
                <a href={twitter} target="blank" style={{ color: '#cb4b16', boxShadow: 'none', border: '1px solid rgba(0,0,0,0.8)', borderRadius: '50%', paddingTop: '20px', paddingBottom: '5px', paddingLeft: '8px', paddingRight: '8px', background: 'rgba(29,202,255, 1)' }}>
                    <FontAwesomeIcon icon={faTwitter} size='2x' style={{ width: '30px', height: '36px' }} />
                </a>
            </SocialLi>
            <SocialLi>
                <a href={linkedin} target="blank" style={{ color: '#cb4b16', boxShadow: 'none', border: '1px solid rgba(0,0,0,0.8)', borderRadius: '50%', paddingTop: '17px', paddingBottom: '8px', paddingLeft: '8px', paddingRight: '8px', background: 'rgba(29,202,255, 1)' }}>
                    <FontAwesomeIcon icon={faLinkedinIn} size='2x' style={{ width: '30px', height: '30px' }} />
                </a>
            </SocialLi>
        </SocialUl>
    )
}

export default Share