import Link from "next/link";

type NavLinkProps = {
  href: string;
  label: string;
  /**
   * Marca o link como ativo (seção atual). Quando ativo, recebe o mesmo
   * tratamento visual do hover — a "pílula" de vidro vista no protótipo.
   * Por enquanto é estático; depois pode ser controlado pelo scroll da página.
   */
  active?: boolean;
};

export function NavLink({ href, label, active = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={[
        "rounded-full border px-4 py-2 text-base font-medium whitespace-nowrap",
        "transition duration-200 outline-none",
        "focus-visible:ring-2 focus-visible:ring-white/40",
        // "Negrito" feito com text-shadow (engrossa a letra sem mudar a largura,
        // então o hover NÃO faz a header crescer).
        active
          ? "border-white/25 text-white [text-shadow:0.4px_0_0_currentColor,-0.4px_0_0_currentColor] shadow-[0_6px_16px_rgba(0,0,0,0.35)]"
          : "border-transparent text-white/70 hover:border-white/25 hover:text-white hover:[text-shadow:0.4px_0_0_currentColor,-0.4px_0_0_currentColor] hover:shadow-[0_6px_16px_rgba(0,0,0,0.35)]",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}
