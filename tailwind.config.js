/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ingido-200":"#e0e7ff",
        "terquoise-50":"#466365",
        "white":"#FFFFFF",
        "indigo-500":"#6366f1",
        "indigo-950":"#1e1b4b",
        "indigo-800":"#3730a3",
        "terquois-dark":"#00ced1",
        "gray-300":"#d1d5db"
      },
      
    },
    
  },
  plugins: [],
}

