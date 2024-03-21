/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      columns: {
        '6xs': '10rem',
        '5xs': '12rem'
      },
      height: {
        inherit: 'inherit'
      },
      width: {
        inherit: 'inherit'
      },
      scale: {
        98: '0.98'
      }
    }
  },
  plugins: []
}
