import React from "react"
import { useContext } from 'react'

import { Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import Context from '../store/context'
import LeftButton from './buttons/left-button'
import MiddleButton from "./buttons/middle-button"
import RightButton from "./buttons/right-button"
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"
const Classes = styled.div`
    background:${props => props.isDark ? "#1c1124" : "#f2f2f3"};
    .divider{
        width:100%;
        height:10px;
        box-shadow:-16px 8px 6px 0 ${props => (props.isDark ? "#0e0912" : "#a4a0a7")};
        background:${props => (props.isDark ? "#020102" : "#87818b")};
        margin-top:64px;
    }
    .container{
        padding:32px;
        margin-top:32px;
    }
`

const Footer = () => {
    const { state } = useContext(Context)

    return (
        <Classes isDark={state.isDark}>
            <div className="divider"></div>
            <Container fluid="lg" className="container">
                <Row noGutters className="d-flex justify-content-center my-3">
                    <LeftButton href="https://instagram.com/sudokud">
                        <FaGithub color="#f2f2f3" fontSize="24px" />
                    </LeftButton>
                    <MiddleButton href="https://twitter.com/okuninoshi">
                        <FaTwitter color="#f2f2f3" fontSize="24px" />
                    </MiddleButton>
                    <RightButton href="https://github.com/okuninoshi">
                        <FaInstagram color="#f2f2f3" fontSize="24px" />
                    </RightButton>
                </Row>
                <Row noGutters className="d-flex justify-content-center">
                    <p className="text-center">
                        © 2020-present chetoui hamza. All right reserved
                    </p>
                </Row>
                <Row noGutters className="d-flex justify-content-center">
                    <p>Made with</p>
                    <span className="mx-3">
                        <img
                            width="31px" height="26,7px"
                            src={state.isDark ? "/img/dark_heart.gif" : "/img/light_heart.gif"}
                            alt="❤️" />
                    </span>
                    <p>and Passion</p>
                </Row>
            </Container>
        </Classes>
    )
}


export default Footer
