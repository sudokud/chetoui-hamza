import React from "react"
import { useState } from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
// import { motion } from 'framer-motion'
// import Btn from '../components/button'
// import Form from '../components/form'

const Classes = styled.div`
  .container{
   padding-top:96px;
  }
  a{
    margin:8px;
    padding:16px 8px;
  }
  h2,h3{
    margin-bottom:32px;
  }
  .backdrop{
    position:absolute;
    background:#33333377;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:1000;
  }
  .hire-me{
    position:absolute;
    background:#434343;
    top:25%;
    left:25%;
    right:25%;
    bottom:25%;
    z-index:1100;
  }
`


const IndexPage = ({ location }) => {
  const [open, setopen] = useState(false)

  const handleModel = () => {
    return (
      setopen(!open)
    )
  }
  return (
    <Layout animateKey={location.key}>

      <SEO title="Home" />
      <Classes>
        <Container fluid="lg" className="container">
          <Row
            className="d-flex justify-content-center">
            <Col className="d-flex align-items-center justify-content-center">
              <div>
                <h1> <span>👋</span> Hey, I'm Hamza !!</h1>
                <p>I’m a JAMSTACK developer, and a designer.</p>
              </div>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <img src="img/jamstack.png" alt="jamstack" />
            </Col>
          </Row>
        </Container>
        {/* <Container>
          <iframe
            src="https://remotehour.com/widget/lekp8GBy8wc8SPwgF9iACtxje0v1?inline=true"
            width="100%" height="500px" marginwidth="0" marginheight="0" frameborder="0"
            style={{ border: "none", background: "#e8e8e8" }} allow="microphone; camera">
          </iframe>
        </Container> */}
        <Container
          fluid="lg"
          className="mt-5 container">
          <h3 className="d-block">Technologies i use</h3>
          <Row>
            <Col xs={4}
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
            <Col xs={4}
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
            <Col xs={4}
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
        <Container>
          <Row className="p-4 d-flex justify-content-center">
            <Col sm={4} className="d-flex justify-content-center">
              <p>i like to work as a freelancer
              but if you want an extra man on your team for a specific project
              </p>
            </Col>
            <Col sm={4} className="">
              <button onClick={handleModel} type="button" className="btn btn-primary">
                Hire Me
              </button>
            </Col>
          </Row>
          {open &&
            <div className="backdrop" onClick={handleModel}>
              <div className="hire-me"> hello world</div>
            </div>
          }
        </Container>
      </Classes>
    </Layout>
  )
}


export default IndexPage
