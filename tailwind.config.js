/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-violet': 'rgba(157, 144, 250, 0.25)',
        'overlay': 'rgba(108, 108, 108, 0.3)'
      }
    },
  },
  plugins: [],
}