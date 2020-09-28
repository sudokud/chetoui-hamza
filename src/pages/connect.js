import React from "react"
import { useEffect } from 'react'
import useSound from 'use-sound'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from '../components/form'
const Connect = (props) => {
    const [play] = useSound("audio/menu-button.wav", { volume: 0.25 })
    useEffect(() => {
        play()
        return;
    }, [play]);
    return (
        <Layout>
            <SEO title="Connect" />
            <Container fluid="lg" className="mt-5">
                <Row className="p-4 pt-2">
                    <Col md={6} className="d-flex justify-content-center">
                        <Form />
                    </Col>
                    <Col md={6} className="d-flex align-items-center flex-column p-5 mt-3">
                        <p>
                            <a href="https://twitter.com/okuninoshi"> <span>&gt;</span> twitter</a>
                        </p>
                        <p>
                            <a href="https://instagram.com/sudokud"> <span>&gt;</span> instagram</a>
                        </p>
                        <p>
                            <a href="https://github.com/okuninoshi"> <span>&gt;</span> gihub</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Layout>)
}


export default Connect