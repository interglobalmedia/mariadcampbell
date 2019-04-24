import React from 'react'
import {render} from 'react-testing-library'
import {CreditWrapperDiv} from '../Footer/Footer'

describe('Footer', () => {
    it('should render a credits div', () => {
        const {container} = render(<CreditWrapperDiv />)
        expect(container).toBeInTheDocument()
    })
})
