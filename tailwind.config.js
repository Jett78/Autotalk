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
      }
    },
  },
  plugins: [],
}