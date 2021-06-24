module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class' #232F3E #131921 e53e3e
  theme: {
    extend: {
      colors: {
        zonga_pink: {
          light: "#F687B3",
          DEFAULT: "#ED64A6",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
