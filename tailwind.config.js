export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3A5993",
        secondary: "#F2F7FC",
      },
      screens: {
        'sm': '520px',
        // => @media (min-width: 520px) { ... }

        'md': '770px',
        // => @media (min-width: 770px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
    plugins: [],
  }
}

