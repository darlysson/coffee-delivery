/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        linearGradient: 'url("/bgGradient.svg")',
      },
      colors: {
        yellow: '#DBAC2C',
        darkYellow: '#C47F17',
        lightYellow: '#F1E9C9',
        purple: '#8047F8',
        darkPurple: '#4B2995',
        lightPurple: '#EBE5F9',
        defaultBgColor: '#FAFAFA',
        button: '#E6E5E5',
        input: '#EDEDED',
        card: '#F3F2F2',
        white: '#FFFFFF',
        title: '#272221',
        subtitle: '#403937',
        defaultText: '#574F4D',
        label: '#8D8686',
        hover: '#D7d5D5',
      },
      fontSize: {
        xxs: '10px',
        'title-32': '2rem',
      },
      fontFamily: {
        baloo: ['Baloo\\ 2', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      borderRadius: {
        '5xl': '36px',
      },
      keyframes: {
        checkout: {
          '0%': {
            boxShadow: '0 0 0 0 #C47F17',
          },
          '70%': {
            boxShadow: '0 0 0 15px rgba(229, 62, 62, 0)',
          },
        },
      },
      animation: {
        checkout: 'checkout 2s infinite',
      },
    },
  },
  plugins: [],
}
