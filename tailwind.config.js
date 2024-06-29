/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeheader: '#E66E1A',
      },
      backgroundImage: {
        'chuck': "url('assets/chuck-wallpaper.png')",
      }
    },
  },
  plugins: [],
}

