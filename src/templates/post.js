import React from "react"
import { useContext } from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Img from "gatsby-image"
import Layout from '../components/layout'
import SEO from '../components/seo'
import Context from "../store/context"


const Styles = styled.div`
  max-width:992px;
  margin:auto;
  p{
    font-size:1.25rem;
  }
  blockquote{
    padding:5px 15px;
    margin-top:64px;
    background-color:${props => props.isDark ? "#726b77" : "#fefefe"};
    border-left: 5px solid ${props => props.theme.palette.azure};
    border-radius:3px;
    p{
      margin-bottom:0;
    }
  }
  em {
    color: deeppink;
  }
`
const StyledRow = styled(Row)`
  & > .thumbnail{
    max-width:576px;
  }
`

export default function Post({ data, location }) {
  const { state } = useContext(Context)
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  console.log(frontmatter.tags)
  return (
    <Layout animateKey={location.key}>
      <SEO title={frontmatter.title} keywords={frontmatter.keywords} />
      <Container fluid="lg" className="my-5 py-5">
        <Styles isDark={state.isDark}>
          <StyledRow>
            <Col sm={1}></Col>
            <Col sm={10}>
              <div className="px-5">
                <Img
                  className="thumbnail"
                  fluid={markdownRemark.frontmatter.thumbnail.childImageSharp.fluid}
                  alt="JAMSTACK"
                />
              </div>
              <div className="p-3 mt-3">last updated: {frontmatter.date}</div>
              <div className="py-5">
                <h1>{frontmatter.title}</h1>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <div className="py-4 mt-5">
                {frontmatter.tags.map((tag, key) => {
                  return (
                    <span className="border px-2 mt-3 mr-2" key={key}>{tag}</span>
                  )
                })}
              </div>
            </Col>
            <Col sm={1}></Col>
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
        keywords
        tags
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