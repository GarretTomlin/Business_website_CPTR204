/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/templates/**/*.html',
    './*.html',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '140px',
    },
      colors: {
        transparent: 'transparent',
        blue: '#002F87',
        yellow: '#FFDD00',
        gray: '#F4F4F4'

      },

    extend: {},
  },
  plugins: [require('daisyui'),
  ],

};
