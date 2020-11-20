import React from 'react'
import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import Context from '../store/context'
// import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import Tokyo from './tokyo/tokyo'

const transition = {
    type: "spring",
    stiffness: 5
}
const Sky = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    padding:0;
    margin:0;
    background: ${props => props.isDark ?
        "linear-gradient(180deg, #162D55 0%, #1C1124 100%)" :
        "linear-gradient(180deg, #4B75E8 3.12%, #54C0FF 57.81%, #F2F2F3 100%)"
    };
    z-index:-1;
`

const Scene = () => {

    const { state } = useContext(Context)
    return (
        <Container fluid className="px-0 position-relative">
            <div style={{
                position: "relative",
                maxWidth: "1279px",
                margin: "auto",
                overflow: "hidden",
                zIndex: 1
            }}>
                <Sky isDark={state.isDark} />
                <Tokyo />
            </div>
        </Container>
    )
}
export default Scene