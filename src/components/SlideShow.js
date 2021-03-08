import * as React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { withTrans } from "../i18n/withTrans"

const SlideShow = ({ t }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    pauseOnHover: false,
    easing: "ease-in-out",

    slidesToScroll: 1,
  }
  const content = [
    {
      title: t("slideShow.title1"),
      description: t("slideShow.desc1"),
      image: "/images/showcase1.jpg",
    },
    {
      title: t("slideShow.title2"),
      description: t("slideShow.desc2"),
      image: "/images/showcase2.jpg",
    },
    {
      title: t("slideShow.title3"),
      description: t("slideShow.desc3"),
      image: "/images/showcase3.jpg",
    },
  ]

  return (
    <div className="slide-container -mt-20">
      <Slider {...settings}>
        {content.map(c => (
          <div key={c.image} className="w-full relative">
            <img
              src={c.image}
              className=" lg:h-screen w-full object-cover "
              alt="slide show"
            />
            <div
              data-sal="slide-left"
              data-sal-delay="300"
              data-sal-easing="ease-in"
              className="absolute mx-auto rounded-lg text-white top-1/4 left-1/4 flex flex-col justify-evenly items-center bg-gray-800 bg-opacity-60 shadow-lg w-6/12 h-3/6"
            >
              <h1
                data-sal="slide-down"
                data-sal-delay="600"
                data-sal-easing="ease-in"
                className=" md:font-bold font-normal text-base font-cairo md:text-3xl mb-3"
              >
                {c.title}
              </h1>
              <p
                data-sal="slide-up"
                data-sal-delay="600"
                data-sal-easing="ease-in"
                className=" font-normal text-sm md:text-xl md:mb-3 md:p-3 p-2"
              >
                {c.description}
              </p>
              <button className="bg-red-500 md:px-4 px-2 transition ease-in-out duration-300 py-1 md:py-2 m-3 rounded hover:bg-transparent hover:border-red-500 border border-red-500">
                {t("slideShow.more")}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default withTrans(SlideShow)
