import React, { useContext } from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import Context from '../store/context'
import { createGlobalStyle } from 'styled-components'
import Footer from './footer'
import { motion, AnimatePresence } from "framer-motion"
import AppNav from './MuiAppBar'
import SwipeableTemporaryDrawer from "./menu"

const GlobalStyle = createGlobalStyle`
  * > *{
    box-sizing: border-box;
  }
    html,body{
        font-family:${props => props.theme.fonts.main};
        font-weight: 400;
        font-style: normal;
        font-size:16px;
        color:${props => (props.isDark ? props.theme.dark.text : props.theme.light.text)};
        margin:0;
        padding:0;
        background-color:${props => (props.isDark ? props.theme.dark.background : props.theme.light.background)};
        box-sizing: border-box;
        overflow-x:hidden;
    }
    a{
      text-decoration:none;
    }
    a:hover{
      text-decoration:none;
    }
    p,input,textarea{
      font-family:${props => props.theme.fonts.read};
      font-style: normal;
    }
    p{
      color:${props => props.isDark ? props.theme.light.background : props.theme.dark.background};
    }
    h1,h2,h3,h4,h5,h6{
      font-family:${props => props.theme.fonts.titles};
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
  &::before{
    content:"";
    position:absolute;
    top:0;
    width:100%;
    height:4px;
    background:linear-gradient(90deg, #007bff, #d6f756);
  }
`



const Layout = (props) => {
  const { children, animateKey } = props;
  const { state } = useContext(Context)
  return (
    <React.Fragment>
      <GlobalStyle isDark={state.isDark} />
      <SwipeableTemporaryDrawer />
      <AppNav />
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
      <RetroScreen />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout



