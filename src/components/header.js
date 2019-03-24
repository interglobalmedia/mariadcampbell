import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faInfo, faHome } from '@fortawesome/free-solid-svg-icons'
import './header.css'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `transparent`,
      height: '70px',
      margin: '0 auto',
    }}
  >
    <div className="header"
      style={{
        margin: `1.0875rem auto 0`,
        maxWidth: 960,
        // display: 'flex',
        // justifyContent: 'space-between',
        // alignItems: 'center',
      }}
    >
      <h1 className="header-title" style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-start' }}>
        <Link
          to="/"
          style={{
            fontSize: '1.3rem',
            color: `rgba(0. 0, 0, 0.8)`,
            textDecoration: `none`,
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
            textDecoration: 'none',
            color: `rgba(0,0,0,0.8)`,
            padding: `0 1.0875rem`,
          }}
        >
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link
          to="/bio"
          style={{
            fontSize: '1.3rem',
            fontWeight: '100',
            textDecoration: 'none',
            color: `rgba(0,0,0,0.8)`,
            padding: ` 0 1.0875rem`,
          }}
        >
          <FontAwesomeIcon icon={faInfo} />
        </Link>
        <Link
          to="/tags"
          style={{
            fontSize: '1.3rem',
            fontWeight: 'normal',
            textDecoration: 'none',
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
