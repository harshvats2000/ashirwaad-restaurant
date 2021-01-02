import { Link } from "gatsby"
import React from "react"
import classes from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={classes.Header}>
    <nav className={classes.navbar}>
      <label className={classes.navbarToggle} for="chkToggle">
        <svg
          fill="white"
          width="30px"
          viewBox="0 -53 384 384"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        </svg>
      </label>
      <Link to="/" className={classes.logo}>
        ASHIRWAAD
      </Link>
      <input type="checkbox" className={classes.chkToggle} id="chkToggle" />
      <ul className={classes.mainNav}>
        <li>
          <Link to="/about" className={classes.navLinks}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/menu" className={classes.navLinks}>
            MENU
          </Link>
        </li>
        <li>
          <Link to="/gallery" className={classes.navLinks}>
            GALLERY
          </Link>
        </li>
        <li>
          <Link to="/contact" className={classes.navLinks}>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
