import { Link } from "gatsby"
import { elastic as Menu } from 'react-burger-menu'
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faInfo, faHome, faBlog } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'
import './SideBar.css'

const HeaderStyle = styled.header`
  width: 90%;
`

const HeaderDiv = styled.div`
  box-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
`

const HeaderTitle = styled.h1`
  margin-top: 1.25rem; 
  color: rgba(0,0,0,0.9); 
  font-size: 130%;
  & a {
    color: rgba(0,0,0,0.9);
    font-size: 1.3rem;
    font-weight: 400;
    margin-left: 0.5rem;
    letter-spacing: 0.07em;
    padding: 1.0875rem;
    box-shadow: none;
      & :hover {
      text-decoration: underline;
      color: #cb4b16;
    }
  }
`
const HeaderSideMenuP = styled.p`
  outline: none;
  & a {
    display: flex; 
    flex-direction: column;
    align-items: center;
    color: #fdf6e3;
    font-size: 1.5rem;
    padding: 1.0875rem;
    box-shadow: none;
  }
  & a:hover {
      color: rgba(29,202,255, 1);
    }
`

const Header = ({ siteTitle }) => (
  <HeaderStyle>

    <div className='side-navigation'>
      <HeaderDiv>
        <Menu>
          <HeaderSideMenuP>
            <Link
              to="/"
              activeStyle={{ color: '#cb4b16' }}
            >
              <FontAwesomeIcon icon={faHome} />
            </Link>
            <Link
              to="/blog/"
              activeStyle={{ color: '#cb4b16' }}
            >
              <FontAwesomeIcon icon={faBlog} />
            </Link>
            <Link
              to="/tags/tags"
              activeStyle={{ color: '#cb4b16' }}
            >
              <FontAwesomeIcon icon={faHashtag} />
            </Link>
          </HeaderSideMenuP>
        </Menu>
      </HeaderDiv>
    </div>
    <HeaderTitle>
      <Link className='menu-item'
        to="/"
        activeStyle={{ color: '#cb4b16' }}>
        {siteTitle}
      </Link>
    </HeaderTitle>
  </HeaderStyle>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Maria D. Campbell`
}

export default Header
