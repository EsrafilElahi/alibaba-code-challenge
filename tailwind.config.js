const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  important: true,
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    fontSize: {
      'lg': ['14px', '24px'],
      'xl': ['16px', '32px'],
      'xxl': ['19px', '28px'],
      '2xl': ['23px', '30px'],
      '3xl': ['28px', '30px'],
    },
    colors: {
      // dark mode
      darkModeText: "hsl(0, 0%, 100%)",
      darkModeElement: "hsl(209, 23%, 22%)",
      darkModeBG: "hsl(207, 26%, 17%)",
      borderDark: "hsl(207, 26%, 16.5%)",
      borderDark2: "hsl(207, 26%, 15.5%)",
      
      // light mode
      lightModeText: "hsl(200, 15%, 8%)",
      lightModeElement: "hsl(0, 0%, 100%)",
      lightModeBG: "hsl(0, 0%, 98%)",
      lightModeInput: "hsl(0, 0%, 52%)",
      borderLight: "hsl(0, 0%, 97%)",
      borderLight2: "hsl(0, 0%, 94%)",

      // other colors
      primary: "#3fa9f5",
      gray: "#b1aaaa",
      white: "#fff"
    },
    extend: {
      fontFamily: {
        nunito300: "Nunito-300",
        nunito600: "Nunito-600",
        nunito800: "Nunito-800",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },

  plugins: [
    plugin(function ({ addVariant }) {
      // custom className for only mobile view
      addVariant('xs-only', "@media screen and (max-width: theme('screens.md'))");
    }),
  ],
};
