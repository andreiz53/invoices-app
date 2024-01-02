/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#7C5DFA",
        "primary-light": "#9277FF",
        "primary-dark": "#1E2139",

        neutral: "#888EB0",
        "neutral-light": "#DFE3FA",
        "neutral-dark": "#7E88C3",
        "neutral-darker": "#0C0E16",

        accent: "#EC5757",
        "accent-light": "#9277FF",
      },
    },
  },
  plugins: [],
};
