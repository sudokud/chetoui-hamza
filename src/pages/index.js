import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { motion } from 'framer-motion'



const Classes = styled.div`
  .container{
   padding:96px;
  }
  a{
    margin:32px;
    padding:32px;
  }
  h2{
    margin-bottom:32px;
  }
`


const IndexPage = ({ location }) => {
  return (
    <Layout animateKey={location.key}>

      <SEO title="Home" />
      <Classes>
        <Container fluid="lg" className="container">
          <Row className="d-flex justify-content-center">
            <Col className="d-flex align-items-center justify-content-center">
              <div>
                <h1>Hey, I'm Hamza !!</h1>
                <p>I’m a JAMSTACK developer, and designer.</p>
              </div>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <img src="img/jamstack.png" alt="jamstack" width="256px" />
            </Col>
          </Row>
        </Container>
        <Container fluid="lg" className="mt-5 container">
          <h4>About me</h4>
          <p>a self taugth web developer ... </p>
        </Container>
        <Container
          fluid="lg"
          className="mt-5 container">
          <h3 className="d-block">Technologies i use</h3>

          <Row className="p-5 d-flex flex-column align-items-center">
            <h2>DATA SOURCES</h2>
            <div>
              <a
                href="https://strapi.io/">
                <img src="img/StrapiJS.svg" alt="Strapi" width="128px" />
              </a>
              <a
                href="https://www.netlifycms.org/">
                <img src="img/NetlifyCMS.svg" alt="Netlify CMS" width="128px" />
              </a>
            </div>
          </Row>

          <Row className="p-5 d-flex flex-column align-items-center">
            <h2>BUILD</h2>
            <div>
              <a
                href="https://getbootstrap.com/">
                <img src="img/Bootstrap.svg" alt="Bootstrap" width="128px" />
              </a>
              <a
                href="https://reactjs.org/">
                <img src="img/ReactJS.svg" alt="React" width="128px" />
              </a>
              <a
                href="https://www.gatsbyjs.com/">
                <img src="img/GatsbyJS.svg" alt="Gatsby" width="128px" />
              </a>
            </div>
          </Row>

          <Row className="p-5 d-flex flex-column align-items-center">
            <h2>DEPLOY 	&amp; CDN</h2>
            <div>
              <a
                href="https://www.netlify.com/" >
                <img src="img/Netlify.svg" alt="Netlify" width="128px" />
              </a>
            </div>
          </Row>
        </Container>
      </Classes>
    </Layout>
  )
}


export default IndexPage
