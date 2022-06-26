/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        darkBlue: "#334680",
        veryDarkBlue: "#282538",
        lightGray: "#B9BDCF",
        lightBlue: "#1E86FF",
      },
      backgroundColor: {
        lightBlue: "#1E86FF",
      },
      backgroundImage: {
        searchbarBackground: "url('/src/assets/backgroundImg.png')",
      },
      fontFamily: {
        poppins: "Poppins" || "sans-serif",
      },
      cursor: {
        "zoom-in": "zoom-in",
        pointer: "pointer",
      },
    },
  },
  plugins: [],
};
