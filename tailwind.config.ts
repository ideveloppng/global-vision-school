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
        gvDarkBlue: "#001B44", 
        gvBlue: "#003399",     
        gvYellow: "#FFC800",   
        gvLightBlue: "#F0F7FF",
      },
      borderRadius: {
        '5xl': '3.5rem',
      },
    },
  },
  plugins: [],
};

export default config;