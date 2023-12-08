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
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'mdd': '820px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

