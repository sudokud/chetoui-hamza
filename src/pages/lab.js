import React from "react"
// import { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"




const Lab = ({ location }) => {
    return (
        <Layout animateKey={location.key}>
            <SEO title="Lab" />
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

