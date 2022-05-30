module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      'gray-light': '#808080',
      'primary-600': '#7B9A32',
      'primary-700': '#5C7425',
    },
    fontSize: {
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
