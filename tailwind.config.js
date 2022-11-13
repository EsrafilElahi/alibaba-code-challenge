const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    fontSize: {
      lg: ['14px', '20px'],
      xl: ['16px', '24px'],
    },
    colors: {
      // dark mode
      darkModeText: "hsl(0, 0%, 100%)",
      darkModeElement: "hsl(209, 23%, 22%)",
      darkModeBG: "hsl(207, 26%, 17%)",

      // light mode
      lightModeText: "hsl(200, 15%, 8%)",
      lightModeElement: "hsl(0, 0%, 100%)",
      lightModeBG: "hsl(0, 0%, 98%)",
      lightModeInput: "hsl(0, 0%, 52%)",
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
