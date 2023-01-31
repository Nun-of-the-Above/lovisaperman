const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kung: ["var(--font-kung)"],
        sans: ["var(--font-titillium)", ...fontFamily.sans],
      },
      maxHeight: {
        section: "1100px",
      },
      height: {
        section: "1100px",
      },
      screens: {
        desktop: "1400px",
      },
      colors: {
        "link-color": "#D1583D",
        "wax-flower": {
          50: "#fef5f2",
          100: "#ffe8e1",
          200: "#ffd5c8",
          300: "#ffbda8",
          400: "#fd8f6c",
          500: "#f56a3e",
          600: "#e24f20",
          700: "#be3f17",
          800: "#9d3717",
          900: "#82331a",
        },
      },
      aspectRatio: {
        "4/3": "4 / 3",
        paper: "1 / (2**1/2)",
      },
      animation: {
        "spin-slow": "spin 4s ease-in-out infinite",
        "slow-bounce": "customBounce 6s linear infinite",
        "vibrate-slow": "vibrate 0.3s infinite",
        "gentle-bounce": "gentleBounce 3s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(0, 5px)" },
          "100%": { transform: "translate(0,0)" },
        },
        gentleBounce: {
          "0%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(0, -20%)" },
          "100%": { transform: "translate(0,0)" },
        },
        customBounce: {
          "0%": { transform: "translate(0,0)" },
          "16%": { transform: "translate(0,-10px)" },
          "32%": { transform: "translate(0,0)" },
          "48%": { transform: "translate(10px,0)" },
          "64%": { transform: "translate(0,0)" },
          "80%": { transform: "translate(0,10px)" },
          "100%": { transform: "translate(0,0)" },
        },
        vibrate: {
          "0%": { transform: "translate(0,3px) rotate(1deg)" },
          "50%": { transform: "translate(3px,0) rotate(1deg)" },
          "100%": { transform: "translate(0,3px) rotate(-1deg)" },
        },
      },
    },
  },
  plugins: [],
};
