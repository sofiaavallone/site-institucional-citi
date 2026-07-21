# apps/web/Dockerfile (produção)
# Build de contexto = raiz do monorepo
# PRÉ-REQUISITO: apps/web/next.config.ts precisa ter `output: "standalone"`

FROM node:22-alpine AS base
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
WORKDIR /app

FROM base AS deps
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY apps/web/package.json apps/web/package.json
COPY apps/server/package.json apps/server/package.json
COPY apps/mobile/package.json apps/mobile/package.json
COPY packages/types/package.json packages/types/package.json
COPY packages/utils/package.json packages/utils/package.json
RUN pnpm install --frozen-lockfile --filter web... --ignore-scripts

FROM deps AS build
COPY packages ./packages
COPY apps/web ./apps/web

# Variáveis NEXT_PUBLIC_* precisam existir NO MOMENTO DO BUILD (ficam
# embutidas no bundle do cliente). Passadas via --build-arg no docker compose.
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL

RUN pnpm --filter web build

# ---------- runner ----------
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs && adduser -S nodeuser -u 1001

COPY --from=build /app/apps/web/public ./apps/web/public
COPY --from=build --chown=nodeuser:nodejs /app/apps/web/.next/standalone ./
COPY --from=build --chown=nodeuser:nodejs /app/apps/web/.next/static ./apps/web/.next/static

USER nodeuser
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# O output standalone do Next replica o caminho do workspace: apps/web/server.js
CMD ["node", "apps/web/server.js"]