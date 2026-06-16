export type Step = {
  /** Número de ordem, usado como marca-d'água atrás do card. */
  index: string;
  /** Rótulo pequeno no topo do card. */
  eyebrow: string;
  /** Título do card. */
  title: string;
  /** Parágrafo descritivo. */
  body: string;
  /** Rótulo da linha de baixo (Entrega / Diferencial / Resultado). */
  outcomeLabel: string;
  /** Texto da linha de baixo. */
  outcome: string;
};

/**
 * Etapas da metodologia do CITi (seção "Nossa Metodologia").
 */
export const steps: Step[] = [
  {
    index: "1",
    eyebrow: "Ponto de Partida",
    title: "DISCOVERY",
    body: "Mapeamos o problema real por trás do pedido, validamos a viabilidade e definimos a métrica de sucesso antes do código.",
    outcomeLabel: "Entrega",
    outcome:
      "Diagnóstico, arquitetura de solução e plano de implementação priorizado.",
  },
  {
    index: "2",
    eyebrow: "Construção",
    title: "Data, IA & Software",
    body: "Modelos de Machine Learning, pipelines de dados, aplicações sob medida. Tudo ancorado na métrica definida no Discovery.",
    outcomeLabel: "Diferencial",
    outcome:
      "Orientação de pesquisadores do CIn-UFPE em projetos de fronteira técnica.",
  },
  {
    index: "3",
    eyebrow: "Continuidade",
    title: "Parceria contínua",
    body: "Transferência de conhecimento, evolução da solução e novos ciclos de Discovery à medida que a empresa amadurece.",
    outcomeLabel: "Resultado",
    outcome: "Capacidade interna + velocidade externa.",
  },
];
