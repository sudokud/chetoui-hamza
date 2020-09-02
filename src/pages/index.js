import React, { useContext } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import Context from '../store/context'


const H3 = styled.h3`
  color:${props => (props.isDark ? props.theme.dark.text : props.theme.light.text)}
`
const IndexPage = () => {

  const { state, dispatch } = useContext(Context)

  return (
    <Layout>
      <SEO title="Home" />
      <H3 isDark={state.isDark}>Chetoui hamza</H3>
      <button onClick={() => {
        dispatch({ type: "TOGGLE_DARK_MODE" })
      }}>Toggle Dark Mode</button>
    </Layout>)
}


export default IndexPage
