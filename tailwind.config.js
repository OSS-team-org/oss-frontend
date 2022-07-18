module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      "gray-light": "#808080",
      "gray-deep": "#999999",
      "primary-600": "#7B9A32",
      "primary-700": "#5C7425",
      gray: "#E6E6E6",
    },
    fontSize: {
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    fontFamily: {
      sans: ["Quicksand", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      width: {
        70: "14.375rem",
        100: "72rem",
      },
      lineHeight: {
        12: "5",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("prettier-plugin-tailwindcss")],
};
