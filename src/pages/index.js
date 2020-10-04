import React from "react"
// import { useEffect } from 'react'
// import useSound from 'use-sound'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { motion } from 'framer-motion'



const Classes = styled.div`
  .container{
   padding:96px;
   margin-top:96px;
   border:1px solid deeppink;
  }
  img{
    margin:8px;
  }
`
const techImages = [
  { icon: "img/Bootstrap.svg", link: "https://getbootstrap.com/" },
  { icon: "img/GatsbyJS.svg", link: "https://www.gatsbyjs.com/" },
  { icon: "img/ReactJS.svg", link: "https://reactjs.org/" },
  { icon: "img/Netlify.svg", link: "https://www.netlify.com/" },
  { icon: "img/GitHub.svg", link: "https://github.com/" },
  { icon: "img/StrapiJS.svg", link: "https://strapi.io/" }
]

const MotionRow = styled(motion.custom(Row))``
const MotionCol = styled(motion.custom(Col))``




const IndexPage = () => {
  // const [play] = useSound("audio/menu-button.wav", { volume: 0.5 })
  // useEffect(() => {
  //   play()
  //   return;
  // }, [play]);
  return (
    <Layout>
      <SEO title="Home" />
      <Classes>
        <Container fluid="lg" className="container">
          <Row className="d-flex justify-content-center">
            <h1>:~$ Welcome To My 8bits Website
              <motion.span
                animate={{
                  opacity: [0, 1, 0, 1, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.61803398875
                }}>
                |
              </motion.span></h1>
          </Row>
        </Container>
        <Container fluid="lg" className="mt-5 container">
          <h4>About me</h4>
          <p>a self taugth web developer ... </p>
        </Container>
        <Container
          fluid="lg"
          className="mt-5 container">
          <h4 className="d-block">My Tech Stack</h4>
          <MotionRow
            className="  
            d-flex 
            justify-content-center
            align-items-center ">
            {techImages.map((item, i) => {
              return (
                <MotionCol
                  key={i}
                  animate={{
                    y: [-10, 10, -10]
                  }}
                  transition={{ repeat: Infinity, duration: 1.61, delay: 1 * i }}>
                  <a
                    href={item.link}>
                    <img src={item.icon} alt="alternative" width="96px" />
                  </a>
                </MotionCol>
              )
            })}
          </MotionRow>
        </Container>
      </Classes>
    </Layout>
  )
}


export default IndexPage
