import React from 'react'
import styled from '@emotion/styled'

export const PrevNextUl = styled.ul`
    width: 100%;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    margin-left: 0.25rem;
    margin-right: 1rem;
    margin-top: -1rem;
`

export const PrevNextLi = styled.li`
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

const PrevNext = props => {
    const {prev, next} = props
    return (
        <PrevNextUl>
            {prev && (
                <PrevNextLi>
                    <a href={prev.fields.slug}>
                        ← Prev <br />
                    </a>
                </PrevNextLi>
            )}
            {next && (
                <PrevNextLi>
                    <a href={next.fields.slug}>
                        Next → <br />
                    </a>
                </PrevNextLi>
            )}
        </PrevNextUl>
    )
}

export default PrevNext
