/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeheader: '#D45133',
      },
      backgroundImage: {
        'chuck': "url('assets/chuck-wallpaper.png')",
      }
    },
  },
  plugins: [],
}

