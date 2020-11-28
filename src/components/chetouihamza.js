import React from 'react'
import styled from 'styled-components'
// import { motion } from 'framer-motion'
import { Link } from 'gatsby'


const Logo = styled.h3`
    font-size:24px;
    color: #d6f756;
    padding:0;
    margin:0;
    letter-spacing:2.3px;
`


const Chetouihamza = () => {
    return (
        <Link to={"/"}>
            <Logo >
                Chetoui Hamza
            </Logo>
        </Link>
    )
}

export default Chetouihamza