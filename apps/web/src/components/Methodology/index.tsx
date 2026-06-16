import { steps } from "./steps";

/**
 * Seção "Nossa Metodologia": fundo em degradê preto → verde → azul, eyebrow
 * verde + título, e 3 cards de vidro (mesmo tratamento da header) descrevendo
 * cada etapa (Discovery / Construção / Continuidade).
 */
export function Methodology() {
  return (
    <section
      id="metodologia"
      className="relative overflow-hidden bg-black pb-12 pt-6 md:pb-16 md:pt-10"
    >
      {/* Luzes verdes de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[40rem] w-[40rem] rounded-full bg-citi-green/[0.10] blur-[170px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 h-[36rem] w-[36rem] rounded-full bg-citi-green/[0.08] blur-[170px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-citi-green/[0.08] blur-[180px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 h-[28rem] w-[28rem] rounded-full bg-citi-green/[0.08] blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-1/4 h-[28rem] w-[28rem] rounded-full bg-citi-green/[0.08] blur-[160px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Cabeçalho */}
        <p className="text-center text-lg font-medium text-citi-green md:text-xl">
          Nossa Metodologia
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-light leading-[1.15] text-white md:text-5xl">
          Começamos pela <strong className="font-bold">pergunta certa.</strong>
          <br />
          Terminamos com a <strong className="font-bold">resposta medida.</strong>
        </h2>

        {/* Cards */}
        <div className="mx-auto mt-14 grid max-w-[60rem] gap-5 md:mt-20 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.index}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/20 px-8 py-6 shadow-[0_8px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md backdrop-saturate-150"
            >
              {/* Número grande (marca-d'água) à esquerda, do topo ao fim do card */}
              <span
                aria-hidden
                className="pointer-events-none absolute -left-5 top-1/2 -translate-y-1/2 select-none text-[26rem] font-bold leading-none text-white/[0.06]"
              >
                {step.index}
              </span>

              <div className="relative">
                <p className="text-sm text-white">{step.eyebrow}</p>
                <h3 className="mt-1 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-white">
                  {step.body}
                </p>

                <div className="my-4 h-px w-20 bg-black/60" />

                <p className="text-base font-bold text-white">
                  {step.outcomeLabel}
                </p>
                <p className="mt-1 text-base leading-relaxed text-white">
                  {step.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
