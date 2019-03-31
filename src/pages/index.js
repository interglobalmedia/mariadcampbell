import React from 'react'
import travel from '../img/chris-lawton-346402-unsplash.jpg'
import styled from '@emotion/styled'
import Header from '../components/Header/Header'

const Container = styled.div`
    background: rgba(255,255,255,0.4);
    overflow-y: hidden;
`

const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-right: auto;
    margin-bottom: 0;
    margin-left: auto;
`

const BackgroundImage = styled.img`
    position: fixed; 
    top: 0; 
    left: 0; 
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
`

const FooterStyle = styled.footer`
    text-align: center;
    padding-bottom: 0.5rem;
    @media (max-width: 374px) {
        position: fixed;
        left: 1rem;
        right: 1rem;
        bottom: 1.5rem;
        height: 30px;
        width: 90%;
    }
`

const IndexPage = ({ siteTitle }) => {
    return (
        <Container>
            <div className="Site">
                <Header />
                <div className='Site-content'>
                    <ImageWrapper>
                        <BackgroundImage src={travel} alt={siteTitle} />
                    </ImageWrapper>
                </div>
                <FooterStyle>
                    Built with
                {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>{` `}
                    © {new Date().getFullYear()} Maria D. Campbell
                </FooterStyle>
            </div>
        </Container>
    )
}

export default IndexPage