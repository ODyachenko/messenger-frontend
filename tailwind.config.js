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
        'hover-btn': '#206763',
      },
      borderRadius: {
        'income-msg': '20px 20px 20px 0',
        'outcome-msg': '20px 20px 0 20px',
      },
      boxShadow: {
        'field-shadow': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
      },
      height: {
        'chat-height': 'calc(100vh - 344px)',
      },
    },
  },
  plugins: [],
};
