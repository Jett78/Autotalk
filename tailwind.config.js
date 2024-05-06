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
        menu_blue: "#3C4DA0"
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
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'playfair': ["Playfair Display", 'serif']
      }
    },
    plugins: [
    ],
  }
}

