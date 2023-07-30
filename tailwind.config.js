/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#33adad",
          50: "#e6f5f5",
          100: "#ccebeb",
          200: "#b2e0e0",
          300: "#99d6d6",
          400: "#80cccc",
          500: "#66c2c2",
          600: "#4cb8b8",
          700: "#33adad",
          800: "#1aa3a3",
          900: "#009999",
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
  plugins: [require("@tailwindcss/typography")],
}
