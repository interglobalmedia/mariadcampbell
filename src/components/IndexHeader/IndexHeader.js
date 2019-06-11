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
import '../Header/SideBar.scss'

export const HeaderStyle = styled.header`
    width: 90%;
`

export const HeaderDiv = styled.div`
    // box-shadow: none;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
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
        // box-shadow: none;
    }
    & a:hover {
        color: rgb(89, 219, 209);
    }
`

const IndexHeader = () => (
    <HeaderStyle>
        <div className="side-navigation">
            <HeaderDiv>
                <Menu>
                    <HeaderSideMenuP>
                        <Link to="/" activeStyle={{color: 'rgb(226,39,74)'}}>
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                        <Link
                            to="/blog"
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
    </HeaderStyle>
)

IndexHeader.propTypes = {
    siteTitle: PropTypes.string,
}

IndexHeader.defaultProps = {
    siteTitle: `Maria D. Campbell`,
}

export default IndexHeader
