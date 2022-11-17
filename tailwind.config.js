/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/templates/**/*.{html,js}',
    '{html,js}',
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('daisyui')],
};
