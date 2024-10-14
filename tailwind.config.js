/** @type {import('tailwindcss').Config} */
export default {
  content: [
       "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary:"#00D2FF",
        secondary:"#666666",
        LiteBlack:"#2D2D2D",
        white:"#FFFFFF",
      },

      backgroundImage:{
        "gradient-primary":"linear-gradient(180deg, #00d2FF 0%, #059DBE 100%)",
        "gradient-secondary":"linear-gradient(161.4deg, #00d2FF -5.54%, #059DBE 59.11%)"
      },

      fontFamily:{
        'space-grotesk':['"Space Grotesk"',"sans-serif"],
        'nunito-sans':['"Nunito Sans"',"sans serif"]
      },
      // box shadow
      boxShadow: {
        card:"0px 10px 30px 0px #02B6DC26",
        faq:"0px 0px 25px 0px #02B6DC26",
      },
    },
  },
  plugins: [],
}

