import { Link } from "gatsby"
import { elastic as Menu } from 'react-burger-menu'
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faInfo, faHome, faBlog } from '@fortawesome/free-solid-svg-icons'
import '../Header/Header.css'
import '../Layout/Layout.css'
import './SideBar.css'

const Header = ({ siteTitle }) => (
  <header style={{ display: 'flex', width: '90%' }}>

    <div className='side-navigation'>
      <div className="header"
        style={{
          boxShadow: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'space-between',
          justifyContent: 'center',
        }}
      >
        <Menu>
          <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', outline: 'none' }}>
            <Link className='menu-item'
              to="/"
              style={{
                fontSize: '1.3rem',
                fontWeight: '100',
                color: `rgba(0,0,0,0.8)`,
                padding: `1.0875rem`,
                boxShadow: 'none'
              }}
            >
              <FontAwesomeIcon icon={faHome} style={{ color: '#fdf6e3' }} />
            </Link>
            <Link
              to="/blog/"
              style={{
                fontSize: '1.3rem',
                fontWeight: '100',
                color: `rgba(0,0,0,0.8)`,
                padding: `1.0875rem`,
                boxShadow: 'none'
              }}
            >
              <FontAwesomeIcon icon={faBlog} style={{ color: '#fdf6e3' }} />
            </Link>
            <Link
              to="/info/info"
              style={{
                fontSize: '1.3rem',
                fontWeight: '100',
                color: `rgba(0,0,0,0.8)`,
                padding: `1.0875rem`,
                boxShadow: 'none'
              }}
            >
              <FontAwesomeIcon icon={faInfo} style={{ color: '#fdf6e3' }} />
            </Link>
            <Link
              to="/tags/tags"
              style={{
                fontSize: '1.3rem',
                fontWeight: 'normal',
                color: `rgba(0,0,0,0.8)`,
                padding: `1.0875rem`,
                boxShadow: 'none'
              }}
            >
              <FontAwesomeIcon icon={faHashtag} style={{ color: '#fdf6e3' }} />
            </Link>
          </p>
        </Menu>
      </div>
    </div>
    <h1 className="header-title" style={{ marginTop: '1.5rem', color: 'rgba(0,0,0,0.9)' }}>
      <Link className='menu-item'
        to="/"
        style={{
          fontSize: '1.3rem',
          fontWeight: '400',
          padding: `1.0875rem`,
          marginLeft: '0.5rem',
          boxShadow: 'none',
          letterSpacing: '0.07em'
        }}>
        {siteTitle}
      </Link>
    </h1>
  </header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Maria D. Campbell`
}

export default Header
