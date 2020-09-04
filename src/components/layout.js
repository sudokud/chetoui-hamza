import React, { useContext } from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import Context from '../store/context'
import { createGlobalStyle } from 'styled-components'
import DarkModeToggle from "react-dark-mode-toggle";
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"





const GlobalStyle = createGlobalStyle`
  * > *{
    box-sizing: border-box;
  }
    html,body{
        font-family:${props => props.theme.fonts.main};
        height:100%;
        width:100%;
        margin:0;
        padding:0;
        background:${props => (props.isDark ? props.theme.palette.main : props.theme.light.background)};
        transition:all 0.4s ease;
    }
    a{
      text-decoration:none;
    }
    a:hover{
      text-decoration:none;
    }
`
const H4 = styled.h4`
  color:${props => (props.isDark ? props.theme.dark.text : props.theme.palette.secondary)}
`


const Layout = ({ children }) => {

  const { state, dispatch } = useContext(Context)

  return (
    <>
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
      </Container>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
