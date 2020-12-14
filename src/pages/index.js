import React from "react"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Layout from "../components/layout"
import Technologies from '../components/technologies'
import LatestPosts from '../components/latestPost'
import Sky from '../components/sky'
import Scene from "../components/scene"
// import Flavours from "../components/flavours"


const Classes = styled.div`
  a{
    margin:8px;
    padding:16px 8px;
  }
  .hi{
    display:flex;
    flex-direction:column;
    justify-content:center;
    pointer-events:none;
    h1{
      font-size:3.5rem;
    }
    p{
      font-size:1.19rem;
    }
}
`
const IndexPage = ({ location }) => {
  return (
    <>
      <Layout animateKey={location.key}>
        <SEO title="Huis" />
        <Classes>
          <Sky />
          <Scene />
          <Container fluid="lg" className="container-override">
            <Row>
              <Col className="hi" sm={7}>
                <h1>Chetoui Hamza</h1>
                <p>web developer, a designer, and a JAMSTACK enthusiast</p>
              </Col>
            </Row>
          </Container>
          <Container
            fluid="lg"
            className="mt-5 container-override">
            <Technologies />
          </Container>
          {/* <Flavours /> */}
          <LatestPosts />
        </Classes>
      </Layout>
    </>
  )
}


export default IndexPage
