import { Link } from "gatsby"
import React from "react"
import classes from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={classes.Header}>
    <nav className={classes.navbar}>
      <label className={classes.navbarToggle} htmlFor="chkToggle">
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
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
