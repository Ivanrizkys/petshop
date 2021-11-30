const plugin = require('tailwindcss/plugin');

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
        "bg-hero": "rgba(250, 174, 96, 0.3)",
        "black-primary": "#423E3E"
      },
      letterSpacing:{
        "largest": ".5em"
      },
      margin: {
        "27": "6.875rem",
        "32.5": "8.5rem"
      },
      fontSize: {
        "5.1xl": "3.125rem"
      }
    },
    container: {
      screens: {
        "sm": '640px',
        "md": '768px',
        "lg": '1024px',
        "xl": '1280px',
        "2xl": '1440'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
