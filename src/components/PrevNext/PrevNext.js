import React from 'react'
import styled from '@emotion/styled'

const PrevNextUl = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 0.5rem;
    margin-top: -1rem;
`

const PrevNextLi = styled.li`
    list-style-type: none;
    letter-spacing: 0.07em;
    & a {
        color: #cb4b16; 
        box-shadow: none;
        & :hover {
            text-decoration: underline;
        }
    }
`

const PrevNext = (props) => {
    const { prev, next } = props
    return (
        <PrevNextUl>
            {prev && <PrevNextLi><a href={prev.fields.slug}>
                ← Previous {' '}<br />
            </a></PrevNextLi>}
            {next && <PrevNextLi><a href={next.fields.slug}>
                Next → {' '}<br />
            </a></PrevNextLi>}
        </PrevNextUl>
    )
}

export default PrevNext