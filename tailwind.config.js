/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "100%": { opacity: "0" },
        },
        show: {
          "0%": { right: "0", opacity: "0" },
          "100%": { opacity: "1", right: "55px" },
        },
      },
      animation: {
        slide: "slide 1s ease-out",
        show: "show 1s ease-out",
      },
    },
  },
  plugins: [],
};
