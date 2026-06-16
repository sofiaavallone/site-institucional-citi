import type { Metadata } from "next";

import { LegalPage } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Termos de Uso — CITi",
  description:
    "Termos e condições de uso do site institucional do CITi — Centro Integrado de Tecnologia da Informação.",
  robots: { index: true, follow: true },
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="pt-4 text-xl font-bold text-white">{children}</h2>
);

export default function TermosPage() {
  return (
    <LegalPage title="Termos de Uso" updatedAt="16 de junho de 2026">
      <p>
        Ao acessar e utilizar o site do <strong>CITi — Centro Integrado de
        Tecnologia da Informação</strong>, você concorda com os termos descritos
        abaixo. Caso não concorde, recomendamos não utilizar o site.
      </p>

      <H2>1. Objetivo do site</H2>
      <p>
        Este site tem caráter institucional e informativo, apresentando os
        serviços, cases e formas de contato do CITi. O conteúdo pode ser
        atualizado a qualquer momento, sem aviso prévio.
      </p>

      <H2>2. Uso do formulário de contato</H2>
      <p>
        O formulário destina-se a contatos legítimos de interesse comercial ou
        institucional. É vedado o uso para envio de spam, conteúdo ofensivo,
        ilícito ou que viole direitos de terceiros.
      </p>

      <H2>3. Propriedade intelectual</H2>
      <p>
        A marca, o logo, os textos e os elementos visuais do CITi são protegidos
        e não podem ser reproduzidos sem autorização prévia. Logos de clientes e
        parceiros pertencem a seus respectivos titulares.
      </p>

      <H2>4. Limitação de responsabilidade</H2>
      <p>
        O CITi se esforça para manter as informações corretas e o site
        disponível, mas não garante a ausência de erros ou interrupções. O uso
        do site é de responsabilidade do usuário.
      </p>

      <H2>5. Privacidade</H2>
      <p>
        O tratamento de dados pessoais é regido pela nossa{" "}
        <a
          href="/privacidade"
          className="text-citi-green underline underline-offset-2 hover:text-white"
        >
          Política de Privacidade
        </a>
        .
      </p>

      <H2>6. Contato</H2>
      <p>
        Dúvidas sobre estes Termos podem ser enviadas para{" "}
        <a
          href="mailto:citi@cin.ufpe.br"
          className="text-citi-green underline underline-offset-2 hover:text-white"
        >
          citi@cin.ufpe.br
        </a>
        .
      </p>
    </LegalPage>
  );
}
