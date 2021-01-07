import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'
import { Container } from "react-bootstrap"
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container className="mt-5 pt-5">
      <div>
        <h1>NOT FOUND</h1>
      </div>
      <div>
        <p>You just hit a route that doesn&#39;t exist... the sadness.  <span role="img" aria-label="emogi">😔</span></p>
      </div>
      <div>
        <Link to="/">back to home page</Link>
      </div>
      {/* <img src="/img/smb_castle-flag.png" alt="mario" /> */}
    </Container>
  </Layout>
)

export default NotFoundPage
