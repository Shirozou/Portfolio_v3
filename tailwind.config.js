/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#030712',
          card: '#0f172a',
          blue: '#2563eb',
          cyan: '#38bdf8',
        }
      }
    },
  },
  plugins: [],
}