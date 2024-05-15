/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './src/**/*.{html,js,jsx}'
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        'llgreen': '#495e57',
        'llgold': '#f4ce14'
      },
      fontFamily: {
        'sans': 'Karla',
        'serif': '"Markazi Text"'
      }
    }
  },
  plugins: []
};