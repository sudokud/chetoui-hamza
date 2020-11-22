import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Chetouihamza from './chetouihamza';
import Nav from './nav';
import Slide from '@material-ui/core/Slide';
import styled from 'styled-components';
import { Container, Row, Col } from "react-bootstrap"
import ToggleDarkMode from "./toggleDarkMode";



function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}
const SAppBar = styled(AppBar)`
background: ${props => props.theme.palette.dark_purple};
`

export default function AppNav() {
    return (
        <React.Fragment>
            <HideOnScroll>
                <SAppBar>
                    <Toolbar>
                        <Container fluid="lg">
                            <Row>
                                <Col xs={12} md={3} className="d-flex align-items-center justify-content-left">
                                    <Chetouihamza />
                                </Col>
                                <Col xs={12} md={6}
                                    className="d-flex align-items-center justify-content-center">
                                    <Nav />
                                </Col>
                                <Col className="d-flex align-items-center justify-content-end">
                                    <ToggleDarkMode />
                                </Col>
                            </Row>
                        </Container>
                    </Toolbar>
                </SAppBar>
            </HideOnScroll>
        </React.Fragment>
    );
}