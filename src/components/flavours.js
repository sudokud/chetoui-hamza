import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Row, Col, Container } from 'react-bootstrap'


const Styles = styled.div`
position:relative;
border:1px solid cyan;
overflow:hidden;
height:64px;
display:flex;
justify-content:center;
.Row{
    position:absolute;
    border:1px solid deeppink;
    display:flex;
    flex-direction:row;
}
`

export default function () {
    return (

        <Container fluid="lg">
            <Styles>

                <motion.div
                    className="Row"
                >
                    <Col className="Col">
                        <motion.p initial={{ y: -64 }}
                            animate={{ y: 64 }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                type: "keyframes",
                                repeatType: "loop"
                            }}>
                            vanilla
                </motion.p>
                    </Col>
                    <Col className="Col">
                        <motion.p initial={{ x: -128 }}
                            animate={{ x: 128 }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                // type: "keyframes",
                                type: "tween",
                                repeatType: "loop"
                            }}>
                            vanilla
                </motion.p>
                    </Col>
                </motion.div>
            </Styles>
        </Container>
    )
}