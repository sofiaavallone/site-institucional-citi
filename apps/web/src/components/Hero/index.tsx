import Image from "next/image";
import Link from "next/link";

import { HeroBlob } from "./HeroBlob";

/**
 * Seção hero (primeira dobra).
 * Fundo: imagem BG_10 coberta por um gradiente que escurece (topo mais escuro
 * + lado esquerdo reforçado para garantir leitura do texto). A bolha fica à
 * direita e gira com o scroll (ver HeroBlob).
 */
export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Fundo + gradiente de escurecimento */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/BG_10.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Escurece de cima (leve, p/ a header) até PRETO sólido embaixo,
            pra emendar sem costura com o fundo preto da próxima seção. */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,10,0.5)_0%,rgba(10,10,10,0.88)_35%,#0a0a0a_68%)]" />
        {/* Reforço à esquerda p/ leitura do texto. */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
      </div>

      {/* Bolha 3D girando no scroll */}
      <HeroBlob />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 lg:px-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Inteligência aplicada para resultado de negócio.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white">
            Ajudamos empresas em fase de escala a transformar Dados e IA em{" "}
            <strong className="font-semibold text-white">
              vantagem competitiva mensurável.
            </strong>{" "}
            Do diagnóstico à entrega, com o rigor técnico do CIn-UFPE.
          </p>

          <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="#diagnostico"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-citi-green px-6 py-3 text-lg font-bold text-black outline-none transition hover:brightness-110 focus-visible:ring-2 focus-visible:ring-citi-green/60"
            >
              Solicitar diagnóstico
              <ArrowUpRight className="h-6 w-6" />
            </Link>

            <Link
              href="#cases"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-base font-medium text-white outline-none backdrop-blur-sm transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Nossos cases
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowUpRight({ className }: { className?: string }) {
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
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}
