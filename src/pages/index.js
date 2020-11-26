import React from "react"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Layout from "../components/layout"
import Technologies from '../components/technologies'
import LatestPosts from '../components/latestPost'
import Sky from '../components/sky'
import Scene from "../components/scene"


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
    h2{
      font-size:2.7rem;
    }
    p{
      font-size:1.5rem;
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
                <h2>
                  <span className="mx-3" role="img" aria-label="hello">👋</span>
                  Hey, I'm Hamza</h2>
                <p>I’m a web developer,a designer, and a JAMSTACK enthusiast</p>
              </Col>
            </Row>
          </Container>
          <Container
            fluid="lg"
            className="mt-5 container-override">
            <Technologies />
          </Container>
          <LatestPosts />
        </Classes>
      </Layout>
    </>
  )
}


export default IndexPage
