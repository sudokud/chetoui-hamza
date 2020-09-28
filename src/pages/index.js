import React from "react"
import { useEffect } from 'react'
import useSound from 'use-sound'
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => {
  const [play] = useSound("audio/menu-button.wav", { volume: 0.5 })
  useEffect(() => {
    play()
    return;
  }, [play]);
  return (
    <Layout>
      <SEO title="Home" />
    </Layout>)
}


export default IndexPage
