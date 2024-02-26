import type { Config } from "tailwindcss";
import daisy from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "grandient-standard": "linear-gradient(to right, #6EE7B7, #CBD5E0);",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  daisyui: {
    themes: [
      {
        adify: {
          primary: "#5e81ac",
          "primary-content": "#e1e5ea",
          secondary: "#81a1c1",
          "secondary-content": "#e1e5ea",
          accent: "#88c0d0",
          "accent-content": "#070e10",
          neutral: "#d8dee9",
          "neutral-content": "#4c566a",
          "base-100": "#4b5563",
          "base-200": "#39454f",
          "base-300": "#2c363f",
          "base-content": "#eceff4",
          info: "#b48ead",
          "info-content": "#0c070b",
          success: "#a2be8c",
          "success-content": "#0c070b",
          warning: "#ebcb8b",
          "warning-content": "#0c070b",
          error: "#bf616a",
          "error-content": "#0c070b",
        },
      },
    ],
  },
  plugins: [daisy],
};

export default config;
