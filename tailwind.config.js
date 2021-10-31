const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      cyan: colors.cyan,
      white: colors.white,
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.amber,
      bluebluf: {
        DEFAULT: '#161EDE',
      },
      cyanbluf: {
        DEFAULT: '#77E1FF',
      },
      bluetextbluf: {
        DEFAULT: '#36375E',
      },
      graybluf: {
        DEFAULT: '#adb5bd',
      },
      graybluf2: {
        DEFAULT: '#7e9194',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
