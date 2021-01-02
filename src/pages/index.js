import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import classes from "../styles/index.module.css"

const IndexPage = props => {
  const { data } = props
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <div className={classes.Banner}>
        <div className={classes.BannerContent}>
          <h1>ASHIRWAAD</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna{" "}
          </p>
          <button>BOOK A TABLE</button>
        </div>
      </div>
      <h1>Our Menu</h1>
      {data.menu.edges.map((menu, i) => (
        <div key={i}>
          <Img
            fixed={menu.node.frontmatter.image.childImageSharp.fixed}
            alt={menu.node.frontmatter.title}
          />
          <br />
          {menu.node.frontmatter.category}
          <br />
          {menu.node.frontmatter.title}
          <br />₹ {menu.node.frontmatter.price}
          <br />
          {menu.node.frontmatter.description}
          <hr />
        </div>
      ))}
      <h1>Our Gallery</h1>
      {data.gallery.edges.map((pic, i) => (
        <div key={i}>
          <Img
            fluid={pic.node.frontmatter.image.childImageSharp.fluid}
            alt={pic.node.frontmatter.title}
          />
        </div>
      ))}
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

export const menuQuery = graphql`
  {
    menu: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(menu)/" } }
    ) {
      edges {
        node {
          frontmatter {
            category
            title
            price
            description
            image {
              childImageSharp {
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    gallery: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(gallery)/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 1200) {
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

export default IndexPage
