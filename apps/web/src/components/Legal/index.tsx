import type { ReactNode } from "react";
import Link from "next/link";

import { Footer } from "../Footer";
import { Logo } from "../Header/Logo";

/**
 * Casca compartilhada das páginas legais (Privacidade, Termos): barra superior
 * com logo, título, data de atualização e o conteúdo em coluna estreita e
 * legível, reaproveitando o Footer do site.
 */
export function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
          <Link href="/" aria-label="CITi — página inicial" className="text-white">
            <Logo className="h-6 w-auto" />
          </Link>
          <Link
            href="/"
            className="text-sm text-white/60 outline-none transition hover:text-white focus-visible:text-white"
          >
            ← Voltar ao site
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-white/40">
          Última atualização: {updatedAt}
        </p>
        <div className="legal-body mt-10 space-y-6 text-base leading-relaxed text-white/70">
          {children}
        </div>
      </article>

      <Footer />
    </main>
  );
}
