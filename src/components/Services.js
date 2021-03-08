import * as React from "react"
import { withTrans } from "../i18n/withTrans"
import Card from "./Card"

const Services = ({ t }) => {
  const services = [
    {
      id: 1,
      title: t("footer.external"),
      desc: t("services.external-desc"),
      img: "/images/card1.jpg",
      link: "/services/external",
    },
    {
      id: 2,
      title: t("footer.internal"),
      desc: t("services.internal-desc"),
      img: "/images/card2.jpg",
      link: "/services/internal",
    },
    {
      id: 3,
      title: t("footer.tint"),
      desc: t("services.tint-desc"),
      img: "/images/card3.jpg",
      link: "/services/tint",
    },
    {
      id: 4,
      title: t("footer.protection"),
      desc: t("services.protection-desc"),
      img: "/images/card4.jpg",
      link: "/services/protection",
    },
    {
      id: 5,
      title: t("footer.glass"),
      desc: t("services.glass-desc"),
      img: "/images/card5.jpg",
      link: "/services/glass",
    },
  ]
  return (
    <>
      <div className="container mx-auto text-center">
        <h1
          data-aos="zoom-in-up"
          className="my-6 px-6 uppercase font-cairo py-3 text-4xl font-bold bg-red-500 text-white rounded-md shadow-md inline-block "
        >
          {t("header.services")}
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 self-center">
          {services.map(service => (
            <Card service={service} key={service.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default withTrans(Services)
