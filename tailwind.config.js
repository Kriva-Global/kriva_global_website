/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust to match your project structure
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0000FF', // Custom brand blue color
      },
    },
  },
  plugins: [],
}