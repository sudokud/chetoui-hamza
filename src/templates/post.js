import React from "react"
import { graphql } from 'gatsby'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import Img from "gatsby-image"
import Layout from '../components/layout'



const Classes = styled.div`
  .blog-post{
    width:576px;
    margin-top:64px;
  }
  .blog-post-content{
    color:#8e8e8e;
  }
  .blog-image{
    width:100%;
    margin-bottom:16px;
  }
`

export default function Post({
  data, // this prop will be injected by the GraphQL query below.
}) {
  console.log(data);
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Container fluid="lg" className="d-flex justify-content-center">
        <Classes>
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <Img
              className="blog-image"
              fluid={markdownRemark.frontmatter.thumbnail.childImageSharp.fluid}
              alt="A corgi smiling happily"
            />
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </Classes>
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