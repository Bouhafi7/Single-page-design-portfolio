/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    screens: {
      'max-sm': {'max':'781px'},
      'max-md': {'max':'991px'},
      'max-lg': {'max':'1191px'},
      'max-xl': {'max':'1500px'}
    },
    extend: {},
  },
  plugins: [],
}
