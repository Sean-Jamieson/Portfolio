module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'darkBlue':'#1C2E4A',
      'euc':'#cbe7cc',
      'darkEuc':"#A2BBA3",
      'greyText':'#2E3532',
      'beaver':'#650D1B',
      'azure':'#3F84E5',
      'white':'#FFFFFF',
      'salmon':'#CDDAD8',
    },   
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}