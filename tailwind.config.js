/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: { sans: ['Titillium Web', 'system-ui'] },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
    },
    extend: {
      fontSize: {
        base: '0.9rem',
      },
      colors: {
        orange: '#f8991d',
        'orange-dark': '#ff7f00',
      },
    },
  },
  plugins: [],
}
