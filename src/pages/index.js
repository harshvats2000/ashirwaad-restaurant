import React from "react"
import { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Tab, Tabs, TabPanel, TabList } from "react-tabs"
import Layout from "../components/layout"
import SEO from "../components/seo"
import classes from "../styles/index.module.css"
import BreakfastSvg from "../components/MenuSvg/breakfast.js"
import LunchSvg from "../components/MenuSvg/lunch.js"
import DinnerSvg from "../components/MenuSvg/dinner.js"
import PhoneSvg from "../components/ContactSvg/phone.js"
import MailSvg from "../components/ContactSvg/mail.js"
import AddressSvg from "../components/ContactSvg/address.js"
import SmartphoneSvg from "../images/smartphone.svg"
import SubmitSvg from "../images/telegram.svg"
import phoneCall from "../images/phone-call.svg"
import group from "../images/group.svg"
import calendar from "../images/calendar.svg"
import clock from "../images/clock.svg"
import TimePicker from "react-time-picker"
import DatePicker from "react-datepicker"
import Gallery from "../components/Gallery"
import HomepageBanner from "../components/HomepageBanner"

const IndexPage = props => {
  const { data } = props
  const [startDate, setStartDate] = useState(new Date())
  const [time, setTime] = useState("12:00")

  let breakfast = data.menu.edges.filter(menu =>
    menu.node.frontmatter.category.includes("breakfast")
  )
  let lunch = data.menu.edges.filter(menu =>
    menu.node.frontmatter.category.includes("lunch")
  )
  let dinner = data.menu.edges.filter(menu =>
    menu.node.frontmatter.category.includes("dinner")
  )

  return (
    <Layout>
      <SEO title="Home" />

      {/* BANNER SECTION */}
      <HomepageBanner />

      {/* ABOUT SECTION */}

      <section className={classes.About} id="about">
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
      </section>

      {/* OUR MENU SECTION */}

      <div className={classes.Menu} id="menu">
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
            {breakfast.map((menu, i) => (
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
          <TabPanel className={classes.MenuTabPanel}>
            {lunch.map((menu, i) => (
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
          <TabPanel className={classes.MenuTabPanel}>
            {dinner.map((menu, i) => (
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
        </Tabs>
      </div>

      {/* BOOK A RESERVATION SECTION */}

      <div className={classes.ReservationSection} id="bookTable">
        <div className={classes.Reservation}>
          <div className={classes.TomatoImg}>
            <Img
              fluid={data.tomato.edges[0].node.childImageSharp.fluid}
              alt={data.tomato.edges[0].node.name}
            />
          </div>
          <div className={classes.LemonImg}>
            <Img
              fluid={data.lemon.edges[0].node.childImageSharp.fluid}
              alt={data.lemon.edges[0].node.name}
            />
          </div>
          <h1>RESERVATION</h1>
          <div className={classes.FormContainer}>
            <img src={SmartphoneSvg} className={classes.SmartPhoneImg} />
            <form className={classes.Form}>
              <div className={classes.Input}>
                <label className={classes.DatePickerLabel}>
                  <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    className={classes.DatePicker}
                  />
                </label>
                <img src={calendar} className={classes.InputIcon} />
              </div>
              <div className={classes.Input}>
                <TimePicker
                  value={time}
                  className={classes.TimePicker}
                  disableClock
                  onChange={e => setTimeout(e)}
                />
                <img src={clock} className={classes.InputIcon} />
              </div>
              <div className={classes.Input}>
                <input placeholder="No. Of Seats" type="number" />
                <img src={group} className={classes.InputIcon} />
              </div>
              <div className={classes.Input}>
                <input placeholder="Mobile No." type="tel" />
                <img src={phoneCall} className={classes.InputIcon} />
              </div>
            </form>
            <img
              src={SubmitSvg}
              className={classes.ReservationSubmit}
              id="reservationSubmit"
              onClick={() => {
                document.getElementById("reservationSubmit").style.filter =
                  "unset"
                setTimeout(() => {
                  document.getElementById("reservationSubmit").style.filter =
                    "drop-shadow(1px 3px 1px var(--color-icon))"
                }, 200)
              }}
            />
          </div>
        </div>
      </div>

      {/* GALLERY SECTION */}

      <Gallery />

      {/* CONTACT SECTION */}

      <div className={classes.ContactSection} id="contact">
        <div className={classes.Contact}>
          <div className={classes.Map}>
            <a
              href="https://www.google.com/maps/search/ashirwad+restaurant+faridabad/@28.4091967,77.3176729,17z"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Img
                fluid={data.map.edges[0].node.childImageSharp.fluid}
                alt={data.map.edges[0].node.name}
              />
            </a>
          </div>
          <div className={classes.ContactContent}>
            <h1>Contact Us</h1>
            <div className={classes.ContactIconContent}>
              <div className={classes.ContactIcon}>
                <div>
                  <PhoneSvg />
                  <p>(+91) 9306121752</p>
                </div>
                <div>
                  <MailSvg />
                  <p>ashirwaad@gmail.com</p>
                </div>
                <div>
                  <AddressSvg />
                  <p>Ashirwaad Hotel, Sec-16, Faridabad, Haryana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    map: allFile(filter: { relativePath: { eq: "map.png" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
    tomato: allFile(filter: { relativePath: { eq: "tomato.png" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
    lemon: allFile(filter: { relativePath: { eq: "lemon.png" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 150, maxHeight: 200) {
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
