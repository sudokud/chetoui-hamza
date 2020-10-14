import React from "react"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Layout from "../components/layout"
import Earth from "../components/earth"
import Technologies from '../components/technologies'


const Classes = styled.div`
  .container{
   margin-top:96px;
   position:relative;
 
  }
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
      font-size:4rem;
    }
    p{
      font-size:1.5rem;
    }
    @media (max-width: 575.98px)
    {
      h1{
        font-size:3rem;
      } 
    }
}
`

const IndexPage = ({ location }) => {

  return (
    <>
      <Layout animateKey={location.key}>
        <SEO title="Home" />
        <Classes>
          <Container fluid="lg" className="container">
            <Row>
              <Col className="hi" sm={7}>
                <span className="mx-3" role="img" aria-label="hello">👋</span>
                <h1>Hey, I'm Hamza</h1>
                <p>I’m a web developer,a designer, and a JAMSTACK enthusiast</p>
              </Col>
              <Col style={{ minHeight: "400px" }} sm={5}>
                <Earth />
              </Col>
            </Row>
          </Container>
          <Container
            fluid="lg"
            className="mt-5 container">
            <Technologies />
          </Container>
        </Classes>
      </Layout>
    </>
  )
}


export default IndexPage
