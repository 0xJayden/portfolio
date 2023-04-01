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
          "50%": { transform: "translateY(20px)", opacity: "0" },
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
          "50%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        fadeUp2: {
          "0%": {
            transform: "translateY(-20px)",
            opacity: "0",
          },
          "50%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        fadeRight: {
          "0%": {
            transform: "translateX(-20px)",
            opacity: "0",
          },
          "50%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": {
            transform: "translateX(0px)",
          },
        },
        fadeLeft: {
          "0%": {
            transform: "translateX(20px)",
            opacity: "0",
          },
          "50%": { transform: "translateX(20px)", opacity: "0" },
          "100%": {
            transform: "translateX(0px)",
          },
        },
      },
      animation: {
        slide: "slide 1s ease-out",
        show: "show 1s ease-out",
        dropIn: "dropIn 1200ms ease-in-out",
        fadeDown: "fadeDown 1800ms ease-in-out",
        fadeUp: "fadeUp 2000ms ease-in-out",
        fadeUp2: "fadeUp2 1000ms ease-in-out",
        fadeUp3: "fadeUp2 1200ms ease-in-out",
        fadeUp4: "fadeUp2 1400ms ease-in-out",
        fadeRight: "fadeRight 1500ms ease-in-out",
        fadeLeft: "fadeLeft 1900ms ease-in-out",
      },
    },
  },
  plugins: [],
};
