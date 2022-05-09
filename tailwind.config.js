module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        court: "#349850"
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}