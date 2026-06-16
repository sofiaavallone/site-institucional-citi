import type { ContactInput } from "@repo/types";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL ?? "citi@cin.ufpe.br";
// Remetente verificado no Resend. Use o domínio que você verificou; o padrão
// "onboarding@resend.dev" só funciona em testes para a sua própria conta.
const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

const resend = apiKey ? new Resend(apiKey) : null;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Envia o lead do formulário por e-mail para a caixa do CITi (via Resend). */
export async function sendContactEmail(input: ContactInput): Promise<void> {
  if (!resend) {
    throw new Error("RESEND_API_KEY não configurada no servidor.");
  }

  const rows: [string, string][] = [
    ["Nome", input.name],
    ["E-mail", input.email],
    ["Empresa", input.company || "—"],
    ["Telefone", input.phone || "—"],
    ["Desafio", input.message || "—"],
  ];

  const html = `
    <h2>Novo contato pelo site</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="font-weight:bold">${label}</td><td>${escapeHtml(value)}</td></tr>`,
        )
        .join("")}
    </table>
  `;

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: input.email,
    subject: `Novo contato — ${input.name}`,
    html,
  });

  if (error) {
    throw new Error(error.message);
  }
}
