import { Link } from "gatsby"
import * as React from "react"
import { withTrans } from "../i18n/withTrans"

const Card = ({ t, service: { title, desc, img, link } }) => {
  return (
    <div
      data-sal="zoom-out"
      data-sal-delay="500"
      data-sal-easing="ease-in"
      className="max-w-2xl  mx-auto overflow-hidden border border-red-500 border-opacity-5 rounded-lg shadow-lg dark:bg-gray-800"
    >
      <img className="object-cover w-full h-64" src={img} alt="Article" />

      <div className="p-6">
        <div>
          <h1 className="block mt-2 text-2xl font-semibold  font-cairo text-gray-800 dark:text-white ">
            {title}
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {desc}
          </p>
          <Link
            to={link}
            className="bg-transparent mt-3 bg-red-500 hover:bg-white font-semibold text-white py-2 px-4 border border-red-500 hover:text-red-500 inline-block rounded transition ease-in-out duration-300 "
          >
            {t("slideShow.more")}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default withTrans(Card)
