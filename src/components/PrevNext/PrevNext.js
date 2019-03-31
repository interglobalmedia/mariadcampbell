import React from 'react'
import styled from "@emotion/styled"

const PrevNextContainer = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 0.5rem;
`

const PrevNext = (props) => {
    const { prev, next } = props
    return (
        <PrevNextContainer>
            {prev && <li className="prev"><a href={prev.fields.slug} >
                ← Previous {' '}<br />
            </a></li>}
            {next && <li className="next"><a href={next.fields.slug}>
                Next → {' '}<br />
            </a></li >}
        </PrevNextContainer>
    )
}

export default PrevNext