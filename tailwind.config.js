module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage:{
        'mobile' : "url(./Asset/Img/pattern-background-mobile.svg)",
        'desc' : "url(./Asset/Img/pattern-background-desktop.svg)"
      },

      screens :{
        'mob': '375px',
        'desc': '1440px'
      },


        colors :{
          primary: {
            'pb' : "hsl(225, 100%, 94%)",
            'bl' :  "hsl(245, 75%, 52%)",
            'bl-50' : "#3829e080"
          },

          neutral: {
            vpl : " hsl(225, 100%, 98%)",
            desb  : "hsl(224, 23%, 55%)",
            dk : " hsl(223, 47%, 23%)",
            "dk-50" : "#1f2f5680"
          }
        },

        fontWeight:{
          reg : '500',
          med : "700",
          bold : "900"
        }
    },
  },

  variant:{
    extend:{
     
    }
  },
  plugins: [
    require('./src/Asset/Plugins/customFont')
  ]
}
