import i18next from "i18next"

i18next.init({
  fallbackLng: "ar",
  resources: {
    ar: {
      translations: require("../locales/ar/common.json"),
    },
    en: {
      translations: require("../locales/en/common.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  returnObjects: true,
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    wait: true,
  },
})

i18next.languages = ["ar", "en"]

export default i18next
