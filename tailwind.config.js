/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'ph': '300px', // => @media (min-width: 300px) { ... }

      'pad': '450px', // (min-width: 450px) 

      'b-pad': '550px', // (min-width: 550px) 

      'sm': '640px', // (min-width: 640px) 

      'md': '768px', // (min-width: 768px) 

      'bmd': '950px', // (min-width: 950px) 

      'lg': '1024px', // (min-width: 1024px) 

      'blg': '1170px', // (min-width: 1170px) 

      'xl': '1280px', // (min-width: 1280px) 

      '2xl': '1536px', // (min-width: 1536px) 
    },
  },
  plugins: [],
}