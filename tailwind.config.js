/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5B21B6",
        secondary: "#8B5CF6",
        accent: "#C4B5FD",
      },
    },
  },
  plugins: [],
};
