/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      screens: {
        'xs': '320px',
        // 'md': '768px',
      },
      colors:{
        header: '#E7E7E7',
        line: '#936EEA',
        'pale-grey':'#C2C2C2',
        'background-pale-purple': '#F5F4F9', 
        'background-main-purple': '#5E3DB3'
      },
      width: {
        '100%': '100%'
      },
      height:{
        300: '300px'
      },
      inset: {
        '50%': '50%',
        '-15%': '-15%',
        '-20%': '-20%',
        '-35%': '-35%',
      },
      rotate: {
        '135': '135deg',
      }
    },
  },
  plugins: [],
}


