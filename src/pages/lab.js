import React, { useState, useEffect } from "react"
import { Container, Row } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Scene from '../components/scene'



const Lab = ({ location }) => {
    return (
        <Layout animateKey={location.key}>
            <SEO title="Lab" />
            <Scene />
            <Container fluid="lg" className="my-5 p-5" >
                <Row className="d-flex justify-content-center">
                    <h1>
                        Building...
                    </h1>
                </Row>
            </Container>
        </Layout>
    )
}


export default Lab

