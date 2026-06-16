import { Router } from "express";
import rateLimit from "express-rate-limit";
import { postContact } from "../controllers/contacts.controller";

export const contactsRouter = Router();

// Anti-spam: no máximo 5 envios por IP a cada 10 minutos.
const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    data: null,
    error: "Muitas tentativas. Aguarde alguns minutos e tente novamente.",
  },
});

contactsRouter.post("/", contactLimiter, postContact);
