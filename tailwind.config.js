/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rojo: '#bf292f',
        rojoHover: '#c53e44',
        epson: '#039',
        epsonHover: '#1a47a3',
      },
    },
  },
  plugins: [],
};
