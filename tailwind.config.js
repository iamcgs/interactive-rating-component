module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Overpass: ['Overpass', 'sans-serif'],
       },
      colors: {
        orangeBtn: 'hsl(25, 97%, 53%)',
        whiteClr: 'hsl(0, 0%, 100%)',
        lightGreyText: 'hsl(217, 12%, 63%)',
        mediumGreyRatingBg: 'hsl(216, 12%, 54%)',
        darkBlueCardBg: 'hsl(213, 19%, 18%)',
        veryDarkBlueBg: 'hsl(216, 12%, 8%)',
      }
    },
  },
  plugins: [],
}
