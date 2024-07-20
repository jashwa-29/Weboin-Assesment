/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "index.html" , 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#E8DED1',
        'pricing-color': '#804C36',
        'template-color': '#454242',
        'black': '#000000',
        'white': '#FFFFFF',
        'gray': '#9F9F9F', 
        'yell': '#FFF9E5'
      },
      backgroundImage: {
        'hero-bg-img': "url(./assets/Map-UI.png.webp)" , 
        'hero-svg-bg': "url(./assets/hero-svg-bg.svg)" ,
        'hero-svg-bg-2': "url(./assets/hero-svg-bg-mob.svg)",
        'hero-svg-bg-3': "url(./assets/hero-svg-bg-md.svg)"

      }
    },
  },
  plugins: [],
}