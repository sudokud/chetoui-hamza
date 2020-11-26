import React from "react"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Layout from "../components/layout"
import Technologies from '../components/technologies'
import LatestPosts from '../components/latestPost'
import Scene from "../components/scene"
import { useContext } from 'react'
import Context from '../store/context'
import Sky from '../components/sky'

const Classes = styled.div`
.container-override{
  border:1px solid deeppink;
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
    h2{
      font-size:2.7rem;
    }
    p{
      font-size:1.5rem;
    }
}
`



const IndexPage = ({ location }) => {
  const { state } = useContext(Context)
  return (
    <>
      <Layout animateKey={location.key}>
        <SEO title="home page" />
        <Classes>
          <Container fluid className="px-0 py-0 position-relative">
            <Sky
              isDark={state.isDark} />
            <Scene />
          </Container>

          <Container fluid="lg" className="container">
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
