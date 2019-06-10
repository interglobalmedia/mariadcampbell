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
        color: rgb(226, 39, 74);
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
                    <a
                        href={prev.fields.slug}
                        title={`visit link to newer post to read more recent content`}
                    >
                        <span>← Newer</span>
                    </a>
                    <br />
                </PrevNextLi>
            )}
            {next && (
                <PrevNextLi>
                    <a
                        href={next.fields.slug}
                        title={`visit link to older post to read older content`}
                    >
                        <span>Older →</span>
                        <br />
                    </a>
                </PrevNextLi>
            )}
        </PrevNextUl>
    )
}

export default PrevNext
