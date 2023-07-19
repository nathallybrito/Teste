/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
          'imagemFundo':"url('../img/ju.jpeg')",
          'Atletico':"url('../img/seis.jpg')",
          'Marx':"url('../img/marx.jpg')"
      },
    },
  },
  plugins: [],
}
