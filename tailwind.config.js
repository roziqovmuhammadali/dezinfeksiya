/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#056AC7",
        secondary: "#00A9B3",
        "blue-600": "#1D68F9",
        "blue-700": "#0D47A1"
      },
      fontSize: {
        hero: "38px"
      },
      maxHeight: {
        0: "0",
        40: "10rem",
        full: "100%"
      },
      transitionProperty: {
        "max-height": "max-height"
      },
      spacing: {
        18: "4.5rem"
      }
    }
  },
  plugins: []
};
