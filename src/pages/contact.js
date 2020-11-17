import React from 'react'
// import { useState, useEffect } from "react"
import { Container, Row } from 'react-bootstrap'
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
                    <h1> Let's Talk
                    </h1>
                </Row>
                <Row className="p-4">
                    <p>
                        leave me a message here, or you can reach me on my social media.
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