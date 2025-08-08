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
      fontFamily: {
        fira: ["Fira Mono", "sans-serif"],
        dot: ["DotGothic16", "sans-serif"],
        vt: ["VT323", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        plex: ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        text: "#4c4f69",
        "surface-0": "#ccd0da",
        crust: "#dce0e8",
        base: "#303446",
      },
    },
  },
  plugins: [],
};
export default config;
