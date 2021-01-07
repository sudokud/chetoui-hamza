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
    width:170px;
    overflow:hidden;
}
`

export default function () {
    return (

        <Container fluid="lg">
            <Styles>

                <motion.div
                    className="Row"
                >
                    <motion.p
                        animate={{ x: [-170, 230, 230, -130], y: [0, 0, 170, 170] }}
                        transition={{
                            times: [0, 0.66, 0.66, 1],
                            duration: 9,
                            repeat: Infinity,
                            type: "tween"
                        }}>
                        vanilla
                </motion.p>
                    <motion.p
                        animate={{ x: [-180, 230, 230, -170], y: [0, 0, 170, 170] }}
                        transition={{
                            times: [0, 0.66, 0.66, 1],
                            duration: 9,
                            repeat: Infinity,
                            type: "tween"
                        }}>
                        chocolate
                </motion.p>
                </motion.div>
            </Styles>
        </Container>
    )
}