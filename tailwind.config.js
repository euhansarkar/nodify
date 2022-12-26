/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: false, // or media or class 
  plugins: [require("daisyui")],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: `#202225`,
        secondary: `#5865f2`,
        
      }
    },
  },
}