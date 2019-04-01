import React from 'react'
import styled from "@emotion/styled"

const PrevNextUl = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 0.5rem;
    margin-top: -1rem;;
`

const PrevNextLi = styled.li`
    list-style-type: none;
`

const PrevNext = (props) => {
    const { prev, next } = props
    return (
        <PrevNextUl>
            {prev && <PrevNextLi><a href={prev.fields.slug} style={{ color: '#cb4b16', boxShadow: 'none' }}>
                ← Previous {' '}<br />
            </a></PrevNextLi>}
            {next && <PrevNextLi><a href={next.fields.slug} style={{ color: '#cb4b16', boxShadow: 'none' }}>
                Next → {' '}<br />
            </a></PrevNextLi>}
        </PrevNextUl>
    )
}

export default PrevNext