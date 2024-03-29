/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          150: "#eaeef4",
        },
        primary: {
          DEFAULT: "#33adcd",
          50: "#e6f0ff",
          100: "#ccebff",
          200: "#b2e0f0",
          300: "#99d6ee",
          400: "#80cce0",
          500: "#66c2e7",
          600: "#4cb8e8",
          700: "#33adcd",
          800: "#1aa3c3",
          900: "#0099c9",
        },
        secondary: {
          DEFAULT: "#3385d6",
          50: "#d9e8f7",
          100: "#bfd9f2",
          200: "#b2d1f0",
          300: "#99c2eb",
          400: "#80b2e6",
          500: "#66a3e0",
          600: "#4d94db",
          700: "#3385d6",
          800: "#1975d1",
          900: "#0066cc",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  maxWidth: {
    screen: "100vw",
  },
  fontSize: {
    xxs: "0.6rem",
  },
  plugins: [
    require("@tailwindcss/forms"), // npm i @tailwindcss/forms
    require("@tailwindcss/typography"), // npm i @tailwindcss/typography
  ],
}
