import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  // Há um pnpm-lock.yaml no $HOME que confunde a detecção automática da raiz
  // do workspace; fixamos a raiz na própria pasta do monorepo.
  outputFileTracingRoot: path.join(__dirname, "../../"),
};

export default nextConfig;
