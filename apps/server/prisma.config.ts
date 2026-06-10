import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Prefere a URL direta (localhost) para comandos de CLI rodando fora do Docker.
    // Faz fallback para DATABASE_URL (host "postgres") quando rodando dentro do container.
    url: process.env.DATABASE_DIRECT_URL ?? process.env.DATABASE_URL ?? "",
  },
  migrations: {
    path: "prisma/migrations",
  },
});
