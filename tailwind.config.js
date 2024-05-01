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
        primary:"#A7CDE9"
      }
    },
  },
  plugins: [],
}