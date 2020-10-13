import React, { useContext } from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import Context from '../store/context'
import { createGlobalStyle } from 'styled-components'
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
// import RetroScreenImage from '../images/screen.png'
// import useSound from 'use-sound'
import Footer from './footer'
import { motion, AnimatePresence } from "framer-motion";
import ToggleDarkMode from "./toggleDarkMode"



const GlobalStyle = createGlobalStyle`
  * > *{
    box-sizing: border-box;
  }
    html,body{
        font-family:${props => props.theme.fonts.secondary};
        font-style: normal;
        font-size:16px;
        color:${props => (props.isDark ? props.theme.dark.text : props.theme.light.text)};
        height:100%;
        width:100%;
        margin:0;
        padding:0;
        background-color:${props => (props.isDark ? props.theme.dark.background : props.theme.light.background)};
        transition:all 0.4s ease;
        box-sizing: border-box;
        overflow-x: hidden;

    }
    canvas{
      background-color:${props => (props.isDark ? props.theme.dark.background : props.theme.light.background)};
      height:100%;
      width:100%;
      margin:0;
      padding:0;
    }
    canvas:focus{
      outline: transparent solid 1px;
    }
    a{
      text-decoration:none;
      font-family:${props => props.theme.fonts.main};
    }
    a:hover{
      text-decoration:none;
    }
    span { font-family:${props => props.theme.fonts.secondary};}
    p,input,textarea{
      font-family:${props => props.theme.fonts.read};
      font-style: normal;
    }
    p{
      display:flex;
      align-items:center;
    }
    h2,h3{
      margin-bottom:32px;
    }
    h1,h2,h3,h4,h5,h6{
      font-family:${props => props.theme.fonts.secondary};
    }
`

const RetroScreen = styled.div`
  position:fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  background:linear-gradient(rgba(127, 127, 127, 0.1) 1px, transparent 1px) 0% 0% / 3px 3px;
  pointer-events: none;
  z-index:200;
  filter:opacity(0.8);
`
const NavContainer = styled.div`
    position:relative;
    padding:16px;
    .top_left_corner {
      position:absolute;
      top:-10px;
      left:-10px;
      width:10px;
      height:10px;
      border-top:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.eggplant)};
      border-left:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.eggplant)};
    }
    .top_right_corner {
      position:absolute;
      top:-10px;
      right:-10px;
      width:10px;
      height:10px;
      border-top:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.eggplant)};
      border-right:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.eggplant)};
    }
    .bottom_right_corner {
      position:absolute;
      bottom:-10px;
      right:-10px;
      width:10px;
      height:10px;
      border-bottom:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.eggplant)};
      border-right:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.eggplant)};
    }
    .bottom_left_corner {
      position:absolute;
      bottom:-10px;
      left:-10px;
      width:10px;
      height:10px;
      border-bottom:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.eggplant)};
      border-left:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.eggplant)};
    }
`



const Layout = ({ children, animateKey }) => {
  const { state } = useContext(Context)
  // const [playToggle] = useSound(
  //   'audio/toggle.mp3', { volume: 0.25 }
  // )
  return (
    <React.Fragment>
      <RetroScreen />
      <GlobalStyle isDark={state.isDark} />
      <Container fluid="lg">
        <Row className="pt-4">
          <Col xs={9}>
            <Link to={"/"}>
              <img src='/img/console3030.png' alt='console' />
              sudokud
            </Link>
          </Col>
          <Col xs={3} className="d-flex justify-content-end">
            <ToggleDarkMode />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mt-5 mt-md-3">
          <NavContainer>
            <div className="top_left_corner"></div>
            <div className="top_right_corner"></div>
            <div className="bottom_right_corner"></div>
            <div className="bottom_left_corner"></div>
            <Link className="mx-2 py-3" to={"/"}>Home</Link>
            <Link className="mx-2 py-3" to={"/contact"}>Contact</Link>
            <Link className="mx-2 py-3" to={"/posts"}>Posts</Link>
          </NavContainer>
        </Row>
      </Container>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={animateKey}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}>
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
