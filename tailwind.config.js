/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        md: "54.6875em",
        lg: "67.5em",
      },
      fontFamily: {
        lexend: ["Lexend Deca", "sans-serif"],
      },
      lineHeight: {
        paragraph: "1.67",
        title: "1.22",
        stats: "1.42",
      },
      padding: {
        12.5: "3.125rem",
      },
      colors: {
        "very-dark-blue": "hsl(233, 47%, 7%)",
        "dark-blue": "hsl(244, 38%, 16%)",
        "soft-violet": "hsl(277, 64%, 61%)",
        violet: "#AB5CDB",
        "slightly-transparent-white": "hsla(0, 0%, 100%, 0.75)",
        "slightly-transparent-white-aux": "hsla(0, 0%, 100%, 0.6)",
      },
    },
  },
  plugins: [],
};
