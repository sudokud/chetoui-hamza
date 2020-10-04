import React from "react"
import { useEffect } from 'react'
import useSound from 'use-sound'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row } from 'react-bootstrap'
import styled from 'styled-components'




const Classes = styled.div`
  .container{
   padding:96px;
   margin-top:96px;
  }
  img{
    margin:8px;
  }
`

const IndexPage = () => {
  const [play] = useSound("audio/menu-button.wav", { volume: 0.5 })
  useEffect(() => {
    play()
    return;
  }, [play]);
  return (
    <Layout>
      <SEO title="Home" />
      <Classes>
        <Container fluid="lg" className="container">
          <Row className="d-flex justify-content-center">
            <h1>:~$ Welcome my 8bits website|</h1>
          </Row>
        </Container>
        <Container fluid="lg" className="mt-5 container">
          <h4>About me</h4>
          <p>a self taugth web developer ... </p>
        </Container>
        <Container fluid="lg" className="mt-5 container">
          <h4>Tech Stack</h4>
          <img src="img/Bootstrap.svg" alt="alternative" width="128px" />
          <img src="img/ReactJS.svg" alt="alternative" width="128px" />
          <img src="img/GitHub.svg" alt="alternative" width="128px" />
          <img src="img/Netlify.svg" alt="alternative" width="128px" />
          <img src="img/NodeJS.svg" alt="alternative" width="128px" />
          <img src="img/StrapiJS.svg" alt="alternative" width="128px" />
          <img src="img/GatsbyJS.svg" alt="alternative" width="128px" />
        </Container>
      </Classes>
    </Layout>
  )
}


export default IndexPage
