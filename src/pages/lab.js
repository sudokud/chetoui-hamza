import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
// import Isometrics from "../components/isometrics"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Lab = ({ location }) => {
    return (
        <Layout animateKey={location.key}>
            <SEO title="Lab" />
            <Container fluid="lg" className="my-5 p-5" >
                <Row className="d-flex justify-content-center">
                    <Col xs={6} className="text-center">
                        <img width="100%" src="https://media.giphy.com/media/kHItTUhmy50guDJH2H/giphy.gif" alt="have a great day" />
                    </Col>
                </Row>
                {/* <Row className="d-flex justify-content-center mt-5">
                    <Col xs={6} className="text-center">
                        <Isometrics />
                    </Col>
                </Row> */}
            </Container>
        </Layout>
    )
}


export default Lab

