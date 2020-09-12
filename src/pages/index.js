import React from "react"
import { Container } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PixelCard from '../components/pixelCard'
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container
        fluid
        className="d-flex justify-content-center"
        style={{
          padding: "128px 0",
          margin: "128px 0",
          overflow: "hidden",
        }}>
        <PixelCard />
      </Container>
    </Layout>)
}


export default IndexPage


// export const pageQuery = graphql`
// query AllBlogPosts {
//   allMarkdownRemark {
//     edges {
//       node {
//         frontmatter {
//           slug
//           title
//           date
//           description
//           thumbnail {
//             childImageSharp {
//               fluid {
//                 base64
//                 srcSet
//                 src
//                 aspectRatio
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }

// `