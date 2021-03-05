module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: '#F7FAFF',
          light: '#EDF1FD',
          DEFAULT: '#102fa5',
          dark: '#2C2A44'
        },
        secondary: {
          light: '#24144A',
          DEFAULT: '#6D44FD',
          dark: '#0F0034'
        }
      },
    },
    container: {
      center: true,
      padding: '1rem'
    }
  },
  variants: {
    extend: {
      backgroundColor: ['first'],
    },
  },
  plugins: [],
}
