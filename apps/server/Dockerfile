# apps/server/Dockerfile (produção)
# Build de contexto = raiz do monorepo (necessário para o pnpm workspace)

FROM node:22-alpine AS base
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
WORKDIR /app

# ---------- deps: instala tudo (com devDeps, precisa p/ compilar e gerar o prisma) ----------
FROM base AS deps
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY apps/server/package.json apps/server/package.json
COPY apps/web/package.json apps/web/package.json
COPY apps/mobile/package.json apps/mobile/package.json
COPY packages/types/package.json packages/types/package.json
COPY packages/utils/package.json packages/utils/package.json
RUN pnpm install --frozen-lockfile --filter server... --ignore-scripts

# ---------- build: gera prisma client + compila TS ----------
FROM deps AS build
COPY packages ./packages
COPY apps/server ./apps/server
RUN pnpm --filter server exec prisma generate
RUN pnpm --filter server build

# ---------- runner: imagem final ----------
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs && adduser -S nodeuser -u 1001

# Reaproveita o node_modules inteiro do estágio "build" (já tem o prisma client
# gerado corretamente). Simples e confiável — o custo é uma imagem um pouco
# maior (inclui devDependencies), aceitável para este projeto.
COPY --from=build --chown=nodeuser:nodejs /app/node_modules ./node_modules
COPY --from=build --chown=nodeuser:nodejs /app/apps/server ./apps/server
COPY --from=build --chown=nodeuser:nodejs /app/packages ./packages

USER nodeuser
EXPOSE 3001

# Atenção: por causa do rootDir do tsconfig, o entrypoint compilado fica em
# dist/apps/server/src/index.js (não dist/index.js).
CMD ["node", "apps/server/dist/apps/server/src/index.js"]