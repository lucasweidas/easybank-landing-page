const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-public-sans)', ...fontFamily.sans],
      },
      colors: {
        blue: {
          900: 'hsl(233, 26%, 24%)',
        },
        lime: {
          450: 'hsl(136, 65%, 51%)',
        },
        cyan: {
          450: 'hsl(192, 70%, 51%)',
        },
        gray: {
          100: 'hsl(220, 16%, 96%)',
          400: 'hsl(233, 8%, 62%)',
        },
      },
      backgroundImage: {
        'intro-mobile': 'url("/images/bg-intro-mobile.svg")',
      },
      screens: {
        xsm: '375px',
      },
      padding: {
        18: '4.5rem',
        22: '5.5rem',
      },
      aspectRatio: {
        'article-img': '16/10',
      },
    },
  },
  plugins: [],
};
