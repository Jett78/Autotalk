/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:"#686163",
        purple:"#3C4DA0",
        darkpurple:"#334B75",
        lightgreen:"#F0FDF5",
        primary:"#A7CDE9",
        lightyellow:"#FFFCEA",
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
},
    animation: {
      slideright: "slideright 2s ease-in-out 800ms ",
      slideleft: "slideleft 2s ease-in-out 800ms ",
    },
  },
  plugins: [],
}

