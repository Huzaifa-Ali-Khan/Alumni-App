/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
      },
      fontFamily: {
        poppinsRegular: ['Poppins-Regular'],
        poppinsMedium: ['Poppins-Medium'],
        poppinsSemiBold: ['Poppins-SemiBold'],
      },
    },
  },
  plugins: [],
}
