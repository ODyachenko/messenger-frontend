/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      lato: ['Lato'],
    },
    extend: {
      colors: {
        'secondary-black': '#465352',
        'primary-grey': '#EEF1F1',
        'secondary-grey': '#758A89',
        'primary-green': '#329993',
        'secondary-green': '#E8F7F7',
      },
      borderRadius: {
        'income-msg': '20px 20px 20px 0',
        'outcome-msg': '20px 20px 0 20px',
      },
    },
  },
  plugins: [],
};
