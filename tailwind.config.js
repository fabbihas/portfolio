/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "khaki": '#E0D8CD'
    },
    extend: {
      fontFamily: {
        burtons: "burtons",
      }
    },
  },
  plugins: [],
}