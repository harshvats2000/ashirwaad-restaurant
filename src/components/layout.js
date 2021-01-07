import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/index"
import Footer from './Footer/index'
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Header/>
        <main>{children}</main>
      <Footer/>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
