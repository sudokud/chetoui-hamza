import React, { useContext } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Context from '../store/context'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Nav from './nav'




const Classes = styled.div`
    .MuiPaper-root{
        background-color:${props => props.theme.dark.background};
        min-height:63px;
    }
`
const NavWrapper = styled(motion.div)`
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
`


export default function SwipeableTemporaryDrawer() {
    const { state, dispatch } = useContext(Context)
    const toggleDrawer = () => {
        return dispatch({ type: "TOGGLE_DRAWER" })
    }
    return (
        <Classes isDark={state.isDark}>
            <SwipeableDrawer
                variant="persistent"
                anchor="bottom"
                open={state.isOpen}
            >
                <NavWrapper>
                    <Nav onClick={toggleDrawer} />
                </NavWrapper>
            </SwipeableDrawer>
        </Classes>
    );
}
