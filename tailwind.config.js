/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundPosition: {
      'teaser': 'center bottom -7.5rem'
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000000',
        gray_strong: '#656461',
        gray: '#E4E6EE',
        gray_light: '#F6F6F8',
        white: '#FFFFFF',
        orange: '#F49716',
        orange_light: '#FF5C2',
        blue: '#007589',
        blue_light: '#5BD7EC',
        brown: '#A39356',
        brown_light: '#BBC896',
        green: '#89AC8F',
        green_light: '#BBE3C3',
        red: '#C76D5C',
        brown_strong: '#C1672D',
        button_black: '#1D1D1B',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'serif': ['Montserrat', 'serif'],
        'cormorant': ['Cormorant', 'serif'],
        'cormorant_sc': ['Cormorant SC', 'serif'],
        'kaushan': ['Kaushan Script', 'cursive'],
        'open': ['Open Sans', 'sans-serif']
      },
      fontSize: {
        xxs: '10px',
      },
      width: {
        input: '21.75rem',
        textarea: '33.75rem',
      },
      height: {
        input: '2.5rem',
        textarea: '11.25rem',
      },
      padding: {
        '2.75': '11px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
