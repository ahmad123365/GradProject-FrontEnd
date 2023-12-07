/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors') 

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#9BB8CD",
      secondary: "#EEC759",
      nearWhite: "#FFF7D4",
      ...colors
    }
  },
  plugins: [],
}

