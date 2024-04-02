/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
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
        orange_strong: '#D07C1F',
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
        '17': '4.25rem',
        '76': '19rem',
        input: '21.75rem',
        textarea: '33.75rem',
      },
      height: {
        '22': '5.5rem',
        '76': '19rem',
        input: '2.5rem',
        textarea: '11.25rem',
      },
      maxWidth: {
        '104': '26rem',
      },
      maxHeight: {
        '104': '26rem',
      },
      size: {
        circle: '12.5rem',
      },
      padding: {
        '2.75': '11px',
      },
      lineHeight: {
        '11': '52px',
      },
      letterSpacing: {
        extra: '2px',
      },
      gap: {
        form: '0.4rem',
      },
      backgroundPosition: {
        'teaser': 'center bottom -7.5rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
