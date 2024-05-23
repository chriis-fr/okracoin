/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'press-start': [' "Jacquard 12" ', 'cursive'],
      },
    },
  },
  plugins: [],
}