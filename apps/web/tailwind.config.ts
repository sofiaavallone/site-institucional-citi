import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Identidade visual do CITi
        citi: {
          green: "#00DB58", // cor do botão "Solicitar diagnóstico" / destaque
        },
      },
    },
  },
  plugins: [],
};

export default config;
