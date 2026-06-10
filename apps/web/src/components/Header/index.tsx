import Link from "next/link";

import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { navItems } from "./navItems";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      {/*
        Pílula "liquid glass": fundo branco bem translúcido + blur + borda sutil.
        Não tem cor de fundo sólida — deixa o conteúdo da página aparecer atrás.
      */}
      <nav
        aria-label="Navegação principal"
        className="flex items-center gap-6 rounded-full border border-white/10 px-7 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md backdrop-saturate-150"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="CITi — página inicial"
          className="shrink-0 text-white"
        >
          <Logo className="h-6 w-auto" />
        </Link>

        {/* Menu (escondido no mobile por enquanto — menu hambúrguer fica como próximo passo) */}
        <ul className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href} label={item.label} />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#diagnostico"
          className="rounded-full bg-citi-green px-6 py-2.5 text-sm font-bold text-black outline-none transition hover:brightness-110 focus-visible:ring-2 focus-visible:ring-citi-green/60"
        >
          Solicitar diagnóstico
        </Link>
      </nav>
    </header>
  );
}
