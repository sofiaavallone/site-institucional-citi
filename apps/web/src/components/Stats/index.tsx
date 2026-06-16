import Image from "next/image";

/**
 * Seção "Stats": texto-manifesto à esquerda e um painel de vidro em formato de
 * escada (mask em public/shapes/stats-mask.svg) com 4 números de impacto
 * (+30 / +90 / +200 / +60). Duas bolhas anelares vazam pelas laterais e
 * aparecem desfocadas atrás do vidro.
 */

// Mesmo path do stats-mask.svg — reutilizado p/ desenhar a borda do vidro.
const GLASS_PATH =
  "M478,0L930,0Q1000,0,1000,70L1000,355Q1000,425,930,425L887,425Q817,425,817,495L817,560Q817,630,747,630L70,630Q0,630,0,560L0,452Q0,382,70,382L338,382Q408,382,408,312L408,70Q408,0,478,0Z";

// Mesmos números do painel "escada", usados no layout mobile/tablet (grid 2x2).
const mobileStats: { value: string; label: React.ReactNode }[] = [
  {
    value: "+30",
    label: (
      <>
        <span className="font-bold text-white">anos</span> de{" "}
        <span className="font-bold text-white">mercado.</span>
      </>
    ),
  },
  {
    value: "+90",
    label: (
      <>
        de <span className="font-bold text-white">NPS.</span>
      </>
    ),
  },
  {
    value: "+200",
    label: (
      <>
        <span className="font-bold text-white">projetos</span> nos últimos{" "}
        <span className="font-bold text-white">5 anos.</span>
      </>
    ),
  },
  {
    value: "+60",
    label: <span className="font-bold text-white">colaboradores.</span>,
  },
];

export function Stats() {
  return (
    <section
      id="numeros"
      className="relative overflow-hidden bg-black pb-20 pt-10 md:pb-28 md:pt-14"
    >
      {/* Luzes verdes de fundo (concentradas embaixo do painel de vidro) */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[14%] left-1/2 h-[24rem] w-[44rem] -translate-x-1/2 rounded-full bg-citi-green/[0.10] blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-[12%] h-[22rem] w-[22rem] rounded-full bg-citi-green/[0.08] blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-[12%] h-[22rem] w-[22rem] rounded-full bg-citi-green/[0.08] blur-[140px]"
      />

      {/* ============================ MOBILE / TABLET ============================ */}
      {/* O painel "escada" só funciona em telas largas; abaixo de lg renderizamos
          o mesmo conteúdo num layout próprio (manifesto + grid 2x2 de números). */}
      <div className="relative mx-auto w-full max-w-2xl px-6 lg:hidden">
        <h2 className="text-3xl font-bold leading-[1.12] text-white sm:text-4xl">
          Vendemos resultado, não entrega. Software é o meio. Impacto é o fim.
        </h2>
        <p className="mt-5 max-w-md text-base leading-snug text-white/90">
          Cada proposta é estruturada em torno de uma métrica de negócio do
          cliente.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4">
          {mobileStats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-3xl border border-white/10 bg-white/[0.06] px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md backdrop-saturate-150"
            >
              <span className="block text-4xl font-bold leading-none text-white sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-3 block text-sm leading-tight text-white/80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* =============================== DESKTOP (lg+) =============================== */}
      <div className="relative mx-auto hidden w-full max-w-5xl px-6 lg:block lg:px-10">
        {/* Palco com a proporção do mask (1000 x 630) — tudo posicionado em % */}
        <div className="relative aspect-[1000/630] w-full [container-type:size]">
          {/* Bolhas anelares (atrás do vidro) */}
          <div className="pointer-events-none absolute -right-[54%] -top-[2%] z-[25] w-[50%] -rotate-12">
            <Image
              src="/bloob_anelar_gradiente.png"
              alt=""
              aria-hidden
              width={520}
              height={520}
              className="h-auto w-full"
            />
          </div>
          <div className="pointer-events-none absolute -left-[54%] top-[46%] z-[25] w-[48%] rotate-[20deg]">
            <Image
              src="/bloob_anelar_gradiente.png"
              alt=""
              aria-hidden
              width={520}
              height={520}
              className="h-auto w-full"
            />
          </div>

          {/* Vidro fosco com o recorte em escada */}
          <div
            aria-hidden
            className="absolute inset-0 z-10 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md backdrop-saturate-150"
            style={{
              WebkitMaskImage: "url(/shapes/stats-mask.svg)",
              maskImage: "url(/shapes/stats-mask.svg)",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          />
          {/* Borda sutil seguindo o mesmo recorte */}
          <svg
            aria-hidden
            viewBox="0 0 1000 630"
            preserveAspectRatio="none"
            className="absolute inset-0 z-20 h-full w-full"
          >
            <path
              d={GLASS_PATH}
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth={1}
            />
          </svg>

          {/* ---------------- Conteúdo ---------------- */}

          {/* Manifesto (entalhe superior esquerdo) */}
          <div className="absolute left-[3%] top-[3%] z-30 w-[37%]">
            <h2 className="text-[6.2cqh] font-bold leading-[1.12] text-white">
              Vendemos resultado,
              <br />
              não entrega.
              <br />
              Software é o meio.
              <br />
              Impacto é o fim.
            </h2>
            <p className="mt-[6%] text-[4cqh] leading-snug text-white">
              Cada proposta é estruturada em torno de uma métrica de negócio do
              cliente.
            </p>
          </div>

          {/* +30 anos de mercado (painel superior direito) */}
          <div className="absolute left-[49%] top-[8%] z-30 flex items-start gap-2">
            <span className="text-[20cqh] font-bold leading-[0.8] text-white">
              +30
            </span>
            <span className="mt-[0.55em] text-[5cqh] font-light leading-tight text-white">
              <span className="font-bold">anos</span> de
              <br />
              <span className="font-bold">mercado.</span>
            </span>
          </div>

          {/* +90 de NPS (painel superior direito) */}
          <div className="absolute left-[56%] top-[37%] z-30 flex items-end gap-2">
            <span className="text-[20cqh] font-bold leading-[0.8] text-white">
              +90
            </span>
            <span className="mb-[0.45em] text-[5cqh] font-light leading-tight text-white">
              de <span className="font-bold">NPS.</span>
            </span>
          </div>

          {/* +200 projetos (painel inferior esquerdo) */}
          <div className="absolute left-[8%] top-[68%] z-30">
            <span className="block text-[20cqh] font-bold leading-[0.8] text-white">
              +200
            </span>
            <span className="ml-[0.6em] mt-[0.5em] block text-[5cqh] font-light leading-tight text-white">
              <span className="font-bold">projetos</span> nos últimos{" "}
              <span className="font-bold">5 anos.</span>
            </span>
          </div>

          {/* +60 colaboradores (painel inferior esquerdo) */}
          <div className="absolute left-[52%] top-[68%] z-30">
            <span className="block text-[20cqh] font-bold leading-[0.8] text-white">
              +60
            </span>
            <span className="ml-[0.6em] mt-[0.5em] block text-[5cqh] font-light leading-tight text-white">
              <span className="font-bold">colaboradores.</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
