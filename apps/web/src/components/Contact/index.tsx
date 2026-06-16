"use client";

import { useState } from "react";
import Link from "next/link";
import type { ContactInput } from "@repo/types";

import { apiPost } from "@/lib/api";

type Status = "idle" | "submitting" | "success" | "error";

/** Corpo enviado à API: dados do lead + honeypot + aceite (LGPD). */
type ContactPayload = ContactInput & { website: string; consent: boolean };

const emptyForm: ContactInput = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

/**
 * Seção "Diagnóstico": painel de vidro com borda verde brilhante. À esquerda, a
 * chamada + dados de contato; à direita, o formulário (Nome/Empresa,
 * E-mail/Telefone, desafio) que envia um lead para a API (POST /contacts).
 */
export function Contact() {
  const [form, setForm] = useState<ContactInput>(emptyForm);
  const [website, setWebsite] = useState(""); // honeypot
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof ContactInput>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!consent) {
      setStatus("error");
      setError("É necessário aceitar o aviso de privacidade.");
      return;
    }

    setStatus("submitting");
    setError(null);

    try {
      await apiPost<null, ContactPayload>("/contacts", {
        ...form,
        company: form.company || null,
        phone: form.phone || null,
        message: form.message || null,
        website,
        consent,
      });
      setStatus("success");
      setForm(emptyForm);
      setConsent(false);
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Não foi possível enviar agora. Tente novamente.",
      );
    }
  }

  return (
    <section
      id="diagnostico"
      className="relative overflow-hidden bg-black pb-16 pt-10 md:pb-24 md:pt-16"
    >
      {/* Brilho verde de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[34rem] w-[34rem] rounded-full bg-citi-green/[0.14] blur-[160px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        {/* Borda verde brilhante em volta do painel */}
        <div className="rounded-[2.5rem] bg-gradient-to-br from-citi-green/70 via-citi-green/10 to-transparent p-px shadow-[0_0_60px_rgba(0,219,88,0.18)] md:rounded-[3rem]">
          <div className="grid gap-10 rounded-[calc(2.5rem-1px)] border border-white/5 bg-[#0d0d0d]/95 px-6 py-10 backdrop-blur-2xl md:grid-cols-2 md:gap-12 md:rounded-[calc(3rem-1px)] md:px-12 md:py-14">
            {/* Coluna esquerda: chamada + contato */}
            <div className="flex flex-col">
              <h2 className="text-3xl font-light leading-[1.15] text-white md:text-4xl">
                Vamos conversar sobre o próximo passo da{" "}
                <strong className="font-bold">sua</strong>{" "}
                <strong className="font-bold">empresa em IA?</strong>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-white">
                Conte brevemente sobre o desafio. Nossa equipe entrará em contato
                para entender como podemos ajudar, sem compromisso.
              </p>

              <div className="my-7 h-px w-full max-w-xs bg-white/10" />

              <ul className="space-y-4 text-sm text-white">
                <li className="flex items-center gap-3">
                  <PinIcon className="h-4 w-4 shrink-0 text-citi-green" />
                  Centro de Informática — UFPE · Recife, PE
                </li>
                <li className="flex items-center gap-3">
                  <MailIcon className="h-4 w-4 shrink-0 text-citi-green" />
                  <a
                    href="mailto:citi@cin.ufpe.br"
                    className="outline-none transition hover:text-white focus-visible:text-white"
                  >
                    citi@cin.ufpe.br
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna direita: formulário */}
            <form onSubmit={handleSubmit} noValidate className="flex flex-col">
              <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
                <Field
                  label="Nome"
                  name="name"
                  value={form.name}
                  onChange={(v) => update("name", v)}
                  required
                  autoComplete="name"
                />
                <Field
                  label="Empresa"
                  name="company"
                  value={form.company ?? ""}
                  onChange={(v) => update("company", v)}
                  autoComplete="organization"
                />
                <Field
                  label="E-mail corporativo"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(v) => update("email", v)}
                  required
                  autoComplete="email"
                />
                <Field
                  label="Telefone"
                  name="phone"
                  type="tel"
                  value={form.phone ?? ""}
                  onChange={(v) => update("phone", v)}
                  autoComplete="tel"
                />
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm text-white"
                >
                  Conte brevemente sobre o desafio
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message ?? ""}
                  onChange={(e) => update("message", e.target.value)}
                  className="resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/30 focus:border-citi-green/60 sm:text-sm"
                />
              </div>

              {/* Honeypot: invisível para humanos, ignorado por leitores de
                  tela. Se vier preenchido, tratamos como bot no servidor. */}
              <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="website">Não preencha este campo</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              {/* Aviso de privacidade / consentimento (LGPD) */}
              <div className="mt-5 flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-citi-green outline-none focus-visible:ring-2 focus-visible:ring-citi-green/60"
                />
                <label htmlFor="consent" className="text-xs leading-relaxed text-white/70">
                  Concordo que o CITi trate meus dados para responder a este
                  contato, conforme a{" "}
                  <Link
                    href="/privacidade"
                    className="text-citi-green underline underline-offset-2 hover:text-white"
                  >
                    Política de Privacidade
                  </Link>
                  .
                </label>
              </div>

              {error && (
                <p
                  role="alert"
                  className="mt-4 text-sm text-red-400"
                >
                  {error}
                </p>
              )}
              {status === "success" && (
                <p
                  role="status"
                  className="mt-4 text-sm text-citi-green"
                >
                  Recebemos seu contato. Em breve nossa equipe responde.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-citi-green px-6 py-3.5 text-base font-bold text-black outline-none transition hover:brightness-110 focus-visible:ring-2 focus-visible:ring-citi-green/60 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Enviando…" : "Enviar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
};

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm text-white">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/30 focus:border-citi-green/60 sm:text-sm"
      />
    </div>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
