/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        brand: {
          500: '#0471A6',
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
