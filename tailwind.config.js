/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_includes/layouts/*.njk", "./*.liquid"],
  theme: {
  },
  daisyui: {
    themes: ["autumn", "night"],
  },
  plugins: [require("daisyui")],
};