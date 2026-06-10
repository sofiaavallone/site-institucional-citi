import { Header } from "@/components";

export default function HomePage() {
  return (
    // Fundo escuro PROVISÓRIO — só pra visualizar a Header (liquid glass)
    // sobre um fundo escuro. Depois isso vira a seção hero da página.
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Borrões esverdeados PROVISÓRIOS: dão "algo atrás" pro blur do vidro desfocar */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-1/4 h-72 w-72 rounded-full bg-emerald-500/30 blur-3xl" />
        <div className="absolute top-24 right-1/4 h-72 w-72 rounded-full bg-green-400/20 blur-3xl" />
        <div className="absolute -top-20 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <Header />

      <section className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-white/40">
          Preview da Header — role a página para ver que ela fica fixa no topo.
        </p>
      </section>

      {/* Espaço extra só pra dar scroll e testar a fixação da Header */}
      <section className="h-screen" />
    </main>
  );
}
