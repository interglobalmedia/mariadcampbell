import React from 'react'
import Layout from '../components/Layout/Layout'
import travel from '../images/chris-lawton-346402-unsplash.jpg'

const IndexPage = () => {
    return (
        <div className='Site'>
            <div className='Site-content'>
                <Layout>
                    <img src={travel} />
                </Layout>
            </div>
        </div>
    )
}

export default IndexPage