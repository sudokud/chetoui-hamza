import React from "react"
import { Container, Row } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Btn from '../components/button'

const Connect = () => {
    return (
        <Layout>
            <SEO title="Connect" />
            <Container fluid="lg">
                <Row className="d-flex align-items-center flex-column p-5 mt-3">
                    <p>
                        <a href="https://twitter.com/okuninoshi"> <span>&gt;</span> twitter</a>
                    </p>
                    <p>
                        <a href="https://instagram.com/sudokud"> <span>&gt;</span> instagram</a>
                    </p>
                    <p>
                        <a href="https://github.com/okuninoshi"> <span>&gt;</span> gihub</a>
                    </p>
                </Row>
                <Row
                    className="d-flex justify-content-center">
                    <form className="p-5">
                        <div>
                            <label for="name">Name</label><br />
                            <input type="text" name="name" id="name"></input>
                        </div>
                        <div>
                            <label for="email">Email</label><br />
                            <input type="email" name="email" id="email"></input>
                        </div>
                        <div>
                            <Btn text="submit" type="submit" />
                        </div>
                    </form>
                </Row>
            </Container>
        </Layout>)
}


export default Connect