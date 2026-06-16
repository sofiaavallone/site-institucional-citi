export type Client = {
  /** Nome da empresa (usado como alt da imagem). */
  name: string;
  /** Caminho da logo em /public. Arquivos devem estar em public/logos/. */
  src: string;
  /**
   * Classe de ALTURA da logo (Tailwind). Como cada marca tem proporções
   * diferentes, ajustamos individualmente pra equilibrar o peso visual.
   * Se omitido, usa o padrão definido no LogoMarquee.
   */
  sizeClass?: string;
};

/**
 * Empresas impactadas (prova social do hero).
 * Para adicionar/remover, basta editar esta lista — o carrossel se ajusta.
 * Os arquivos de logo precisam existir em public/logos/ com estes nomes.
 */
export const clients: Client[] = [
  { name: "Riachuelo", src: "/logos/logo_riachuelo.svg", sizeClass: "h-9 md:h-12" },
  { name: "Neoenergia", src: "/logos/neoenergia.svg" },
  { name: "CAS Tecnologia", src: "/logos/cas_logo.svg" },
  {
    name: "Baterias Moura",
    src: "/logos/baterias_moura_logo.svg",
    sizeClass: "h-28 md:h-44",
  },
  { name: "Grupo JCPM", src: "/logos/jcpm_logo.svg" },
  {
    name: "Hospital das Clínicas FMUSP",
    src: "/logos/hp_clinicas_logo.svg",
    sizeClass: "h-14 md:h-20",
  },
  {
    name: "Midway Financeira",
    src: "/logos/midway-financeira-logo.svg",
    sizeClass: "h-9 md:h-12",
  },
  { name: "Deca", src: "/logos/deca-logo.svg", sizeClass: "h-7 md:h-9" },
  {
    name: "Neurotech",
    src: "/logos/logo_neurotech.svg",
    sizeClass: "h-14 md:h-[4.5rem]",
  },
  { name: "Visagio", src: "/logos/visagio.svg", sizeClass: "h-24 md:h-36" },
];
