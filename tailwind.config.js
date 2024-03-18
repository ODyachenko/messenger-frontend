/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      lato: ['Lato'],
    },
    extend: {
      colors: {
        'primary-grey': '#EEF1F1',
        'primary-green': '#329993',
        'secondary-green': '#216763',
      },
      borderRadius: {
        'income-msg': '20px 20px 20px 0',
        'outcome-msg': '20px 20px 0 20px',
      },
    },
  },
  plugins: [],
};
