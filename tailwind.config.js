/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a7",
        secondary: "#f1c40f",
        secondaryColor: "#64748b",
        danger: "#e74c3c",
        drack: "#0f172a",
        highlight: "#222931",
        background: "#f9f9f9",
        text: "#222931",
        link: "#14b8a7",
        button: "#f1c40f",
        buttonHover: "#e74c3c",
        input: "#222931",
        inputHover: "#14b8a7",
      },
      spacing: {},
      screens: {
        "2xl": "1320px",
      },

      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
