import {render} from 'react-testing-library'
import React from 'react'

import Header from '../Header/Header'

describe(`Header`, () => {
    it(`renders siteTitle`, () => {
        const siteTitle = `Maria D. Campbell`

        const {getByText} = render(<Header siteTitle={siteTitle} />)
        const title = getByText(siteTitle)
        expect(title).toBeInTheDocument()
    })
})
