import Image from "next/image";

import { differentials } from "./differentials";

/**
 * Seção "Nosso Diferencial": um painel arredondado de vidro, com borda sutil,
 * que engloba o cabeçalho (eyebrow verde + título) e uma grade 2x2 de cards de
 * vidro. A luz verde vem de FORA do painel (atrás dele, no canto inferior
 * direito) e transparece pelo vidro, mais intensa embaixo/à direita. Três cards
 * carregam uma foto de fundo (prédio do CIn, gráfico de ROI e o time) em baixa
 * opacidade; o último fica só com o vidro.
 */
export function Differentials() {
  return (
    <section
      id="diferencial"
      className="relative overflow-hidden bg-black pb-16 pt-10 md:pb-24 md:pt-16"
    >
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        {/* Luz verde vinda de fora, derramando pelo canto inferior direito */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 h-[40rem] w-[40rem] translate-x-1/2 translate-y-1/2 rounded-full bg-citi-green/[0.18] blur-[170px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 left-1/4 h-[24rem] w-[32rem] -translate-x-1/3 rounded-full bg-citi-green/[0.08] blur-[160px]"
        />

        {/* Painel de vidro que engloba título + cards */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-5 py-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl backdrop-saturate-150 md:rounded-[3rem] md:px-12 md:py-16">
          {/* Conteúdo */}
          <div className="relative">
            {/* Cabeçalho */}
            <p className="text-center text-base font-medium text-citi-green md:text-lg">
              Nosso Diferencial
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl text-center text-2xl font-bold leading-[1.1] text-white md:text-4xl">
              O que nos torna a escolha{" "}
              <span className="text-citi-green">certa.</span>
            </h2>

            {/* Cards (grade 2x2) */}
            <div className="mx-auto mt-10 grid max-w-[54rem] gap-4 md:mt-14 md:grid-cols-2">
              {differentials.map((item) => (
                <article
                  key={item.title}
                  className="relative flex min-h-[9rem] flex-col items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] px-7 py-6 text-center shadow-[0_8px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md backdrop-saturate-150 md:h-40 md:py-0 md:px-10"
                >
                  {/* Foto de fundo (já vem com opacidade baixa embutida) */}
                  {item.image && (
                    <Image
                      src={item.image}
                      alt=""
                      aria-hidden
                      fill
                      sizes="(min-width: 768px) 28rem, 100vw"
                      className="pointer-events-none select-none object-cover"
                    />
                  )}

                  <div className="relative mx-auto max-w-md">
                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-snug text-white">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
