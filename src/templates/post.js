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
  blockquote{
    padding:5px 15px;
    margin-top:64px;
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
  return (
    <Layout animateKey={location.key}>
      <SEO title={frontmatter.title} />
      <Container fluid="lg" className="my-5 py-5">
        <Styles isDark={state.isDark}>
          <StyledRow>
            <Col sm={1}></Col>
            <Col sm={10}>
              <p className="py-3">{frontmatter.date}</p>
              <div className="px-5">
                <Img
                  className="thumbnail"
                  fluid={markdownRemark.frontmatter.thumbnail.childImageSharp.fluid}
                  alt="JAMSTACK"
                />
              </div>
              <div className="py-5">
                <h1>{frontmatter.title}</h1>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: html }}
              />
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