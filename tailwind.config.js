import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montreal: ['"Neue Montreal"', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#0000FF', // Custom brand blue color
        'scroll-background': '#DBFF00', // Custom scroll background color
      },
      animation:{
        "loop-scroll":"loop-scroll 20s linear infinite",
      },
      keyframes:{
        "loop-scroll":{
          from:{transform : "translateX(0)"},
          to:{transform : "translateX(-100%)"},
        },
      },
    },
  },
  plugins: [],
};

