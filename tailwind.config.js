module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    typography: {
      default: {
        css: {
          'code::before': {
            content: '""',
          },
          'code::after': {
            content: '""',
          },
        },
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require(`@tailwindcss/typography`)
  ]
}
