import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'coral-50': '#f2e4e0',
      'coral-300': '#f6b89e',
      'coral-400': '#f47f6a',
      'coral-500': '#ff534a',
      'coral-600': '#ff5f56'
    },
    extend: {
      
    },
  },
  darkMode:['class'],
  plugins: [nextui()],
};
export default config;
