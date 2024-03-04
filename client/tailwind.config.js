module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blackPrimary':'#1c1c1c',
        'blackSecondary':'#1c1c1ccc',
        'blackTertiary':'#1c1c1c99',
        'grayPrimary':'#cccccc',
        'graySecondary':'#f2f2f1',
        'lightGray':'F2F2F2',
      },
      fontSize: {
         '1':'1.3rem',
         '2':'1.4rem',
         '3':'1.6rem',
         '4':'1.8rem',
         '5':'2rem',
         '6':'2.2rem',
         '7':'2.4rem',
         '8':'2.6rem',
         '9':'2.8rem',
         '10':'3rem'
      },
      fontFamily:{
        'cookie': ['Cookie', 'cursive'],
      },
      screens: {
        'sm': '600px',
        'md': '800px',
        'lg': '1024px',
        'xl': '1280px', 
      },
    },
  },
  plugins: [],
}