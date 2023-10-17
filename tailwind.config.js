/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        sliderAnime: {
          '0%':{transfrom: "translateX(0)"},
          '100%':{transform: 'translatex(-600px)'}

        },
      },
      animation:{
        slide: 'sliderAnime 20s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}