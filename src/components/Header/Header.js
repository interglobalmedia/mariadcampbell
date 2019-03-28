import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faInfo, faHome, faBlog } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import '../Layout/Layout.css'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#fff',
      height: '70px',
      margin: '0 auto',
      position: 'fixed',
      width: '100%',
      zIndex: '1',
      boxShadow: '0 1px 4px rgba(0,0,0,0.2)'
    }}
  >
    <div className="header"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <h1 className="header-title" style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-start' }}>
        <Link
          to="/"
          style={{
            fontSize: '1.3rem',
            color: `rgba(0. 0, 0, 0.8)`,
            paddingLeft: `1.0875rem`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <p style={{ float: 'right', marginTop: '-2.875rem' }}>
        <Link
          to="/"
          style={{
            fontSize: '1.3rem',
            fontWeight: '100',
            color: `rgba(0,0,0,0.8)`,
            padding: `0 1.0875rem`,
          }}
        >
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link
          to="/blog/"
          style={{
            fontSize: '1.3rem',
            fontWeight: '100',
            color: `rgba(0,0,0,0.8)`,
            padding: `0 1.0875rem`,
          }}
        >
          <FontAwesomeIcon icon={faBlog} />
        </Link>
        <Link
          to="/info/info"
          style={{
            fontSize: '1.3rem',
            fontWeight: '100',
            color: `rgba(0,0,0,0.8)`,
            padding: ` 0 1.0875rem`,
          }}
        >
          <FontAwesomeIcon icon={faInfo} />
        </Link>
        <Link
          to="/tags/tags"
          style={{
            fontSize: '1.3rem',
            fontWeight: 'normal',
            color: `rgba(0,0,0,0.8)`,
            padding: `0 1.0875rem`,
          }}
        >
          <FontAwesomeIcon icon={faHashtag} />
        </Link>
      </p>
    </div>
  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Maria D. Campbell`,
}

export default Header
