module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1180px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      grey: {
        100: " #FDFDFD", // input bg
        200: " #FEFEFE", // page bg
        250: " #F8FBFF", // user page bg
        270: " #EBEFF2", // user page bg
        300: " #ACACAC", // color when disabled state
        400: " #B1B1B1", // search input placeholder
        800: " #757575", // input labels color
        900: " #757575", // input boder color
      },
      lightblue: {
        100: "#83B1F6", // +
        200: "#F1F6FA",
        300: "#E4F2FF",
        400: "#0067FF",
        500: "#006DFE", // "light_blue" from design
        600: "#639dc7", // 99, 157, 199 - light blue cover footer used with 60% opacity
      },
      darkblue: {
        500: "#5A9AF7", // border color of buttons
        600: "#063b6d", // 6, 59, 109 - blue, used with 50% opacity
        700: "#164F85",
        800: "#0A4C74", // color when active sate of component
        900: "#102746", // "dark_blue" from design
      },
      // Used colors from design
      blue: {
        200: "#F1F6FA",
        400: "#006DFE",
        900: "#102746",
      },
      green: {
        100: "#B5F8C3", // +
        300: "#8FF53F", // +
        800: "#408C05", // +
        900: "#468515",
      },
      red: {
        100: "#ffb7b8",
        400: "#DD3B5E",
      },
      orange: {
        200: "#FAE7C7",
      },
    },

    fontFamily: {
      "el-messiri": ["El Messiri", "sans-serif"],
      comfortaa: ["Comfortaa", "cursive"],
    },
    extend: {
      screens: {
        lg: "1180px",
        // => @media (min-width: 992px) { ... }
      },
      borderRadius: {
        "5xl": "3.1rem",
        "10xl": "6.2rem",
      },
      boxShadow: {
        xs: " 0px 2px 5px rgba(0, 0, 0, 0.2)",
        sm: " -5px 0px 20px rgba(4, 4, 4, 0.2)",
        md: " 0px 5px 20px rgba(0, 0, 0, 0.2)",
        base: "0px 5px 30px rgba(0, 0, 0, 0.1)",
        hover: " 0px 5px 10px rgba(0, 0, 0, 0.2)",
        card: "10px 10px 20px rgba(8, 75, 225, 0.2)",
        plan: "0px 3px 7px rgba(134, 134, 134, 0.3)",
        "profile-card": "2px 4px 15px rgba(138, 185, 255, 0.1)"

      },
      dropShadow: {
        sm: "0px 1px 8px rgba(0, 0, 0, 0.4)",
        base: "0px 5px 30px rgba(0, 0, 0, 0.1)",
        hover: " 0px 5px 10px rgba(0, 0, 0, 0.2)",
      },
      backgroundSize: {
        "25%": "25%",
        "35%": "35%",
      },
      backgroundImage: {
        "button-primary": "linear-gradient(180deg, #5E9EFF 0%, #366695 100%)",

        "gradient-blue-300":
          "linear-gradient(270deg, #D5EBF8 0%, #EEF6FE 100%)",
        "gradient-blue-400":
          "linear-gradient(180deg, #62A1CF 0%, #9DCCF9 100%)",
        footer: "url('/src/assets/images/footer.webp')",
        "background-main": "url('/src/assets/images/background.webp')",
        "contact-us": "url('/src/assets/images/contact-us-background.webp')",
        "background-main-vertical":
          "url('/src/assets/images/background-vertical.webp')",
        card: "url('/src/assets/images/card-background.webp')",
        "popup-login": "url('/src/assets/images/popup-login.webp')",
        "popup-sign-up": "url('/src/assets/images/popup-sign-up.webp')",
        "not-found": "url('/src/assets/images/404.webp')",
        bronze:
          "linear-gradient(90deg, #B5947D 0%, #FFECE0 6.39%, #B6937D 12.16%, #F0CAB2 18.2%, #A47C6C 26.44%, #7F5B4A 72.83%, #AC836D 79.97%, #AB836E 91.3%, #8E6958 100%)",
        "bronze-opacity":
          "linear-gradient(90deg, rgba(181, 148, 125, 0.3) 0%, rgba(255, 236, 224, 0.3) 6.39%, rgba(182, 147, 125, 0.3) 12.16%, rgba(240, 202, 178, 0.3) 18.2%, rgba(164, 124, 108, 0.3) 26.44%, rgba(127, 91, 74, 0.3) 72.83%, rgba(172, 131, 109, 0.3) 79.97%, rgba(171, 131, 110, 0.3) 91.3%, rgba(142, 105, 88, 0.3) 100%)",
        silver:
          "linear-gradient(90deg, #B3ABA5 0%, #FFFFFF 4.93%, #B0A9A3 11.02%, #DAD1CC 17.47%, #9E9690 24.99%, #9A9187 46.49%, #7A756A 65.92%, #A39B90 91.3%, #756F67 100%)",
        "silver-opacity":
          "linear-gradient(90deg, rgba(179, 171, 165, 0.3) 0%, rgba(255, 255, 255, 0.3) 4.93%, rgba(176, 169, 163, 0.3) 11.02%, rgba(218, 209, 204, 0.3) 17.47%, rgba(158, 150, 144, 0.3) 24.99%, rgba(154, 145, 135, 0.3) 46.49%, rgba(122, 117, 106, 0.3) 65.92%, rgba(163, 155, 144, 0.3) 91.3%, rgba(117, 111, 103, 0.3) 100%)",
        gold: "linear-gradient(270deg, #E3A455 0%, #BA7F3B 2.58%, #F6DBA6 9.09%, #FFEBC4 16.54%, #F0BE79 30.03%, #F6DBA6 49.58%, #BA7F3B 76.57%, #EEBC70 85.41%, #3F1F0F 100%)",
        "gold-opacity":
          "linear-gradient(270deg, rgba(227, 164, 85, 0.3) 0%, rgba(186, 127, 59, 0.3) 2.58%, rgba(246, 219, 166, 0.3) 9.09%, rgba(255, 235, 196, 0.3) 16.54%, rgba(240, 190, 121, 0.3) 30.03%, rgba(246, 219, 166, 0.3) 49.58%, rgba(186, 127, 59, 0.3) 76.57%, rgba(238, 188, 112, 0.3) 85.41%, rgba(63, 31, 15, 0.3) 100%)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({ strategy: "class" }),
    require("@tailwindcss/line-clamp"),
    require('tailwind-scrollbar'),

  ],
};

// TODO:
// 1. Add default padding/mx-auto to container after design finished
// 2. Check color palette
