/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: "#222831",
        primaryContent: "#393E46",
        primaryBase: "#00ADB5",
        primary: "#EEEEEE",
        primarybg: "#0F0F0F",
        primaryUse: "#FFC436",
      }
    },
  },
  plugins: [],
}

