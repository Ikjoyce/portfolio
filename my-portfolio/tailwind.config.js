/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      // You can add your brand colors here
      'primary': {
        50:  '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',  // Primary brand color
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
      },
      // Add more custom colors as needed
    },
    fontFamily: {
      // Add custom fonts if you want to use them
      'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
    },
  },
  },
  plugins: [],
}

