/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop-1920-Res': '1920px',
        // => @media (min-width: 1280px) { ... }

        'desktop-1440-Res': '2560px'
      },
    },
  },
  plugins: [],
}

