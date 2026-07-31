# Site Institucional do CITi

Novo site institucional do **CITi — Centro Integrado de Tecnologia da Informação** (CIn-UFPE). Landing page de alto nível visual e técnico, com formulário de contato funcional, pronta para produção.

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-4-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![Turborepo](https://img.shields.io/badge/Turborepo-2.x-EF4444?style=flat-square&logo=turborepo&logoColor=white)](https://turbo.build/)
[![pnpm](https://img.shields.io/badge/pnpm-9.x-F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io/)

---

## Visão geral

Monorepo gerenciado por **Turborepo + pnpm**:

| App / pacote | Descrição |
|---|---|
| `apps/web` | Site institucional em **Next.js 15** (App Router) + **Tailwind CSS**. |
| `apps/server` | API em **Express + TypeScript** que recebe o formulário de contato e envia o lead por e-mail (Resend). |
| `packages/types` | Tipos TypeScript compartilhados (ex.: `ContactInput`, `ApiResponse`). |
| `packages/utils` | Utilitários compartilhados. |

> O site funciona mesmo **sem o servidor no ar**: seções de conteúdo têm fallback de dados mockados. Apenas o envio do formulário depende da API.

## Stack e escolhas técnicas

- **Next.js 15 (App Router) + React 19** — renderização rápida, otimização de imagens (`next/image`) e fontes locais, metadados/SEO nativos.
- **Tailwind CSS** — design system consistente com a identidade do CITi (cores, tipografia Neue Haas Display).
- **TypeScript fim a fim** — tipos compartilhados entre web e server via `@repo/types`.
- **Express + Zod** — API enxuta com validação de schema no backend.
- **Resend** — envio transacional do lead do formulário por e-mail.
- **Segurança**: `helmet` (cabeçalhos), `express-rate-limit` (anti-flood), **honeypot** + **consentimento LGPD** no formulário, e escape de HTML no corpo do e-mail.
- **SEO**: `title`, `meta description`, **Open Graph** e Twitter Card, com imagem OG gerada dinamicamente (`next/og`).
- **Acessibilidade**: navegação por teclado, `focus-visible`, `aria-*`, `alt` em imagens e bom contraste.

## Requisitos

- **Node.js 20+**
- **pnpm 9+** (`npm i -g pnpm`)
- Conta no [Resend](https://resend.com) (para o envio do formulário em produção)

## Rodando localmente

```bash
# 1. Instalar dependências (na raiz do monorepo)
pnpm install

# 2. Configurar variáveis de ambiente
cp .env.example apps/web/.env.local      # ajuste NEXT_PUBLIC_API_URL e NEXT_PUBLIC_SITE_URL
cp .env.example apps/server/.env         # ajuste RESEND_API_KEY, CONTACT_TO_EMAIL, etc.

# 3. Subir tudo (web + server) em paralelo
pnpm dev
```

- Web: http://localhost:3000
- API: http://localhost:3001 (healthcheck em `/health`)

Rodar apenas um app:

```bash
pnpm --filter web dev      # só o site
pnpm --filter server dev   # só a API
```

### Variáveis de ambiente

**Web (`apps/web/.env.local`)**

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_API_URL` | URL da API (ex.: `http://localhost:3001`). |
| `NEXT_PUBLIC_SITE_URL` | URL pública do site, usada em SEO/Open Graph. |

**Server (`apps/server/.env`)**

| Variável | Descrição |
|---|---|
| `PORT` | Porta da API (padrão `3001`). |
| `WEB_URL` | Origem permitida no CORS (URL do site). |
| `RESEND_API_KEY` | Chave da API do Resend. |
| `CONTACT_FROM_EMAIL` | Remetente verificado no Resend. |
| `CONTACT_TO_EMAIL` | Caixa que recebe os leads. |

> O formulário só envia e-mail se `RESEND_API_KEY` estiver configurada. Sem ela, a validação ainda funciona, mas o envio retorna erro amigável.

## Build de produção

```bash
pnpm build                  # builda todos os apps (Turborepo)
pnpm --filter web build     # só o site
pnpm --filter server build  # só a API
```

## Deploy

A arquitetura separa **frontend** e **API** — recomendado hospedar cada um no provedor mais adequado. Todos os abaixo fornecem **HTTPS automático**.

### Frontend (`apps/web`) — Vercel (recomendado)

1. Importe o repositório na [Vercel](https://vercel.com).
2. **Root Directory**: `apps/web`.
3. Build command: `pnpm build` · Install: `pnpm install` (a Vercel detecta o monorepo).
4. Variáveis de ambiente: `NEXT_PUBLIC_API_URL` (URL pública da API) e `NEXT_PUBLIC_SITE_URL` (domínio final).
5. Deploy. A Vercel entrega preview por PR e produção com HTTPS.

### API (`apps/server`) — Render / Railway / Fly.io

1. Crie um Web Service apontando para `apps/server`.
2. Build: `pnpm install && pnpm --filter server build` · Start: `pnpm --filter server start`.
3. Variáveis: `WEB_URL` (domínio do site, para o CORS), `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`.
4. A API confia em `X-Forwarded-*` (`trust proxy`), então o rate limit funciona corretamente atrás do proxy HTTPS do provedor.

> Verifique seu domínio de envio no Resend antes de ir a produção; `onboarding@resend.dev` só funciona em testes na sua própria conta.

### Checklist: deixar o formulário de contato funcionando em produção

O formulário só envia e-mail se **as duas pontas (site + API)** estiverem configuradas. Siga na ordem — a maioria dos erros está aqui:

1. **API no ar e em HTTPS.** O site só monta o formulário; quem envia o e-mail é a API (`apps/server`), que é um deploy separado. Se o site for HTTPS e a API for HTTP, o navegador bloqueia a requisição (*mixed content*). Use um provedor com HTTPS automático (Render/Railway/Fly).
2. **`NEXT_PUBLIC_API_URL` definida ANTES do build do site.** O Next "congela" as variáveis `NEXT_PUBLIC_*` no momento do build. Defina-a nas env vars da Vercel **antes de buildar**, apontando para a URL pública da API (ex.: `https://api.seudominio.com`). Sem isso, o site empacotado tenta bater em `http://localhost:3001` e o envio falha.
3. **`WEB_URL` na API = origem exata do site.** O CORS só libera essa origem. Tem que bater 100%: protocolo (`https://`), domínio e com/sem `www`. Ex.: `WEB_URL=https://www.seudominio.com`.
4. **`RESEND_API_KEY` definida na API.** Sem ela, o envio retorna erro amigável ao usuário.
5. **Domínio verificado no Resend (o passo que mais engana).** O padrão `onboarding@resend.dev` **só entrega para o e-mail da sua própria conta Resend** — em produção o formulário diz "Recebemos seu contato" mas o e-mail nunca chega no CITi. Verifique um domínio no Resend e aponte `CONTACT_FROM_EMAIL` para ele (ex.: `site@citi.org.br`); `CONTACT_TO_EMAIL` é a caixa que recebe os leads (ex.: `citi@cin.ufpe.br`).

> 📋 Modelos prontos de env de produção (com placeholders, é só copiar e trocar os valores):
> [`apps/web/.env.production.example`](apps/web/.env.production.example) e
> [`apps/server/.env.production.example`](apps/server/.env.production.example).

**Como testar rápido depois do deploy:**

```bash
# Troque pela URL pública da sua API. Deve responder { "status": "ok" }.
curl https://SUA_API/health

# Envia um lead de teste (precisa de consent=true; sem ele a API recusa).
curl -X POST https://SUA_API/contacts \
  -H "Content-Type: application/json" \
  -d '{"name":"Teste","email":"voce@exemplo.com","consent":true}'
```

Se o `POST` responder `200` mas o e-mail não chegar, o problema está no item 5 (Resend). Se o formulário falhar no site mas o `curl` funcionar, o problema está no item 2 ou 3 (URL da API no build ou CORS).

## Estrutura

```
apps/
  web/      → site (Next.js)
    src/app/         → rotas (/, /privacidade, /termos) + metadados/OG
    src/components/  → Header, Hero, Clients, Methodology, Stats, Cases,
                       Differentials, Contact, Footer, Legal
  server/   → API (Express)
    src/routes/      → /contacts (com rate limit), /users
    src/controllers/ → validação (Zod) + honeypot
    src/services/    → envio de e-mail (Resend)
packages/
  types/    → tipos compartilhados
  utils/    → utilitários compartilhados
```

## Checklist de requisitos atendidos

- ✅ Responsivo (mobile-first, Tailwind)
- ✅ Formulário de contato com validação (cliente + servidor via Zod)
- ✅ Anti-spam: honeypot + rate limiting
- ✅ Aviso de privacidade (LGPD) + páginas `/privacidade` e `/termos`
- ✅ SEO: title, meta description, Open Graph e Twitter Card
- ✅ Acessibilidade: teclado, `aria`, `alt`, contraste
- ✅ Performance: Next.js, `next/image`, fontes com `display: swap`
- ✅ Pronto para deploy com HTTPS (Vercel + Render/Railway)

---

CITi — Centro Integrado de Tecnologia da Informação · Centro de Informática, UFPE
