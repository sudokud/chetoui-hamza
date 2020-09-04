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
        padding: "128px",
        margin: "128px 64px",
        overflow: "hidden"
      }}>
        place holder
      </Container>
      <Container fluid="lg">
        <Row noGutters>
          {data.allMarkdownRemark.edges.map((edge, i) => {
            return (
              <Col lg={4} key={i}>
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