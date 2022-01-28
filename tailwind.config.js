const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{jsx,js,tsx,ts}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        gray: colors.zinc,
      },
    },
  },
  plugins: [],
};
