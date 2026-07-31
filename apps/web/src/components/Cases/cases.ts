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
  /** Classe extra para ajustar o tamanho do logo (quando `company` é imagem). */
  logoClassName?: string;
  /** Altura da "janela" que corta o topo/base do logo (evita inflar o card). */
  logoBoxClassName?: string;
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
    tags: ["Data&IA", "Machine Learning", "Energia"],
    company: "/logos/neoenergia.svg",
    title: [
      { text: "Monitoramente inteligente", bold: true },
      { text: " para uma operação mais " },
      { text: "eficiente.", bold: true },
    ],
    body: "Plataforma de monitoramento inteligente para ativos críticos da Neoenergia, utilizando machine learning para prever falhas e gerar análises que apoiam decisões estratégicas e aumentam a eficiência operacional.",
    href: "https://canva.link/tg6tfsonzv3xezr",
    image: "/BG_09.png",
  },
  {
    tags: ["Omnichannel", "UX/UI", "Performance"],
    company: "/riachuelo_logo2.svg",
    logoClassName: "h-48 md:h-64",
    logoBoxClassName: "h-14 md:h-16",
    title: [
      { text: "Jornadas que unem o " },
      { text: "físico", bold: true },
      { text: " e o " },
      { text: "digital", bold: true },
      { text: "." },
    ],
    body: "Plataforma digital desenvolvida para integrar a experiência omnichannel da Riachuelo, unificando os canais físico e digital por meio de uma navegação intuitiva, arquitetura escalável e interfaces voltadas à conversão.",
    href: "https://canva.link/kliy8454wie3r6n",
    image: "/BG_07.png",
  },
  {
    tags: ["Dashboards", "Dados", "loT"],
    company: "/logos/cas_logo.svg",
    title: [
      { text: "Dashboards", bold: true },
      { text: " que transformam dados em " },
      { text: "decisão.", bold: true },
    ],
    body: "Tecnologia para **monitoramento em tempo real** de dispositivos loT de energia, água e gás, com dashboards que apoiam a análise de desempenho e a tomada de decisões.",
    href: "https://canva.link/3jrsr4olzy78w9h",
    image: "/BG_10.png",
  },
];
