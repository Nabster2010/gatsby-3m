import * as React from "react"
import SEO from "../components/seo"
import Services from "../components/Services"
import SlideShow from "../components/SlideShow"
const IndexPage = () => (
  <>
    <SEO title="Home" />
    <SlideShow />
    <Services />
  </>
)
export default IndexPage
