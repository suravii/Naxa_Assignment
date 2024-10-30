/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: { // Change 'color' to 'colors'
        'custom-yellow': '#ffdc1c',
        'custom-orange': '#ffab00',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
        montserrat: ['Montserrat','sans-serif'],
      },
      screens: {
        'sm': '640px',
        'md': '1024px', // Change the md breakpoint to 1024px
        'lg': '1280px',
        'xl': '1536px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
