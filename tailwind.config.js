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
      colors:{
        header: '#E7E7E7',
        line: '#936EEA'
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


