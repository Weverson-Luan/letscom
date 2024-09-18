/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "gray-custom900": "#25262D",
        "neutral-custom500": "#F5F5F9",
        "light-white": "rgba(255, 255, 255, 0.18)",
      }
    },
  },
  plugins: [],
}