/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html, js}"],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      'h1': '2.4rem',
      'h1desktop': '3.5rem',
      'modalh1': '3.5rem',
      'email': '.94rem',
     },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'], 
    },
    extend: {
      colors: {
        bgcolor: "#36384D",
        h1clr: "#2A304A",
        txtclr: "#3F3F47",
        inputclr: "#949398", 
        btnclr: "#232742", 
        btntxtclr: "#f5f5f5",
      }
    },
  },
  plugins: [],
}

// Extended colors, font-family, and font-sizes for Tailwind Css.

