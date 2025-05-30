const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        circlebg: "url('/resources/circlebg.svg')",
        circlebgfull: "url('/resources/circlebg-full.svg')",
      }),
      backgroundSize: {
        "50%": "50%",
        16: "4rem",
        circle: "auto 50%",
      },
      fontFamily: {
        sans: ["Red Hat Display", "-apple-system", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      colors: {
        primarygrey: "var(--primary--grey)",
        darkgrey: "var(--dark--grey)",
        white: "var(--white)",
        secondarygrey: "var(--secondary--grey)",
        codeyellow: "var(--codeyellow)",
        codesand: "var(--codesand)",
        codemustard: "var(--codemustard)",
        codegreen: "var(--codegreen)",
        codeblue: "var(--codeblue)",
        codewhite: "var(--codewhite)",
        codewhitedark: "var(--codewhitedark)",
        codepink: "var(--codepink)",
        codeorange: "var(--codeorange)",
        headerlight: "var(--header--light)",
        headerdark: "var(--header--dark)",
      },
      minHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        screen50: "50vh",
        screen75: "75vh",
      },
      maxHeight: {
        102: "26rem",
        108: "28rem",
      },
      screens: {
        xs: "400px",
        ...defaultTheme.screens,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
