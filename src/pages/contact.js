import React from "react"
// import { useEffect } from 'react'
// import useSound from 'use-sound'
import { Container, Row } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from '../components/form'
// import { motion } from "framer-motion"



const Connect = ({ location }) => {
    // const [play] = useSound("audio/menu-button.wav", { volume: 0.25 })
    // useEffect(() => {
    //     play()
    //     return;
    // }, [play]);
    return (
        <Layout animateKey={location.key}>
            <SEO title="Connect" />
            <Container
                fluid="lg"
                className="mt-5">
                <Row className="p-4 pt-2 justify-content-center">
                    <Form />
                </Row>
                <Row className="justify-content-center p-2 mt-4">
                    <p
                        className="mx-2">
                        <a href="https://twitter.com/okuninoshi">
                            <img src="img/twitter.svg" alt="twitter" width="42px" />
                        </a>
                    </p>
                    <p className="mx-2">
                        <a href="https://instagram.com/sudokud">
                            <img src="img/Instagram.svg" alt="Instagram" width="42px" />
                        </a>
                    </p>
                    <p className="mx-2">
                        <a href="https://www.linkedin.com/in/chetoui-hamza/">
                            <img src="img/In.svg" alt="in" width="42px" />
                        </a>
                    </p>
                </Row>
            </Container>
        </Layout>
    )
}


export default Connect