/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'hero_view': "url('./images/view.jpg')",

      },
      fontFamily: {
        Lora: ['Lora', 'serif']

      }

    },
  },
  variants: {
    display:['group-hover']
  },
  plugins: [],
}
