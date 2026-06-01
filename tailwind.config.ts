import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#0ea5e9",
        dark:   "#04060f",
      },
      fontFamily: {
        sans:    ["var(--font-sans)",    "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "sans-serif"],
        mono:    ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      animation: {
        float:         "float 8s ease-in-out infinite",
        "pulse-slow":  "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
