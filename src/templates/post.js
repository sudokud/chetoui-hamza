import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"




const Classes = styled.div`
  .blog-post{
    border:2px solid deeppink;
    width:576px;
  }
  .blog-post-content{
    color:#8e8e8e;
  }
  .blog-image{
    width:60%;
  }
`

export default function Post({
  data, // this prop will be injected by the GraphQL query below.
}) {
  console.log(data);
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
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