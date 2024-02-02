/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        'flame_bg': "url('src/Assets/Common_images/flames_bg.png')",
      }
    },
  },
  plugins: [],
};
