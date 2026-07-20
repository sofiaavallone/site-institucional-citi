"use client";

import Image from "next/image";
import { useState } from "react";

import { cases } from "./cases";

/**
 * Seção "Cases": eyebrow verde + título e um carrossel de um card por vez. O
 * card é um painel escuro arredondado com uma faixa de luz verde→azul, pills no
 * topo, rótulo da empresa, título (com partes em negrito), descrição e botão
 * "Saiba mais". As setas laterais avançam/retrocedem entre os três cases e os
 * pontos abaixo indicam o slide atual.
 */
export function Cases() {
  const [index, setIndex] = useState(0);
  const total = cases.length;
  const current = cases[index];

  function go(direction: 1 | -1) {
    setIndex((prev) => (prev + direction + total) % total);
  }

  return (
    <section
      id="cases"
      className="relative overflow-hidden bg-black pb-16 pt-10 md:pb-24 md:pt-16"
    >
      {/* Brilho verde de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-citi-green/[0.10] blur-[170px]"
      />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        {/* Cabeçalho */}
        <p className="text-center text-base font-medium text-citi-green md:text-lg">
          CASES
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-center text-2xl font-bold leading-[1.1] text-white md:text-4xl">
          Resultados construídos com rigor técnico e foco em{" "}
          <span className="italic text-citi-green">impacto</span>.
        </h2>

        {/* Carrossel */}
        <div className="relative mt-10 md:mt-14">
          {/* Card do case */}
          <article className="relative flex min-h-[28rem] flex-col justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a0a0a] px-6 py-8 shadow-[0_8px_50px_rgba(0,0,0,0.5)] md:min-h-[30rem] md:rounded-[2rem] md:px-10 md:py-10">
            {/* Imagem de fundo do slide atual */}
            <Image
              src={current.image}
              alt=""
              aria-hidden
              fill
              priority
              sizes="(min-width: 768px) 48rem, 100vw"
              className="pointer-events-none select-none object-cover"
            />
            {/* Véu escuro para legibilidade do texto */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"
            />
            {/* Escurecimento uniforme (preto transparente) sobre o card */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-black/35"
            />

            <div className="relative max-w-xl">
              {/* Pills */}
              <div className="flex flex-wrap gap-2.5">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-citi-green/80 px-4 py-1.5 text-xs text-citi-green md:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Empresa: logo (caminho de imagem) ou texto */}
              {current.company.startsWith("/") ? (
                <div
                  className={`mt-6 flex items-center overflow-hidden md:mt-7 ${
                    current.logoBoxClassName ?? ""
                  }`}
                >
                  <Image
                    src={current.company}
                    alt="Logo do cliente"
                    width={140}
                    height={40}
                    className={`w-auto brightness-0 invert ${
                      current.logoClassName ?? "h-14 md:h-16"
                    }`}
                  />
                </div>
              ) : (
                <p className="mt-6 text-lg text-citi-green md:mt-7 md:text-xl">
                  {current.company}
                </p>
              )}

              {/* Título */}
              <h3 className="mt-2 text-2xl font-light leading-[1.1] text-white md:text-3xl">
                {current.title.map((segment, i) =>
                  segment.bold ? (
                    <strong key={i} className="font-bold">
                      {segment.text}
                    </strong>
                  ) : (
                    <span key={i}>{segment.text}</span>
                  ),
                )}
              </h3>

              {/* Descrição (trechos entre ** ficam em negrito) */}
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white md:text-base">
                {renderBody(current.body)}
              </p>

              {/* Botão */}
              <a
                href={current.href}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-citi-green px-5 py-3 text-sm font-bold text-black outline-none transition hover:brightness-110 focus-visible:ring-2 focus-visible:ring-citi-green/60 md:text-base"
              >
                Saiba mais
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </div>
          </article>

          {/* Seta esquerda */}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Case anterior"
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white outline-none backdrop-blur transition hover:border-citi-green hover:text-citi-green focus-visible:ring-2 focus-visible:ring-citi-green/60 md:h-14 md:w-14"
          >
            <ChevronIcon className="h-6 w-6 rotate-180" />
          </button>

          {/* Seta direita */}
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Próximo case"
            className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white outline-none backdrop-blur transition hover:border-citi-green hover:text-citi-green focus-visible:ring-2 focus-visible:ring-citi-green/60 md:h-14 md:w-14"
          >
            <ChevronIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Pontos indicadores */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {cases.map((item, i) => (
            <button
              key={item.title.map((s) => s.text).join("")}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ir para o case ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all ${
                i === index
                  ? "w-2.5 bg-citi-green"
                  : "w-2.5 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Renderiza o texto, deixando em negrito os trechos entre `**...**`. */
function renderBody(text: string) {
  return text.split(/\*\*(.+?)\*\*/).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-white">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

function ChevronIcon({ className }: { className?: string }) {
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
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}
