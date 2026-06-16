import type { Metadata } from "next";
import localFont from "next/font/local";

import "../styles/globals.css";

/**
 * Tipografia da marca: Neue Haas Grotesk Display Pro (arquivos locais em
 * public/fonts/NeueHaasDisplay). Exposta na variável CSS --font-display, que
 * o body usa em globals.css. Mapeamos só os pesos usados no site:
 * Light 300, Roman 400, Medium 500, Bold 700, Black 900.
 */
const display = localFont({
  src: [
    {
      path: "../../public/fonts/NeueHaasDisplay/NeueHaasDisplayLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasDisplay/NeueHaasDisplayRoman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasDisplay/NeueHaasDisplayMediu.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasDisplay/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasDisplay/NeueHaasDisplayBlack.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = "CITi - A tecnologia do futuro entregue hoje";
const description =
  "Ajudamos empresas em fase de escala a transformar Dados e IA em vantagem competitiva mensurável. Do diagnóstico à entrega, com o rigor técnico do CIn-UFPE.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · CITi",
  },
  description,
  applicationName: "CITi",
  keywords: ["CITi", "CIn UFPE", "IA", "Dados", "tecnologia", "software", "Recife"],
  authors: [{ name: "CITi — Centro Integrado de Tecnologia da Informação" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "CITi",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={display.variable}>
      <body>{children}</body>
    </html>
  );
}
