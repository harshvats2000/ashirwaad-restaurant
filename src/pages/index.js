import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { Tab, Tabs, TabPanel, TabList } from "react-tabs"

import Layout from "../components/layout"
import SEO from "../components/seo"

import classes from "../styles/index.module.css"
import BreakfastSvg from "../components/MenuSvg/breakfast.js"
import LunchSvg from "../components/MenuSvg/lunch.js"
import DinnerSvg from "../components/MenuSvg/dinner.js"

const IndexPage = props => {
  const { data } = props
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
        <div className={classes.MenuTitle}>
          <h1>Our Menu</h1>
          <div className={classes.plate_img}>
            <Img
              fluid={data.plate.edges[0].node.childImageSharp.fluid}
              alt={data.plate.edges[0].node.name}
            />
          </div>
        </div>
        <Tabs
          selectedTabClassName={classes.SelectedMenuTab}
          className={classes.MenuTabs}
        >
          <TabList className={classes.MenuTabList}>
            <Tab className={classes.MenuTab}>
              <BreakfastSvg />
              <p>Breakfast</p>
            </Tab>
            <Tab className={classes.MenuTab}>
              <LunchSvg />
              <p>Lunch</p>
            </Tab>
            <Tab className={classes.MenuTab}>
              <DinnerSvg />
              <p>Dinner</p>
            </Tab>
          </TabList>
          <TabPanel className={classes.MenuTabPanel}>
            {data.menu.edges.map((menu, i) => (
              <div key={i}>
                <Img
                  className={classes.MenuImage}
                  fluid={menu.node.frontmatter.image.childImageSharp.fluid}
                  alt={menu.node.frontmatter.title}
                />
                <div className={classes.MenuTabPanelImgContent}>
                  <p>{menu.node.frontmatter.title}</p>
                  <p>₹ {menu.node.frontmatter.price} </p>
                </div>
              </div>
            ))}
          </TabPanel>
          <TabPanel>Hi</TabPanel>
          <TabPanel>World</TabPanel>
        </Tabs>
      </div>

      {/* <h1>Our Gallery</h1>
      {data.gallery.edges.map((pic, i) => (
        <div key={i}>
          <Img
            fluid={pic.node.frontmatter.image.childImageSharp.fluid}
            alt={pic.node.frontmatter.title}
          />
        </div>
      ))}
      <Link to="/page-2/">Go to page 2</Link> <br /> */}
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
                fluid(maxWidth: 340, maxHeight: 340) {
                  ...GatsbyImageSharpFluid
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
    plate: allFile(filter: { relativePath: { eq: "plate.png" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  }
`

export default IndexPage
