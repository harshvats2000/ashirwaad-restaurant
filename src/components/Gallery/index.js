import React from "react"
import Img from "gatsby-image"
import { Container, Images, ImageWrapper, Wrapper, Title } from "./styles"
import { graphql, useStaticQuery } from "gatsby"

const Gallery = () => {
  const { gallery } = useStaticQuery(query)

  return (
    <Wrapper id="gallery">
      <Container>
        <Title>Our Gallery</Title>
        <Images>
          {gallery.edges.map((pic, index) => (
            <ImageWrapper key={index}>
              <Img
                fluid={pic.node.frontmatter.image.childImageSharp.fluid}
                alt={pic.node.frontmatter.title}
              />
            </ImageWrapper>
          ))}
        </Images>
      </Container>
    </Wrapper>
  )
}

export const query = graphql`
  {
    gallery: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(gallery)/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 400) {
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

export default Gallery
