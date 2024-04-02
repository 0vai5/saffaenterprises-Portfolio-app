/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '-100px 0px 30px -10px rgba(0,0,0,0.1)',
        
      }
    },
  },
  plugins: [],
}

