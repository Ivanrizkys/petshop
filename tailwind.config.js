const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "rambla": ["Rambla", "ui-sans-serif", "system-ui"],
        "poppins": ["Poppins", "ui-monospace"]
      },
      colors: {
        "orange-primary": "#E66900",
        "orange-secondary": "#E4761A",
        "orange-transparant": "#FEE7CF",
        "orange-card-primary": "#FED583",
        "bg-hero": "rgba(250, 174, 96, 0.3)",
        "black-primary": "#423E3E",
        "brown-primary": "#805603"
      },
      letterSpacing:{
        "largest": ".5em"
      },
      margin: {
        "19": "4.813rem",
        "27": "6.875rem",
        "32.5": "8.5rem",
        "30.5": "8.188rem",
        "30.1": "8.438rem",
        "38": "9.5rem",
        "49": "12.438rem"
      },
      padding: {
        "3.9": "15px",
        "13": "3.125rem"
      },
      fontSize: {
        "1xl": "22px",
        "5.1xl": "3.125rem",
        "4.3xl": "2.5rem"
      },
      transformOrigin: {
        "full": "100%"
      },
    },
    container: {
      screens: {
        "sm": '640px',
        "md": '768px',
        "lg": '1024px',
        "xl": '1280px',
        "2xl": '1440',
        "mini": "500px",
      }
    },
    screens: {
      "mini": "500px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
