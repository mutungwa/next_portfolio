/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(220, 30%, 10%)", // Dark blue
        "darker-blue": "hsl(220, 30%, 5%)", // Darker blue
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: [
          "Inter Tight",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      animation: {
        starMove1: "starMove 50s linear infinite",
        starMove2: "starMove 100s linear infinite",
        starMove3: "starMove 150s linear infinite",
        float1: "float 6s ease-in-out infinite",
        float2: "float 8s ease-in-out infinite",
        float3: "float 10s ease-in-out infinite",
      },
      keyframes: {
        starMove: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-200px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};