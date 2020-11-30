import React from "react"
// import { useEffect } from 'react'
// import useSound from 'use-sound'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import PixelCard from './pixelCard'
// import { motion } from 'framer-motion'



const LatestPosts = () => {

    const data = useStaticQuery(graphql`
    query LatestBlogPosts {
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
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
                }
            }
            }
        }
    }
`)
    return (
        <Container fluid="lg" className="my-4 py-4" >
            <h2 className="d-block">Latest in Blog </h2>
            <Row className="d-flex justify-content-center">
                {data.allMarkdownRemark.edges.map((edge, i) => {
                    const { thumbnail } = edge.node.frontmatter
                    return (
                        <Col className="d-flex justify-content-center mt-5" sm={12} md={6} lg={4} key={i}>
                            <PixelCard
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
    )
}


export default LatestPosts


