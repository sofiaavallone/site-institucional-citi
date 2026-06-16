import Link from "next/link";

import { Logo } from "../Header/Logo";
import { navItems } from "../Header/navItems";

const contactLinks = [
  { label: "citi@cin.ufpe.br", href: "mailto:citi@cin.ufpe.br" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/citiufpe/",
  },
  { label: "Instagram", href: "https://www.instagram.com/citiufpe/" },
  { label: "GitHub", href: "https://github.com/CITi-UFPE" },
];

/**
 * Rodapé do site: logo + descrição à esquerda, colunas de Navegação e Contato
 * à direita. Linha divisória sutil separa o conteúdo da barra inferior com
 * copyright e links legais.
 */
export function Footer() {
  return (
    <footer className="relative bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Marca */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link
              href="/"
              aria-label="CITi — página inicial"
              className="inline-block text-white"
            >
              <Logo className="h-7 w-auto" />
            </Link>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/60">
              Parceiro de inovação tecnológica e IA aplicada para empresas
              brasileiras em fase de escala.
            </p>
            <p className="mt-6 text-sm text-white/40">
              ✦ Nascido no CIn-UFPE · Desde 1995
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Navegação
            </h2>
            <ul className="mt-6 space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base text-white/70 outline-none transition hover:text-white focus-visible:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Contato
            </h2>
            <ul className="mt-6 space-y-4">
              {contactLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-base text-white/70 outline-none transition hover:text-white focus-visible:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divisória */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} CITi. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-8">
              <Link
                href="/privacidade"
                className="text-sm text-white/40 outline-none transition hover:text-white/70 focus-visible:text-white/70"
              >
                Privacidade
              </Link>
              <Link
                href="/termos"
                className="text-sm text-white/40 outline-none transition hover:text-white/70 focus-visible:text-white/70"
              >
                Termos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
