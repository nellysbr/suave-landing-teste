import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "custom-low": "#db1a32",
      white: "#ffffff",
      "custom-yellow": "#e4b236",
      "custom-container-01": "#eeb92e",
      "custom-container-02": "#b61e31",
      "custom-container-03": "#abd8e4",
      "custom-container-04": "#e48193",
    },
  },

  plugins: [],
};
export default config;
