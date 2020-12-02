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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuButton from './menu-button';
import HamButton from './hamburger-button';


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
    z-index:1300;
`

export default function AppNav() {
    const matches = useMediaQuery('(min-width:960px)');

    return (
        <React.Fragment>
            <HideOnScroll>
                <SAppBar>
                    <Toolbar>
                        <Container fluid="lg" className="px-0 px-md-3">
                            <Row>
                                <Col xs={7} md={4} className="d-flex align-items-center justify-content-left">
                                    <Chetouihamza />
                                </Col>
                                {matches && (

                                    <Col md={6}
                                        className="d-flex align-items-center justify-content-end">
                                        <Nav />
                                    </Col>
                                )
                                }
                                <Col className="d-flex align-items-center justify-content-end">
                                    <ToggleDarkMode />
                                    {!matches && (
                                        <>
                                            {/* <MenuButton
                                                className="ml-4 mr-2"
                                                transition={{ type: "spring", stiffness: 60, damping: 10 }}
                                            /> */}
                                            <HamButton
                                                transition={{ type: "spring", stiffness: 130, damping: 10 }} />
                                        </>
                                    )
                                    }
                                </Col>
                            </Row>
                        </Container>
                    </Toolbar>
                </SAppBar>
            </HideOnScroll>
        </React.Fragment>
    );
}