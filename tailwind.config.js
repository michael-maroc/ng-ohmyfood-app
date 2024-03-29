/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#EAEAEA",
        "light-gray": "#F6F6F6",
        "color-primary": "#9356DC",
        "color-secondary": "#FF79DA",
      },
    },
  },
  plugins: [],
};
