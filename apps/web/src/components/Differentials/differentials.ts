export type Differential = {
  /** Título do card. */
  title: string;
  /** Parágrafo descritivo. */
  body: string;
  /**
   * Imagem de fundo do card (exportada do Figma, já com o recorte arredondado e
   * a opacidade baixa embutidos). Quando ausente, o card fica só com o vidro.
   */
  image?: string;
};

/**
 * Diferenciais do CITi (seção "Nosso Diferencial").
 */
export const differentials: Differential[] = [
  {
    title: "Nascidos no CIn-UFPE",
    body: "Acesso direto a professores e pesquisadores de um dos principais centros de computação do Brasil.",
    image: "/image_1.svg",
  },
  {
    title: "Propostas ancoradas em ROI",
    body: "Cada projeto começa com uma métrica de negócio do cliente. Não vendemos sprints, vendemos o resultado combinado.",
    image: "/image_3.svg",
  },
  {
    title: "Transferência como entrega",
    body: "Capacitação do time, documentação orientada ao negócio e alinhamento técnico fazem parte de cada projeto. Seu time evolui junto com o nosso.",
    image: "/image_2.svg",
  },
  {
    title: "Três décadas de histórico",
    body: "O CITi nasceu no CIn em 1995. Desde então, formando o futuro e entregando tecnologia.",
  },
];
