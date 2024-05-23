/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{html,jsx}", "./src/*/*.{html,jsx}", "./*.{html,jsx}", "../public/*.{html,jsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#020617",
      gray: "#f0f0f0",
    },
    
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    base: false,
  },
};

