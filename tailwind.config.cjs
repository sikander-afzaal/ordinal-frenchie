const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Bayon", ...defaultTheme.fontFamily.sans],
        coolGums: ["coolGums"],
      },
      backgroundImage: {
        orangeGr: "linear-gradient(180deg, #CA4A11 0%, #F7F64C 100%)",
        purpleGr: "linear-gradient(89.99deg, #544A6B 0.01%, #2B0A4F 99.99%)",
      },
      colors: {
        primaryPurple: "#2F2948",
      },
    },
  },
  plugins: [],
};
