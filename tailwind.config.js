/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#F8FAFC",
        "surface-alt": "#F1F5F9",
        primary: {
          DEFAULT: "#0F172A",
          50: "#F8FAFC",
          100: "#E2E8F0",
          400: "#334155",
          500: "#1E293B",
          900: "#0F172A",
        },
        secondary: {
          DEFAULT: "#2563EB",
          50: "#EFF6FF",
          100: "#DBEAFE",
          600: "#2563EB",
          700: "#1D4ED8",
        },
        accent: {
          DEFAULT: "#0B72D7",
          50: "#EFF6FF",
          100: "#DBEAFE",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
        },
        ink: "#0F172A",
        "ink-muted": "#64748B",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      borderRadius: {
        card: "1.5rem",
      },
      boxShadow: {
        soft: "0 20px 45px -20px rgba(15, 23, 42, 0.12)",
        "soft-lg": "0 30px 70px -30px rgba(15, 23, 42, 0.18)",
        subtle: "0 12px 34px -20px rgba(15, 23, 42, 0.08)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.7" },
          "70%": { transform: "scale(1.15)", opacity: "0" },
          "100%": { transform: "scale(0.95)", opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
};
