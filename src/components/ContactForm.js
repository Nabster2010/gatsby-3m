import * as React from "react"
import { withTrans } from "../i18n/withTrans"
const ContactForm = ({ t }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  })
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
    >
      <h2 className="text-3xl font-semibold text-center font-cairo text-gray-800 dark:text-white">
        {t("contact.h2")}
      </h2>
      <p className="mt-3 text-center text-gray-600 dark:text-gray-400">
        {t("contact.p")}
      </p>

      <div className="mt-6 ">
        <div className="items-center -mx-2 md:flex">
          <div className="w-full mx-2">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              {t("contact.name")}
            </label>

            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="text"
            />
          </div>

          <div className="w-full mx-2 mt-4 md:mt-0">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              {t("contact.email")}
            </label>

            <input
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="email"
            />
          </div>
        </div>

        <div className="w-full mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            {t("contact.message")}
          </label>

          <textarea
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          ></textarea>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            {t("contact.sendMessage")}
          </button>
        </div>
      </div>
    </form>
  )
}

export default withTrans(ContactForm)
