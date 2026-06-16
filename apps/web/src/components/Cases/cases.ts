/** Segmento de título: trecho de texto que pode ou não vir em negrito. */
export type TitleSegment = {
  text: string;
  bold?: boolean;
};

export type Case = {
  /** Pills no topo do card (palavras-chave, exemplo, área). */
  tags: string[];
  /** Rótulo verde acima do título (logo/nome da empresa). */
  company: string;
  /** Título do case, quebrado em trechos para destacar partes em negrito. */
  title: TitleSegment[];
  /** Parágrafo descritivo. */
  body: string;
  /** Link do botão "Saiba mais". */
  href: string;
  /** Imagem de fundo do card. */
  image: string;
};

/**
 * Cases exibidos no carrossel da seção "Cases". Três slides; as setas avançam
 * e retrocedem entre eles.
 */
export const cases: Case[] = [
  {
    tags: ["Palavras chaves", "Exemplo", "Área do projeto"],
    company: "Logo da empresa",
    title: [
      { text: "Dashboards", bold: true },
      { text: " que transformam dados em " },
      { text: "decisão.", bold: true },
    ],
    body: "Plataforma de visualização de dados desenhada para tornar informação complexa em decisão rápida, conectando múltiplas fontes em uma camada única de inteligência operacional.",
    href: "#",
    image: "/BG_07.png",
  },
  {
    tags: ["Palavras chaves", "Exemplo", "Área do projeto"],
    company: "Logo da empresa",
    title: [
      { text: "Modelos de IA", bold: true },
      { text: " que antecipam o " },
      { text: "próximo passo.", bold: true },
    ],
    body: "Pipelines de Machine Learning sob medida que aprendem com o histórico do negócio para prever demanda, reduzir risco e automatizar decisões em escala.",
    href: "#",
    image: "/BG_11.png",
  },
  {
    tags: ["Palavras chaves", "Exemplo", "Área do projeto"],
    company: "Logo da empresa",
    title: [
      { text: "Software sob medida", bold: true },
      { text: " que sustenta a " },
      { text: "operação.", bold: true },
    ],
    body: "Aplicações construídas com rigor de engenharia para escalar com segurança, integrar sistemas legados e dar à empresa autonomia sobre o próprio produto.",
    href: "#",
    image: "/BG_12.png",
  },
];
