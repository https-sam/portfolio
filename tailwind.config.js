const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        wideTitle: ["Archivo Black", "sans"],
        Poppins: ["Poppins", "sans"],
      },
      boxShadow: {
        depthBottom: "inset 0 1px 1px hsla(0, 0%, 70%, 0.4)",
        shadowDownward:
          "inset 0 3px 3px hsla(0, 0%, 0%, 0.1), inset 0 -2px 0 hsla(0, 0%, 100%, .15)",
        shadowUpward:
          "inset 0 1px 0 hsl(224, 84%, 74%), 0 1px 3px hsla(0, 0%, 0%, .2)",
      },
      colors: {
        darkGray: "#1D2633",
        "warm-gray": colors.warmGray,
        teal: colors.teal,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
