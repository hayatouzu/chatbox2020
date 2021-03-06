module.exports = {
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#c3504f',
      ivory: '#FAF7F7',
    }),
    colors: {
      black: '#4d4b4d',
      white: '#ffffff',
    },
    screens: {
      sm: '640px',
      lg: '980px',
    },
    extend: {
      colors: {
        primary: '#c3504f',
      },
      fontSize: {
        '7xl': '5rem',
        '42px': '42px',
        '28px': '28px',
        '15px': '15px',
      },
      height: {
        '500px': '500px',
        '200px': '200px',
        '340px': '340px',
        '800px': '800px',
      },
    },
  },
  variants: {},
  plugins: [],

  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
