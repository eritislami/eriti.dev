const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html"],

  darkMode: "class",

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "1rem"
      }
    },
    extend: {
      fontFamily: {
        serif: ["Playfair Display"],
        sans: ["Poppins", ...defaultTheme.fontFamily.sans]
      }
    }
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp")
  ]
};
