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
      // Fonte da marca (Neue Haas Grotesk Display) como sans padrão.
      // Sobrescreve o stack default do Preflight, então TUDO usa a fonte.
      fontFamily: {
        sans: ["var(--font-display)", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
