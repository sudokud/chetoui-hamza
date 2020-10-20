import React from "react"
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Img from "gatsby-image"
import Layout from '../components/layout'



const Styles = styled.div`
  max-width:992px;
  margin:auto;
`
const StyledRow = styled(Row)`
  & > .thumbnail{
    max-width:576px;
  }
`

export default function Post({ data, location }) {

  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout animateKey={location.key}>
      <Container fluid="lg" className="my-5 py-5">
        <Styles>
          <StyledRow>
            <Col sm={2}></Col>
            <Col>
              <Img
                className="thumbnail"
                fluid={markdownRemark.frontmatter.thumbnail.childImageSharp.fluid}
                alt="JAMSTACK"
              />
              <h4 className="py-3">Published: {frontmatter.date}</h4>
              <h1>{frontmatter.title}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </Col>
            <Col sm={2}></Col>
          </StyledRow>
        </Styles>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
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
`