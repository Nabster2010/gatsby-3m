/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Header from "./header"
import Footer from "./footer"
import { withTrans } from "../i18n/withTrans"

const Layout = ({ children, t, i18n }) => {
  const navRef = React.useRef(null)
  const handleScroll = () => {
    if (window !== undefined) {
      if (window.scrollY > 677) {
        navRef.current.classList.remove("md:bg-opacity-60")
      } else {
        navRef.current.classList.add("md:bg-opacity-60")
      }
    }
  }
  React.useEffect(() => {
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll")
    }
  }, [])
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        navRef={navRef}
      />
      <main className="mt-20">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTrans(Layout)
