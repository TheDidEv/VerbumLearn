/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mypattern1': '#040D12',
        'mypattern2': '#183D3D',
        'mypattern3': '#5C8374',
        'mypattern4': '#93B1A6'
      }
    },
  },
  plugins: [],
}

