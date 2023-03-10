/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // container: {
    //   center: true
    // },
    // replaces default sizes from tailwind when placed in them section
    // fontSize: {
    //   xs: '12px',
    //   sm: '15px',
    //   base: '18px'
    // },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    //can be used for things like margin
    // spacing: {
    //   '1': '8px',
    //   '2': '12px',
    //   '3': '16px',
    //   '4': '24px',
    //   '5': '32px',
    //   '6': '48px',
    // },


    // colors: {
    //   vuejs: "#41f07e"
    // }, if you put this colors object it will replace all the built in tailwind colors with ones that you put. If you add them to extend it wont replace
    extend: {

      // colors: {
      //   vuejs: "#41f07e"
      // },

      // fontSize: {
      //   xs: '12px',
      //   sm: '15px',
      //   base: '18px'
      // }

    },
  },
  // plugins are javascript helpers to create stylesheets using js
  plugins: [],
}
