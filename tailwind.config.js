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
    require("tailwind-scrollbar"), // npm i --save-dev tailwind-scrollbar
    require("@tailwindcss/forms"), // npm i --save-dev @tailwindcss/forms
    require("@tailwindcss/typography"), // npm i --save-dev @tailwindcss/typography
  ],
}
