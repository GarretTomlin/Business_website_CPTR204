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
    extend: {},
  },
  // eslint-disable-next-line global-require,
  plugins: [require('daisyui'),
  ],

};
