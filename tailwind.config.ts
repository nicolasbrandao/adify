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
        "gradient-highlight":
          "radial-gradient( 41.11% 49.93% at 50% 49.93%,  #475c81 0%, #2b3a56  52.26%, #0f172a 100% )",
      },
    },
  },
  daisyui: {
    themes: ["night"],
  },
  plugins: [daisy],
};
export default config;
