/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // <-- ESSA LINHA É ESSENCIAL PARA O TEMA FUNCIONAR!
  theme: {
    extend: {},
  },
  plugins: [],
}
