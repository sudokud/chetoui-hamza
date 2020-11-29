import React, { useContext } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Button from '@material-ui/core/Button';
import Context from '../store/context'
import styled from 'styled-components'


const Classes = styled.div`
.MuiPaper-root{
   background-color: #684656;
   width:61vw;
}
`
export default function SwipeableTemporaryDrawer() {

    const { state } = useContext(Context)

    // const toggleDrawer = (open) => (event) => {
    //     if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //         return;
    //     }

    //     setOpen(open);
    // };

    return (
        <Classes>
            <SwipeableDrawer
                variant="persistent"
                anchor="left"
                open={state.isOpen}
                swipeAreaWidth={50}
            // onClose={toggleDrawer(false)}
            // onOpen={toggleDrawer(true)}
            >
                hello world
        </SwipeableDrawer>
        </Classes>
    );
}
