import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => {
  const { data } = props
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Our Menu</h1>
      {data.allMarkdownRemark.edges.map((menu, i) => (
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
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

export const menuQuery = graphql`
  query {
    allMarkdownRemark {
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
  }
`

export default IndexPage
