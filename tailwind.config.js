/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#205081',  // Azul oscuro del logo
        secondary: '#3A7CA5', // Azul claro del logo
        accent: '#6EC1E4',    // Azul celeste/acento
        dark: '#181C2F',      // Fondo oscuro moderno
        light: '#F4F7FA',     // Fondo claro moderno
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 