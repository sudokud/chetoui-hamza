import React from "react"
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/card'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Container style={{
        padding: "128px 0",
        margin: "128px 0",
        overflow: "hidden"
      }}>
        place holder
      </Container>
      <Container fluid="lg">
        <Row className="d-flex justify-content-center">
          {data.allMarkdownRemark.edges.map((edge, i) => {
            return (
              <Col className="d-flex justify-content-center mt-5" sm={12} md={6} lg={4} key={i}>
                <Card
                  thumbnail={edge.node.frontmatter.thumbnail.childImageSharp.fluid}
                  title={edge.node.frontmatter.title}
                  slug={edge.node.frontmatter.slug}
                  date={edge.node.frontmatter.date}
                  description={edge.node.frontmatter.description} />
              </Col>
            )
          })}
        </Row>
      </Container>
      <SEO title="Home" />
    </Layout>)
}


export default IndexPage


export const pageQuery = graphql`
query AllBlogPosts {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          slug
          title
          date
          description
          thumbnail {
            childImageSharp {
              fluid {
                base64
                srcSet
                src
                aspectRatio
              }
            }
          }
        }
      }
    }
  }
}

`