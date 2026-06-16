import { LogoMarquee } from "./LogoMarquee";

/**
 * Seção de prova social: "+100 empresas impactadas..." + esteira de logos.
 */
export function Clients() {
  return (
    <section className="relative -mt-16 bg-[#0a0a0a] pb-10 md:-mt-24 md:pb-14">
      <h2 className="mx-auto mb-5 max-w-3xl px-6 text-center text-2xl font-light text-white/90 md:mb-6 md:text-3xl">
        <span className="font-bold text-white">+100</span> empresas impactadas
        por nossas soluções.
      </h2>

      <LogoMarquee />
    </section>
  );
}
