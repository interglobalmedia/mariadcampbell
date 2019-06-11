import {Link} from 'gatsby'
import {elastic as Menu} from 'react-burger-menu'
import PropTypes from 'prop-types'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faHome,
    faBlog,
    faDirections,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'
import './SideBar.scss'

export const HeaderStyle = styled.header`
    width: 90%;
`

export const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
`

export const HeaderTitle = styled.h1`
    margin-top: 1.25rem;
    font-size: 130%;
    & a {
        color: rgb(25, 13, 8);
        font-size: 1.3rem;
        font-weight: 400;
        margin-left: 0.5rem;
        letter-spacing: 0.07em;
        padding: 1.0875rem;
        box-shadow: none;
        & :hover {
            text-decoration: underline;
            color: rgb(226, 39, 74);
        }
    }
`
export const HeaderSideMenuP = styled.p`
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
        color: rgb(89, 219, 209);
    }
`

const Header = ({siteTitle}) => (
    <HeaderStyle>
        <div className="side-navigation">
            <HeaderDiv>
                <Menu>
                    <HeaderSideMenuP>
                        <Link to="/" activeStyle={{color: 'rgb(226,39,74)'}}>
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                        <Link
                            to="/blog/"
                            activeStyle={{color: 'rgb(226,39,74)'}}
                        >
                            <FontAwesomeIcon icon={faBlog} />
                        </Link>
                        <Link
                            to="/sitemap"
                            activeStyle={{color: 'rgb(226,39,74)'}}
                        >
                            <FontAwesomeIcon icon={faDirections} />
                        </Link>
                        <Link
                            to="/contact"
                            activeStyle={{color: 'rgb(226,39,74)'}}
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </Link>
                    </HeaderSideMenuP>
                </Menu>
            </HeaderDiv>
        </div>
        <HeaderTitle>
            <Link
                className="menu-item"
                to="/"
                activeStyle={{color: 'rgb(226,39,74)'}}
            >
                {siteTitle}
            </Link>
        </HeaderTitle>
    </HeaderStyle>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: `Maria D. Campbell`,
}

export default Header
