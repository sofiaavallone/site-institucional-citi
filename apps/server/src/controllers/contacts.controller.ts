import type { Request, Response } from "express";
import type { ApiResponse } from "@repo/types";
import { z } from "zod";
import { sendContactEmail } from "../services/contacts.service";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Informe seu nome.").max(120),
  email: z.string().trim().email("Informe um e-mail válido.").max(160),
  company: z.string().trim().max(160).optional().nullable(),
  phone: z.string().trim().max(40).optional().nullable(),
  message: z.string().trim().max(2000).optional().nullable(),
  // Honeypot: campo invisível ao usuário. Bots costumam preenchê-lo.
  website: z.string().optional().nullable(),
  // Aceite do aviso de privacidade (LGPD).
  consent: z.literal(true, {
    errorMap: () => ({ message: "É necessário aceitar o aviso de privacidade." }),
  }),
});

export async function postContact(
  req: Request,
  res: Response<ApiResponse<null>>,
) {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      data: null,
      error: parsed.error.issues[0]?.message ?? "Dados inválidos.",
    });
  }

  // Honeypot preenchido = bot. Respondemos 200 sem enviar nada, para não
  // sinalizar ao bot que a armadilha foi detectada.
  if (parsed.data.website && parsed.data.website.trim() !== "") {
    return res.status(200).json({
      data: null,
      message: "Recebemos seu contato. Em breve nossa equipe responde.",
    });
  }

  const { website: _hp, consent: _consent, ...contact } = parsed.data;

  try {
    await sendContactEmail(contact);
  } catch (error) {
    console.error("Falha ao enviar e-mail de contato:", error);
    return res.status(502).json({
      data: null,
      error: "Não foi possível enviar agora. Tente novamente mais tarde.",
    });
  }

  res.status(200).json({
    data: null,
    message: "Recebemos seu contato. Em breve nossa equipe responde.",
  });
}
