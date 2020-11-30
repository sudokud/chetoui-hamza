import React from 'react'
// import { useState, useEffect } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from '../components/form'




function Connect({ location }) {
    // const [offset, setOffset] = useState(0);

    // useEffect(() => {
    //     function handleScroll() {
    //         setOffset(window.pageYOffset);
    //     }

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    return (
        <Layout animateKey={location.key}>
            <SEO title="Connect" />
            <Container
                fluid="lg"
                className="mt-5">
                <Row className="p-4">
                    <h1> Get in touch </h1>
                </Row>
                <Row className="p-4">
                    <p>
                        Got a burning question regarding <em>JAMStack</em>,
                        Need a new <em>Website</em>, or just anything in general.
                        I am happy to talk.
                    </p>
                    <p>
                        Just send me a message using the form below or you can send me a DM on
                        <a className="mx-2" href="https://twitter.com/okuninoshi">Twitter.</a>
                    </p>
                </Row>
                <Row className="p-4 pt-2 justify-content-center" id="c0ntact">
                    <Form />
                </Row>
            </Container>
        </Layout>
    )
}


export default Connect