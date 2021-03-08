import * as React from "react"
import { withTrans } from "../i18n/withTrans"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm"
const Contact = ({ t }) => {
  return (
    <>
      <SEO title="contact us" />
      <div className=" px-4 container flex flex-col items-center md:items-start md:flex-row my-4 mx-auto justify-between mb-4">
        <div className="my-4  p-5 shadow-xl">
          <div className="">
            <i className="fas fa-map-marker-alt fa-2x text-gray-500"></i>
            <span className="p-3">address</span>
          </div>
          <div className="my-4">
            <i className="fas fa-phone fa-2x text-gray-500"></i>
            <span className="p-3">050000000</span>
          </div>
          <div className="my-4">
            <i className="fas fa-envelope fa-2x text-gray-500"></i>
            <span className="p-3">user@email.com</span>
          </div>
        </div>
        <div className=" border-gray-400 border-2 p-1 w-96 md:w-130 h-96 md:h-130 shadow-lg ">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14299.20301413279!2d50.2067276!3d26.3653057!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x23986f20ad49532c!2s3m!5e0!3m2!1sen!2ssa!4v1615211856647!5m2!1sen!2ssa"
            className="w-full h-full"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <ContactForm />
    </>
  )
}

export default withTrans(Contact)
