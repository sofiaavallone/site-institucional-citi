import "dotenv/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { prisma } from "./lib/prisma";
import { contactsRouter } from "./routes/contacts.route";
import { usersRouter } from "./routes/users.route";

const app = express();

// Cabeçalhos de segurança (CSP, HSTS, no-sniff, etc.).
app.use(helmet());
// Atrás de um proxy/HTTPS (Render, Railway, Fly), confia no X-Forwarded-* para
// que o rate limit enxergue o IP real do cliente.
app.set("trust proxy", 1);
app.use(cors({ origin: process.env.WEB_URL ?? "http://localhost:3000" }));
app.use(express.json({ limit: "16kb" }));

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/users", usersRouter);
app.use("/contacts", contactsRouter);

const port = Number(process.env.PORT) || 3001;

async function start() {
  await prisma.$connect();
  app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
    console.log(`📦 Successfully connected with database`);
  });
}

start().catch((error) => {
  console.error(error);
  process.exit(1);
});
