module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      height: {
        "88vh": "88vh",
        "90vh": "90vh",
        "12vh": "12vh",
        "10vh": "10vh",
        "60vh": "60vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
