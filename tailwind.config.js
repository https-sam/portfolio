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
      },
    },
  },
  plugins: [],
};
