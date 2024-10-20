/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        permanentmarker: ['Permanent Marker', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        shadowintolight: ['Shadows Into Light', 'sans-serif']
      },
    },
  },
  plugins: [],
}

