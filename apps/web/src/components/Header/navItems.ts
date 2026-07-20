export type NavItem = {
  label: string;
  href: string;
};

/**
 * Itens de navegação da Header.
 * Os `href` são âncoras para as seções da landing page (single page).
 * Ajuste os ids conforme as seções forem criadas.
 */
export const navItems: NavItem[] = [
  { label: "Nossa Metodologia", href: "#metodologia" },
  { label: "Porque o CITi", href: "#numeros" },
  { label: "Serviços", href: "#cases" },
];
