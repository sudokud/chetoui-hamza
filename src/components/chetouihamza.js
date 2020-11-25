import React from 'react'
import styled from 'styled-components'
// import { motion } from 'framer-motion'
import { Link } from 'gatsby'


const Logo = styled.h2`
    font-size:24px;
    color: #d6f756;
    padding:0;
    margin:0;
    text-shadow: 
    1px 0px 0px #1c1124, 
    0px 1px 0px #007bff, 
    2px 1px 0px #1c1124, 
    1px 2px 0px #007bff, 
    3px 2px 0px #1c1124, 
    2px 3px 0px #007bff, 
    4px 3px 0px #1c1124, 
    3px 4px 0px #007bff, 
    5px 4px 0px #1c1124, 
    4px 5px 0px #007bff, 
    6px 5px 0px #1c1124, 
    5px 6px 0px #007bff, 
    7px 6px 0px #1c1124;
`


const Chetouihamza = () => {
    return (
        <Link to={"/"}>
            <Logo >
                &#60; &#47; &#62;
            </Logo>
        </Link>
    )
}

export default Chetouihamza