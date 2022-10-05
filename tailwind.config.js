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
    },
  },
  plugins: [],
};
