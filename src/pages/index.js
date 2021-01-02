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
            nonummy nibh euismod tincidunt ut laoreet dolore magna
          </p>
          <button>BOOK A TABLE</button>
        </div>
      </div>
      <div className={classes.About}>
        <div className={classes.AboutContent}>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in
          </p>
        </div>
      </div>
      <div className={classes.Menu}>
        <h1>Our Menu</h1>
        <div className={classes.MenuIcons}>
          <div className={classes.MenuIcon}>
            <svg
              fill="#4f4f4f"
              viewBox="0 0 1000 1000"
              enable-background="new 0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M521.7,410.1C792.6,223.5,431.5,155.2,571.1,10c-124.3,20.7-100.5,162.5-74.9,188.4C521.7,224.3,630.7,261.5,521.7,410.1z M390.8,410.1c221.8-152.9-73.9-207.4,40.5-326.3c-101.8,17-82.3,133.1-61.4,154.3C390.8,259.4,480.1,288.4,390.8,410.1z M951,587c-1.8-6.3-4.3-12.3-7.1-18.2c-0.7-1.4-1.3-2.7-2-4.1c-3-5.7-6.2-11.1-10-16.2c-0.2-0.2-0.3-0.4-0.5-0.6c-3.8-5-8-9.6-12.5-14c-0.9-0.9-1.8-1.8-2.8-2.7c-4.8-4.5-9.9-8.7-15.4-12.4c-0.1-0.1-0.2-0.1-0.3-0.2c-5.5-3.8-11.5-7.1-17.6-10.1c-0.8-0.4-1.6-0.8-2.4-1.2c-12.9-6.1-26.9-10.5-41.7-13.1c-0.5-0.1-1.1-0.2-1.6-0.3c-7.6-1.3-15.3-2.1-23.2-2.4c-4.3-24.2-25.1-50.4-50.2-50.4H181.1c-28.2,0-51.1,31-51.1,59.7h-0.7c0,0,0,7.2,0.7,19.7v1.1c0,0.6,0.2,1.2,0.2,1.9c4.3,70.4,30.8,301.2,192.3,386h303.2c46.2-41.1,80.9-96.6,107.5-135.7c6.7,1.5,13.6,2.5,20.6,3.3c1.5,0.2,2.9,0.3,4.4,0.4c7.1,0.6,14.3,0.9,21.7,0.6h0.2c7.1-0.3,14.3-1.1,21.5-2.1c1.8-0.3,3.6-0.6,5.4-0.9c7.4-1.3,14.7-2.9,22.1-5.1C917.9,743.7,972.5,661.7,951,587z M206.1,500.9h85.4c0,0-60.6,106.2,66.1,357.7C195.1,771.9,206.1,500.9,206.1,500.9z M814,718.1c-6,1.8-12.1,2.9-18,3.7c-1.6,0.2-3.2,0.4-4.7,0.6c-5.7,0.5-11.3,0.8-16.9,0.6c-1.2-0.1-2.4-0.3-3.6-0.4c-2.9-0.2-5.7-0.8-8.6-1.2c37.6-68.1,49.6-132.2,51.6-173.7c36,4.3,66.1,25.4,75.4,57.7C902.4,651.4,868.7,701.8,814,718.1z M44.9,931.7c0,0-10.2,58.3,59.6,58.3h715.3c56.2,0,52.8-58.3,52.8-58.3H44.9z" />
            </svg>
            <p>Breakfast</p>
          </div>
          <div className={classes.MenuIcon}>
            <p>Lunch</p>
          </div>
          <div className={classes.MenuIcon}>
            <p>Dinner</p>
          </div>
        </div>
        <div className={classes.MenuImg}></div>
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
