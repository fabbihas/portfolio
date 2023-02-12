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
      "transparent": 'transparent',
      "khaki": '#E0D8CD',
      "offwhite": '#FFFFFF',
      "liver": '#654236',
      "reseda": '#6D735E',
      "alabaster": '#E7E2D9'
    },
    extend: {
      fontFamily: {
        burtons: "burtons",
        nunito: ['"Nunito"'],
        bayon: ['"Bayon"'],
      },
      objectPosition: { 
        'center-right': 'center right',
      },
      container: {
          padding: '2rem'
      },
      animation: {
        shine: "shine 1s"
      },
      keyframes: {
        shine: {
          "100%": { left: "125%"},
        }
      }
    },
  },
  plugins: [],
}