import React from 'react'
// import { useContext } from 'react'
import { Container } from 'react-bootstrap'
// import Context from '../store/context'
import styled from 'styled-components'
// import { motion } from 'framer-motion'
import Tokyo from './tokyo/tokyo'


// const Sky = styled(motion.div)`
//     position: absolute;
//     width: 100%;
//     height: 81%;
//     left: 0;
//     top: 0;
//     padding:0;
//     margin:0;
//     background: ${props => props.isDark ?
//         "linear-gradient(180deg, #162D55 0%, #1C1124 100%)" :
//         "linear-gradient(180deg, #4B75E8 3.12%, #54C0FF 57.81%, #F2F2F3 100%)"
//     };
// `
const MainWrapper = styled.div`   
    position: relative;
    max-width: 1279px;
    margin:auto;
`

const Scene = () => {

    // const { state } = useContext(Context)
    return (
        <Container fluid className="px-0">
            <MainWrapper>
                {/* <Sky
                    isDark={state.isDark} /> */}
                <Tokyo />
            </MainWrapper>
        </Container>
    )
}
export default Scene