/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        skyColor: "#0989ff", 
        'black-color': '#3c3c3b',
        'black-color-dark': '#343433',
        'main-color': '#F4B318',
        'secondary-color': '#ebe8e2',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};