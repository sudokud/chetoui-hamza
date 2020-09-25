import React, { useContext } from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import Context from '../store/context'
import { createGlobalStyle } from 'styled-components'
import DarkModeToggle from "react-dark-mode-toggle";
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import RetroScreenImage from '../images/screen.png'


const GlobalStyle = createGlobalStyle`
  * > *{
    box-sizing: border-box;
  }
    html,body{
        font-family:${props => props.theme.fonts.secondary};
        font-style: normal;
        color:${props => (props.isDark ? props.theme.dark.text : props.theme.light.text)};
        height:100%;
        width:100%;
        margin:0;
        padding:0;
        background:${props => (props.isDark ? props.theme.palette.main : props.theme.light.background)};
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
`
const H4 = styled.h4`
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


const Layout = ({ children }) => {

  const { state, dispatch } = useContext(Context)

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
                dispatch({ type: "TOGGLE_DARK_MODE" })
              }}
              checked={state.isDark}
              size={62}
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Link className="mx-2 py-3" to={"/blog"}>Blog</Link>
          <Link className="mx-2 py-3" to={"/connect"}>connect</Link>
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
