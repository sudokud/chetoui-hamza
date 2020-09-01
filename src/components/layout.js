import React, { useContext } from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import Context from '../store/context'
import { ThemeContext, createGlobalStyle } from 'styled-components'





const Center = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
`
const GlobalStyle = createGlobalStyle`
  * > *{
    box-sizing: border-box;
  }
    html,body{
        font-family:${props => props.theme.fonts.main};
        height:100%;
        margin:0;
        padding:0;
        background:${props => (props.isDark ? props.theme.dark.background : props.theme.light.background)};
    }
`

const Layout = ({ children }) => {
  const { state } = useContext(Context);
  // const theme = useContext(ThemeContext)

  // console.log("state : ", state, "theme :", theme);

  return (
    <Center>
      <GlobalStyle isDark={state.isDark} />
      {children}
    </Center>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
