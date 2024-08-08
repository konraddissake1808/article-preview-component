import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {      
    screens: {
      'xs': '320px',
      'sm': '375px',
      'md': '425px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1440px',
      '3xl': '2560px',        
      },
    colors: {
      'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
      'desaturated-dark-blue': 'hsl(214, 17%, 51%)',
      'grayish-blue': 'hsl(212, 23%, 69%)',
      'light-grayish-blue': 'hsl(210, 46%, 95%)',
      'white': '#ffffff',
      'black': '#000000',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
