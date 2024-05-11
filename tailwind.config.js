/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    letterSpacing: {
      '1': '0em',
      '2': '0.025em',
      '3': '0.05em',
      '3.5':'0.075em',
      '4': '0.1em',
    },
    extend: {
      fontFamily:{
        FoundersGrotesk:["FoundersGrotesk", "sans-serif"]
      }
    },
  },
  plugins: [],
}
