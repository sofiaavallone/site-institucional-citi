"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { navItems } from "./navItems";

export function Header() {
  const [open, setOpen] = useState(false);

  // Fecha com Esc e trava o scroll do body enquanto o drawer está aberto.
  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      {/*
        Pílula "liquid glass": fundo branco bem translúcido + blur + borda sutil.
        Não tem cor de fundo sólida — deixa o conteúdo da página aparecer atrás.
      */}
      <nav
        aria-label="Navegação principal"
        className="flex items-center gap-3 rounded-full border border-white/10 py-3 pl-7 pr-3 shadow-[0_8px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md backdrop-saturate-150 sm:gap-6 sm:pr-5"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="CITi — página inicial"
          className="shrink-0 text-white"
        >
          <Logo className="h-6 w-auto" />
        </Link>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-2 md:-ml-3 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href} label={item.label} />
            </li>
          ))}
        </ul>

        {/* CTA (escondido no mobile — vai pro drawer) */}
        <Link
          href="#diagnostico"
          className="hidden rounded-full bg-citi-green px-6 py-2.5 text-base font-bold text-black outline-none transition hover:brightness-110 focus-visible:ring-2 focus-visible:ring-citi-green/60 md:inline-flex"
        >
          Solicitar diagnóstico
        </Link>

        {/* Botão hambúrguer (só mobile) */}
        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/40 md:hidden"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </nav>

      {/* Drawer mobile */}
      <div
        id="mobile-menu"
        className={[
          "fixed inset-0 z-50 md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Fechar menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className={[
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        {/* Painel */}
        <div
          className={[
            "absolute inset-x-3 top-3 origin-top rounded-3xl border border-white/10 bg-[#0d0d0d]/95 p-6 shadow-[0_8px_40px_rgba(0,0,0,0.5)] backdrop-blur-md transition duration-300",
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
          ].join(" ")}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              aria-label="CITi — página inicial"
              onClick={() => setOpen(false)}
              className="text-white"
            >
              <Logo className="h-6 w-auto" />
            </Link>
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>

          <ul className="mt-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-lg font-medium text-white/80 outline-none transition hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#diagnostico"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-citi-green px-6 py-3.5 text-base font-bold text-black outline-none transition hover:brightness-110 focus-visible:ring-2 focus-visible:ring-citi-green/60"
          >
            Solicitar diagnóstico
          </Link>
        </div>
      </div>
    </header>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
