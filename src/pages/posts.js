import React from "react"
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import NesCard from '../components/NesCard'



const Posts = ({ data, location }) => {
  return (
    <Layout animateKey={location.key}>

      <SEO title="Blog" />
      <Container fluid="lg" className="my-4 py-4" >
        <Row className="d-flex justify-content-center">
          {data.allMarkdownRemark.edges.map((edge, i) => {
            const { thumbnail } = edge.node.frontmatter
            return (
              <Col className="d-flex justify-content-center mt-5" sm={12} md={6} lg={4} key={i}>
                <NesCard
                  thumbnail={thumbnail.childImageSharp.fluid}
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


export default Posts


export const pageQuery = graphql`
query AllBlogPosts {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          description
          thumbnail {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}

`