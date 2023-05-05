/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#8B8B8B",
        blue: "#4338ca",
        purple: "#a855f7",
      },
    },
  },
  plugins: [],
};
