import React from "react"
import { Container, Row } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Connect = () => {
    return (
        <Layout>
            <SEO title="Connect" />
            <Container fluid="lg">
                <Row className="d-flex justify-content-center">
                    <a href="https://twitter.com">twitter</a>
                    <a href="https://instagram.com">instagram</a>
                    <a href="https://linkedin.com">in</a>
                    <a href="https://github.com">gihub</a>
                </Row>
            </Container>
        </Layout>)
}


export default Connect