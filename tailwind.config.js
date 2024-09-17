/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        
        "back": "url('./../../public/5.png')",
        "myback": "url('./../../public/mainback.png')",
        "bodyback": "url('./../../public/bodyback.png')",
        "cardback": "url('./../../public/cardback.png')",
        "cardback2": "url('./../../public/cardback2.png')",
        "cardback1": "url('./../../public/cardback1.png')",
        "bilingback": "url('./../../public/bilingback.webp')",
        "back2": "url('./../../public/8.jpg')",
        "cardimgfree": "url('./../../public/cardimgfree.webp')",
       
      },
      fontFamily:{
        myfont:'nasim',
        headfont:'iran',
       
      }
    },
  },
  plugins: [],
};
