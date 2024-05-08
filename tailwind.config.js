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
          DEFAULT: "#506c7f",
          50: "#f8fafc",
          100: "#e0e6ea",
          200: "#c8d1d8",
          300: "#b0bdc6",
          400: "#98a9b4",
          500: "#8095a3",
          600: "#688091",
          700: "#506c7f",
          800: "#38586d",
          900: "#20435b",
          950: "#082f49",
        },
        secondary: {
          DEFAULT: "#6d859f",
          50: "#f0f9ff",
          100: "#dde8f1",
          200: "#cbd8e4",
          300: "#b8c7d6",
          400: "#a5b7c8",
          500: "#93a6bb",
          600: "#8095ad",
          700: "#6d859f",
          800: "#5a7491",
          900: "#486484",
          950: "#355376",
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
    require("tailwind-scrollbar"), // npm i --save-dev tailwind-scrollbar
    require("@tailwindcss/forms"), // npm i --save-dev @tailwindcss/forms
    require("@tailwindcss/typography"), // npm i --save-dev @tailwindcss/typography
  ],
}
