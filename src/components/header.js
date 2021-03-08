import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { withTrans } from "../i18n/withTrans"

const Header = ({ t, i18n, navRef }) => {
  const [isExpanded, toggleExpansion] = useState(false)
  const [language, toggleLanguage] = useState("ar")

  const changeLanguage = () => {
    language === "en" ? toggleLanguage("ar") : toggleLanguage("en")
  }

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  return (
    <nav
      ref={navRef}
      className=" shadow h-10vh bg-gray-800 md:bg-opacity-60 fixed top-0 w-full z-10"
    >
      <div
        className={`px-6 ${
          isExpanded && "bg-gray-800"
        } py-2  mx-auto md:flex md:justify-between md:items-center`}
      >
        <div className="flex items-center justify-between">
          <div className="flex justify-center items-center">
            <Link
              className="text-2xl  font-extrabold font-cairo text-white md:text-3xl px-2"
              to="/"
            >
              {t("header.brand")}
            </Link>
            <img src="/images/3m.png" alt="3m" width="70" className="m-0" />
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className="flex md:hidden">
            <button
              onClick={() => toggleExpansion(!isExpanded)}
              type="button"
              className="text-white hover:text-gray-600 focus:outline-none "
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div className="items-center md:flex">
          <div
            className={`md:flex ${
              isExpanded ? "flex flex-col items-start" : "hidden"
            } md:flex-row md:mx-6`}
          >
            <Link
              className="my-2 hover:bg-red-500  rounded px-2 py-1 transition ease-in-out duration-300 text-white dark:text-gray-200 font-bold md:mx-4 md:my-0"
              to="/"
              activeStyle={{ borderBottom: "5px solid red" }}
            >
              {t("header.home")}
            </Link>
            <Link
              className="my-2 hover:bg-red-500  rounded px-2 py-1 transition ease-in-out duration-300 text-white dark:text-gray-200 font-bold md:mx-4 md:my-0"
              to="/services/"
              activeStyle={{ borderBottom: "5px solid red" }}
            >
              {t("header.services")}
            </Link>
            <Link
              className="my-2 hover:bg-red-500  rounded px-2 py-1 transition ease-in-out duration-300  text-white dark:text-gray-200 font-bold md:mx-4 md:my-0"
              to="/contact/"
              activeStyle={{ borderBottom: "5px solid red" }}
            >
              {t("header.contact")}
            </Link>

            <button
              onClick={changeLanguage}
              className="my-1 text-sm font-bold border border-white bg-red-500 text-white py-1 px-2 rounded dark:text-gray-200 hover:bg-red-300  outline-none focus:outline-none md:mx-4 md:my-0"
            >
              {t("header.language")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default withTrans(Header)
