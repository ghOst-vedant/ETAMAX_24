/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "350px",
    },
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        montserat: ["Montserrat", "serif"],
      },
    },
  },
  plugins: [],
};
