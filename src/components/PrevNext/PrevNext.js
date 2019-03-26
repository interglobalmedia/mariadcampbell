import React from 'react'
import './PrevNext.css'

const PrevNext = (props) => {
    const { prev, next } = props
    return (
        <ul className="prev-next">
            {prev && <li className="prev"><a href={prev.fields.slug}>
                ← Previous {' '}<br />
            </a></li>}
            {next && <li className="next"><a href={next.fields.slug}>
                Next → {' '}<br />

            </a></li >}
        </ul>
    )
}

export default PrevNext