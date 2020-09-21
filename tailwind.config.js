module.exports = {
  important: true,
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  theme: {
    darkSelector: '.dark-mode',
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      header: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          lighter: '#4FD1C5',
          default: '#38B2AC',
          darker: '#319795',
        },
        secondary: {
          lighter: '#63B3ED',
          default: '#4299E1',
          darker: '#3182CE',
        },
        'nav-color': 'var(--nav-color)',
        'light-nav-color': 'var(--light-nav-color)',
      },
    },
    spinner: (theme) => ({
      default: {
        color: '#dae1e7', // color you want to make the spinner
        size: '1em', // size of the spinner (used for both width and height)
        border: '2px', // border-width of the spinner (shouldn't be bigger than half the spinner's size)
        speed: '500ms', // the speed at which the spinner should rotate
      },
      // md: {
      //   color: theme('colors.red.500', 'red'),
      //   size: '2em',
      //   border: '2px',
      //   speed: '500ms',
      // },
    }),
  },
  variants: {
    backgroundColor: [
      'dark',
      'responsive',
      'group-hover',
      'group-focus',
      'focus-within',
      'first',
      'last',
      'odd',
      'even',
      'hover',
      'focus',
    ],
    display: [
      'dark',
      'dark-focus-within',
      'responsive',
      'group-hover',
      'group-focus',
      'focus-within',
      'first',
      'last',
      'odd',
      'even',
      'hover',
      'focus',
      'active',
      'visited',
      'disabled',
    ],
    borderColor: [
      'dark',
      'dark-focus-within',
      'responsive',
      'group-hover',
      'group-focus',
      'focus-within',
      'first',
      'last',
      'odd',
      'even',
      'hover',
      'focus',
      'active',
      'visited',
      'disabled',
    ],
    borderWidth: ['dark', 'responsive'],
    textColor: ['dark', 'responsive', 'hover', 'focus'],
    spinner: ['responsive'],
    float: ['responsive', 'direction'],
    margin: ['responsive', 'direction'],
    padding: ['responsive', 'direction'],
  },
  corePlugins: {},
  plugins: [
    require('tailwindcss-dark-mode')(),
    require('tailwindcss-spinner')({
      className: 'spinner',
      themeKey: 'spinner',
    }),
    require('tailwindcss-elevation')([
      'responsive',
      'hover',
      'focus',
      'active',
      'group-hover',
      'focus-within',
    ]),
    require('tailwindcss-dir')(),
  ],
}
