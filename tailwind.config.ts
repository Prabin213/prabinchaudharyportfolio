
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0FA0CE",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#33C3F0",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#403E43",
          foreground: "#C8C8C9",
        },
        accent: {
          DEFAULT: "#1EAEDB",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          foreground: "#C8C8C9",
        },
      },
      keyframes: {
        "matrix-rain": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow": {
          "0%, 100%": { textShadow: "0 0 5px #0FA0CE, 0 0 15px #0FA0CE, 0 0 20px #0FA0CE" },
          "50%": { textShadow: "0 0 10px #0FA0CE, 0 0 20px #0FA0CE, 0 0 25px #0FA0CE" },
        },
      },
      animation: {
        "matrix-rain": "matrix-rain 20s linear infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
