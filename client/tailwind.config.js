/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayColorLight: "#595959",
        grayColorDark: "#9e9e9e",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
