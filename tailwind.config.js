import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        h1: {
          color: `${theme('text.gray.200')}`
        },
        h2: {
          color: `${theme('text.gray.200')}`
        },
        h3: {
          color: `${theme('text.gray.200')}`
        },
        h4: {
          color: `${theme('text.gray.200')}`
        },
        p: {
          color: `${theme('text.gray.200')}`
        }
      });
    })
  ],
  corePlugins: {
    preflight: false
  }
};
