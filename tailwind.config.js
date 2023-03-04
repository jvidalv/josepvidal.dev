/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        accent2: "var(--accent2)",
      },
    },
  },
  plugins: [],
};
