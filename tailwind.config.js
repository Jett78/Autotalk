
/** @type {import('tailwindcss').Config} */

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
        menu_blue: "#3C4DA0",
        navbar: "#A7CDE9",
        gray: "#686163",
        purple: "#3C4DA0",
        darkpurple: "#334B75",
        lightgreen: "#F0FDF5",
        primary: "#A7CDE9",
        lightyellow: "#FFFCEA",
      },
      keyframes: {
        slideleft: {
          from: {
            opacity: "0",
            transform: "translateX(-100px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideright: {
          from: {
            opacity: "0",
            transform: "translateX(100px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
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
      },
      animation: {
        slideright: "slideright 2s ease-in-out 800ms ",
        slideleft: "slideleft 2s ease-in-out 800ms ",
      },
    },
    plugins: [
    ],
  }
}

