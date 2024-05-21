/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{html,jsx}", "./src/*/*.{html,jsx}", "./*.{html,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    base: false,
  },
};

