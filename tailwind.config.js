/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.{js}',
    './index.html',
  ],
  theme: {
    colors: {
      'dark': '#0C0C0C',
      'secondary': '#5F5F5F',
      'light': '#FFFFFF',
    },
    extend: {
      fontFamily: {
        regular: ["averta","sans-serif"],
      },
    },
  },
  plugins: [],
}

