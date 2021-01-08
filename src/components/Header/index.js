import { Link } from "gatsby"
import React from "react"
import classes from "./index.module.css"
import { useState, useEffect } from "react"

const Header = () => {
  useEffect(() => {
    const h = document.querySelector("header")
    var prev_Y = window.pageYOffset
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        h.style.backdropFilter = "blur(10px)"
        h.style.backgroundColor = "rgba(0, 0, 0, 0.6)"
      } else {
        h.style.backdropFilter = "blur(0px)"
        h.style.backgroundColor = "transparent"
      }
      prev_Y = window.pageYOffset
    })
  }, [])

  return (
    <header className={classes.Header} id="header">
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
            <Link to="/#about" className={classes.navLinks} >
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/#menu" className={classes.navLinks}>
              MENU
            </Link>
          </li>
          <li>
            <Link to="/#bookTable" className={classes.navLinks}>
              BOOK TABLE
            </Link>
          </li>
          <li>
            <Link to="/#gallery" className={classes.navLinks}>
              GALLERY
            </Link>
          </li>
          <li>
            <Link to="/#contact" className={classes.navLinks}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
