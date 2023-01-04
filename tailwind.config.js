/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "nature-light": "url('/section-1.png')",
        "nature-dark": "url('/nature-dark.jpg')",
      },
      fontFamily: {
        rubberstamp: ["Rubberstamp", "sans-serif"],
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [],
};
