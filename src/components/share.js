import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import './share.css'

const Share = props => {
    const twitter = `https://twitter.com/intent/tweet?url=${props.url +
        props.pathname}&text=${props.title} by @letsbsocial1`
    const fb = `https://www.facebook.com/sharer/sharer.php?u=${props.url +
        props.pathname}&text=${props.title}`
    const linkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${props.url + props.pathname}&text=${props.title}`
    return (
        <div>
            <ul className="social">
                <li>
                    <a href={fb} target="blank">
                        <FontAwesomeIcon icon={faFacebookF} size='2x' style={{ border: '1px solid rgba(0, 0, 0, 0.8)', borderRadius: '50%', width: '36px', height: '36px', padding: '5px' }} />
                    </a>
                </li>
                <li>
                    <a href={twitter} target="blank">
                        <FontAwesomeIcon icon={faTwitter} size='2x' style={{ border: '1px solid rgba(0, 0, 0, 0.8)', borderRadius: '50%', width: '36px', height: '36px', padding: '5px' }} />
                    </a>
                </li>
                <li>
                    <a href={linkedin} target="blank">
                        <FontAwesomeIcon icon={faLinkedinIn} size='2x' style={{ border: '1px solid rgba(0, 0, 0, 0.8)', borderRadius: '50%', width: '36px', height: '36px', padding: '5px' }} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Share