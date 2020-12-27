import React from 'react'
import styled from 'styled-components'
const Styles = styled.span`
    padding:8px;
    .tagWrapepr{
        padding:5px;
        background-color:#684656;
        color:#f2f2f3;
        border-radius:7px;
    }
`

const Tag = ({ tagName, ...props }) => {
    return (
        <Styles {...props}>
            <span className="tagWrapepr">
                #{tagName}
            </span>
        </Styles>
    )
}

export default Tag