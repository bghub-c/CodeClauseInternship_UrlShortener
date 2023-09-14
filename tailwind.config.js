/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: ["./index.html", "./main.js"],
  theme: {
    extend: { 
      letterSpacing: {
        widestest: '.20em',
        zaydawide: '.35em',
      },
      screens:{
        xs:"425px"
      },
      colors:{
      bkg : "#171819",
      drkgrn :"#0c3b43",
      muted:"#C9CBCF",
      accent:"#21C492",
      drkkgn:"#0c3b43",
      insta:"#DD2A7B",
      fb:"#3B5998",
      watspp:"#25D366",
      lnkin:"#0077B5",
    },
    dropShadow:{
        "text-sm":"1px 1px 0px rgba(0,0,0.90)",
        "text-md":"1px 2px 0px rgba(0,0,0.90)",
        "text-lg":"1px 4px 0px rgba(0,0,0.90)",
    },
    container:{
      center:true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily:{
      sans: ["Outfit","sans-serif",'Acme'],
      fontSize:{
          sm:["clamp(1.00nem,calc(0.92rem + 0.39vw), 1.20nem)", "1.4"],
          
          base:["clamp (1.13nem, calc (0.98rem + 0.73vw), 1.50лem)", "1.5"],
          
          lg:["clamp (1.27nem,calc(1.03nem + 1.19vw), 1.88nem)", "1.4"],
          
          xl: ["clamp(1.42nem, calc(1.06лem +1.80vw), 2.34лem)", "1.4"],
          
          "2xl": ["clamp (1.60nem,calc(1.08rem + 2.59vw), 2.93лem)", "1.2"],
          
          "3xl": ["clamp (1.80nem,calc(1.08rem +3.63vw),3.66лem)", "1.1"],
          
          "4xl":["clamp (2.03nem,calc(1.03rem + 4.98vw), 4.58лem)", "1"],
          
          "5xl":["clamp (2.28nem,calc(0.94rem + 6.71vw),5.72nem)", "1"],
          
          "6xl":["clamp (2.57nem,calc (0.78rem + 8.95vw), 7.15лem) ", "1"]
      },
    },
  },
  },
  plugins: [
    plugin(( { addUtilities, theme }) => {
      addUtilities({
        ".fade-up": {
          transition:
          "transform 1s cubic-bezier(0.64, 0.04, 0.26, 0.87), opacity 0.8s cubic-bezier(0.64, 0.04, 0.26, 0.87)",
          opacity: theme("opacity.0"),
          transform: "translate3d(0, 2rem, 0)",
        },
        ".faded": {
          opacity: theme("opacity.100"),
          transform: "translate3d(0, 0, 0)",
        },
      });
    }) 
  ],
};
