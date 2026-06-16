import type { Metadata } from "next";

import { LegalPage } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Política de Privacidade — CITi",
  description:
    "Como o CITi coleta, usa e protege os dados pessoais enviados pelo site, em conformidade com a LGPD.",
  robots: { index: true, follow: true },
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="pt-4 text-xl font-bold text-white">{children}</h2>
);

export default function PrivacidadePage() {
  return (
    <LegalPage title="Política de Privacidade" updatedAt="16 de junho de 2026">
      <p>
        Esta Política descreve como o <strong>CITi — Centro Integrado de
        Tecnologia da Informação</strong> trata os dados pessoais coletados por
        meio deste site, em conformidade com a Lei nº 13.709/2018 (Lei Geral de
        Proteção de Dados — LGPD).
      </p>

      <H2>1. Dados que coletamos</H2>
      <p>
        Coletamos apenas os dados que você nos fornece voluntariamente pelo
        formulário de contato: nome, e-mail e, opcionalmente, empresa, telefone
        e a mensagem com a descrição do seu desafio.
      </p>

      <H2>2. Finalidade do tratamento</H2>
      <p>
        Utilizamos esses dados exclusivamente para responder ao seu contato,
        entender sua necessidade e, quando aplicável, dar andamento a uma
        proposta de parceria. Não utilizamos seus dados para finalidades
        diversas sem o seu consentimento.
      </p>

      <H2>3. Base legal</H2>
      <p>
        O tratamento se baseia no seu consentimento (art. 7º, I da LGPD),
        manifestado ao marcar a caixa de aceite no formulário, e no legítimo
        interesse para responder à sua solicitação.
      </p>

      <H2>4. Compartilhamento</H2>
      <p>
        Não vendemos nem comercializamos seus dados. Eles podem ser processados
        por provedores que viabilizam o envio das mensagens (por exemplo, o
        serviço de e-mail), sempre limitados a essa finalidade.
      </p>

      <H2>5. Armazenamento e segurança</H2>
      <p>
        Mantemos os dados apenas pelo tempo necessário para o atendimento do seu
        contato. Adotamos medidas técnicas e organizacionais razoáveis para
        proteger as informações contra acesso não autorizado, perda ou
        alteração.
      </p>

      <H2>6. Seus direitos</H2>
      <p>
        Você pode, a qualquer momento, solicitar acesso, correção, anonimização,
        portabilidade ou exclusão dos seus dados, bem como revogar o
        consentimento. Para exercer esses direitos, escreva para{" "}
        <a
          href="mailto:citi@cin.ufpe.br"
          className="text-citi-green underline underline-offset-2 hover:text-white"
        >
          citi@cin.ufpe.br
        </a>
        .
      </p>

      <H2>7. Contato do controlador</H2>
      <p>
        Controlador: CITi — Centro Integrado de Tecnologia da Informação, Centro
        de Informática da UFPE, Recife/PE. Dúvidas sobre esta Política podem ser
        enviadas para{" "}
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
