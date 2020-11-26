import React from 'react'
import styled from 'styled-components'


const Gradient = styled.div`
    position: absolute;
    width: 100%;
    height: 81%;
    left: 0;
    top: 0;
    padding:0;
    margin:0;
    background: ${props => props.isDark ?
        "linear-gradient(180deg, #162D55 0%, #1C1124 100%)" :
        "linear-gradient(180deg, #4B75E8 3.12%, #54C0FF 57.81%, #F2F2F3 100%)"
    };
`


const Sky = (props) => {

    const { isDark } = props
    return (
        <Gradient isDark={isDark} />
    )
}

export default Sky