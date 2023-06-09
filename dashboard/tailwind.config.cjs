/** @type {import('tailwindcss').Config} */
module.exports= {

  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      poppins: ['Nunito', 'sans-serif'],
    }

    ,
  }
  ,
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ],
  darkMode:"class"
}