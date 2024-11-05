/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      size: {
        'h-90vh': '95vh',
      },
      fontFamily: {
        times: ['"Times New Roman"', 'serif'],
      },
      ungu: '#119119',
    },
  },
  plugins: [],
}