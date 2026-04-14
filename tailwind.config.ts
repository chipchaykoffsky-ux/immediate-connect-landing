import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: { 900: "#0A1020", 800: "#0E1A33", 700: "#13223F" },
        brand: { 400: "#4A8CFF", 500: "#1E73FF", 600: "#0F5BD6" },
        gold: { 400: "#F5B849" },
        ink: { 100: "#FFFFFF", 300: "#B6C2D9", 500: "#6B7A99" },
      },
      fontFamily: {
        display: ["Space Grotesk", "ui-sans-serif", "system-ui"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(30,115,255,0.25), 0 20px 60px -20px rgba(30,115,255,0.45)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(1200px 600px at 70% 20%, rgba(30,115,255,0.25), transparent 60%), radial-gradient(800px 500px at 20% 80%, rgba(245,184,73,0.10), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
