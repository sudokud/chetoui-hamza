import React from "react"
import { useContext } from 'react'

import { Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import Context from '../store/context'




const Classes = styled.div`
  .container{
   padding:32px;
   margin-top:32px;
  }
`

const Footer = () => {
    const { state } = useContext(Context)

    return (
        <Classes isDark={state.isDark}>
            <Container fluid="lg" className="container">
                <Row className="d-flex justify-content-center">
                    <p
                        className="mx-2">
                        <a href="https://twitter.com/okuninoshi">
                            <img src="img/twitter.svg" alt="twitter" width="42px" />
                        </a>
                    </p>
                    <p className="mx-2">
                        <a href="https://instagram.com/sudokud">
                            <img src="img/Instagram.svg" alt="Instagram" width="42px" />
                        </a>
                    </p>
                    <p className="mx-2">
                        <a href="https://www.linkedin.com/in/chetoui-hamza/">
                            <img src="img/In.svg" alt="in" width="42px" />
                        </a>
                    </p>
                </Row>
                <Row className="d-flex justify-content-center">
                    <p>
                        © 2020-present chetoui hamza. All right reserved
                    </p>
                </Row>
                <Row className="d-flex justify-content-center">
                    <p>Made with</p>
                    <img
                        className="mx-3"
                        width="31px" height="26,7px"
                        src={state.isDark ? "img/dark_heart.gif" : "img/light_heart.gif"}
                        alt="made with love" />
                    <p>and Passion</p>
                </Row>
            </Container>
        </Classes>
    )
}


export default Footer