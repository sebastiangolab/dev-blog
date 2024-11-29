import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        small: "480px",
        medium: "768px",
        large: "976px",
        huge: "1440px",
      },
      colors: {
        white: "#fff",
        black: "#333",
        primary: "#4977e6",
      },
    },
  },
  plugins: [],
} as Config;
