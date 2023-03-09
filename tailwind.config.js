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
        dropIn: {
          "0%": { transform: "scale(1.3)", opacity: "0.2" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        fadeDown: {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "80%": { transform: "translateY(20px)", opacity: "0" },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
        fadeUp: {
          "0%": {
            transform: "translateY(-20px)",
            opacity: "0",
          },
          "75%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
      },
      animation: {
        slide: "slide 1s ease-out",
        show: "show 1s ease-out",
        dropIn: "dropIn 1500ms ease-in-out",
        fadeDown: "fadeDown 2s ease-in-out",
        fadeUp: "fadeUp 2500ms ease-in-out",
      },
    },
  },
  plugins: [],
};
