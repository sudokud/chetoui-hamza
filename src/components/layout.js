import React, { useContext } from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import Context from '../store/context'
import { createGlobalStyle } from 'styled-components'
import DarkModeToggle from "react-dark-mode-toggle";
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import RetroScreenImage from '../images/screen.png'
import Pizzicato from 'pizzicato'


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
        background:${props => (props.isDark ? props.theme.dark.background : props.theme.light.background)};
        transition:all 0.4s ease;
        box-sizing: border-box;

    }
    a{
      text-decoration:none;
      font-family:${props => props.theme.fonts.main};
    }
    a:hover{
      text-decoration:none;
    }
    span { font-family:${props => props.theme.fonts.secondary};}
`
const H4 = styled.h4`
  font-family:${props => props.theme.fonts.secondary};
  font-size:calc(${props => props.theme.golden_ratio}px * 21);
  color:${props => (props.isDark ? props.theme.dark.text : props.theme.palette.secondary)}
`

const RetroScreen = styled.div`
  position:fixed;
  
  top:0;
  right:0;
  bottom:0;
  left:0;
  background-image:url(${RetroScreenImage});
  pointer-events: none;
  z-index:200;
  filter: opacity(10%);
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
      border-top:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.secondary)};
      border-left:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.secondary)};
    }
    .top_right_corner {
      position:absolute;
      top:-10px;
      right:-10px;
      width:10px;
      height:10px;
      border-top:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.secondary)};
      border-right:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.secondary)};
    }
    .bottom_right_corner {
      position:absolute;
      bottom:-10px;
      right:-10px;
      width:10px;
      height:10px;
      border-bottom:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.secondary)};
      border-right:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.secondary)};
    }
    .bottom_left_corner {
      position:absolute;
      bottom:-10px;
      left:-10px;
      width:10px;
      height:10px;
      border-bottom:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.secondary)};
      border-left:1px solid ${props => (props.isDark ? props.theme.dark.text : props.theme.palette.secondary)};
    }
`


const Layout = ({ children }) => {

  const { state, dispatch } = useContext(Context)
  const lightToggle = new Pizzicato.Sound('../audio/toggle.mp3')
  return (
    <>
      <RetroScreen />
      <GlobalStyle isDark={state.isDark} />
      <Container fluid="lg">
        <Row className="pt-4">
          <Col xs={8}>
            <Link to={"/"}>
              <H4 isDark={state.isDark}>Chetoui hamza</H4>
            </Link>
          </Col>
          <Col xs={4} className="text-right">
            <DarkModeToggle
              onChange={() => {
                lightToggle.play()
                dispatch({ type: "TOGGLE_DARK_MODE" })
              }}
              checked={state.isDark}
              size={62}
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <NavContainer>
            <div className="top_left_corner"></div>
            <div className="top_right_corner"></div>
            <div className="bottom_right_corner"></div>
            <div className="bottom_left_corner"></div>
            <Link className="mx-2 py-3" to={"/"}>Home</Link>
            <Link className="mx-2 py-3" to={"/posts"}>Posts</Link>
            <Link className="mx-2 py-3" to={"/connect"}>Contact</Link>
          </NavContainer>

        </Row>
      </Container>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
