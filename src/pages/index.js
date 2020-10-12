import React from "react"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Layout from "../components/layout"
import Earth from "../components/earth"
// import { Link } from "gatsby"
// import RetroButton from "../components/retroButton"



const Classes = styled.div`
  .container{
   margin-top:96px;
   position:relative;
 
  }
  a{
    margin:8px;
    padding:16px 8px;
  }
  img{
    filter: grayscale(90%);
  }
  img:hover{
    filter: grayscale(5%);
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
      font-size:25.88px;
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
                <h1> <span style={{ fontSize: "smaller" }} role="img" aria-label="hello">👋</span> Hey, I'm Hamza !!</h1>
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
            <h3 className="d-block">Technologies i use</h3>
            <Row>
              <Col sm={4}
                className="d-flex flex-column align-items-center">
                <h2>DATA SOURCES</h2>

                <a
                  href="https://strapi.io/">
                  <img src="img/StrapiJS.svg" alt="Strapi" width="128px" />
                </a>
                <a
                  href="https://www.netlifycms.org/">
                  <img src="img/NetlifyCMS.svg" alt="Netlify CMS" width="128px" />
                </a>

              </Col>
              <Col sm={4}
                className="d-flex flex-column align-items-center">
                <h2>BUILD</h2>

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

              </Col>
              <Col sm={4}
                className="d-flex flex-column align-items-center">
                <h2>DEPLOY 	&amp; CDN</h2>

                <a
                  href="https://www.netlify.com/" >
                  <img src="img/Netlify.svg" alt="Netlify" width="128px" />
                </a>
                <a
                  href="https://github.com/" >
                  <img src="img/GitHub.svg" alt="Netlify" width="128px" />
                </a>
              </Col>
            </Row>
          </Container>
        </Classes>
      </Layout>
    </>
  )
}


export default IndexPage
