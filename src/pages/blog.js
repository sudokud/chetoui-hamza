import React from "react"
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PixelCard from '../components/pixelCard'
const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Container fluid="lg">
        <Row className="d-flex justify-content-center">
          {data.allMarkdownRemark.edges.map((edge, i) => {
            return (
              <Col className="d-flex justify-content-center mt-5" sm={12} md={6} lg={4} key={i}>
                <PixelCard
                  thumbnail={edge.node.frontmatter.thumbnail.childImageSharp.fluid}
                  title={edge.node.frontmatter.title}
                  slug={edge.node.frontmatter.slug}
                  excerpt={edge.node.frontmatter.description}
                  published={edge.node.frontmatter.date}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </Layout>)
}


export default Blog


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