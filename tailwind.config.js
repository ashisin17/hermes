/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{html,jsx}", "./src/*/*.{html,jsx}", "./*.{html,jsx}", "../public/*.{html,jsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#020617",
      lightgray: "#f0f0f0",
      gray: "#34495e",
      red: "#c0392b",
      blue: "#2980b9",
    },
    
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    base: false,
  },
};

