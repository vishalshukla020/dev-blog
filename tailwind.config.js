/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#282a36",
        foreground: "#f8f8f2",
        accent: "#50fa7b",
        accent_primary: "#8be9fd",
        accent_secondary: "rgb(236 72 153)",
        yellow: "#f1fa8c",
        purple: "#bd93f9",
        orange: "#ffb86c",
      },
      transitionTimingFunction: {
        "linear-ease": "cubic-bezier(.11,.86,.63,.98)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
