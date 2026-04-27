/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        primary: {
          50: "#f1f8ee",
          100: "#dcebd3",
          200: "#bcd7ab",
          300: "#94bd7a",
          400: "#6fa051",
          500: "#52853a",
          600: "#3e6a2c",
          700: "#325325",
          800: "#2a4221",
          900: "#23381c",
        },
        cream: {
          50: "#fbf8f1",
          100: "#f5efe0",
          200: "#ecdfbf",
          300: "#d9c48a",
        },
        ink: {
          DEFAULT: "#1f2a1c",
          soft: "#3a4536",
          mute: "#6b7466",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Playfair Display'", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 6px 24px -8px rgba(35,56,28,0.18)",
      },
      backgroundImage: {
        "leaf-gradient":
          "linear-gradient(135deg,#f5efe0 0%,#dcebd3 100%)",
      },
    },
  },
  plugins: [],
};
