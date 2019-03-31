import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import './Share.css'

const Share = props => {
    const twitter = `https://twitter.com/intent/tweet?url=${props.url +
        props.pathname}&text=${props.title} by @letsbsocial1`
    const fb = `https://www.facebook.com/sharer/sharer.php?u=${props.url +
        props.pathname}&text=${props.title}`
    const linkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${props.url + props.pathname}&text=${props.title}`
    return (
        <ul className="social" style={{ boxShadow: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem', marginBottom: '2rem' }}>
            <li>
                <a href={fb} target="blank" style={{ color: 'rgba(0,0,0,0.8)' }}>
                    <FontAwesomeIcon icon={faFacebookF} size='2x' style={{ width: '36px', height: '36px' }} />
                </a>
            </li>
            <li>
                <a href={twitter} target="blank" style={{ color: 'rgba(0,0,0,0.8)' }}>
                    <FontAwesomeIcon icon={faTwitter} size='2x' style={{ width: '36px', height: '36px' }} />
                </a>
            </li>
            <li>
                <a href={linkedin} target="blank" style={{ color: 'rgba(0,0,0,0.8)' }}>
                    <FontAwesomeIcon icon={faLinkedinIn} size='2x' style={{ width: '36px', height: '36px' }} />
                </a>
            </li>
        </ul>
    )
}

export default Share