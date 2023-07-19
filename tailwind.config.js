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
        'linear-gradient-1': 'linear-gradient(90deg, hsl(136, 65%, 51%), hsl(192, 70%, 51%))',
      },
    },
  },
  plugins: [],
};
