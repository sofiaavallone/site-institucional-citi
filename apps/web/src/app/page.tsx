import {
  Cases,
  Clients,
  Contact,
  Differentials,
  Footer,
  Header,
  Hero,
  Methodology,
  Stats,
} from "@/components";

export default function HomePage() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Clients />
      <Methodology />
      <Stats />
      <Cases />
      <Differentials />
      <Contact />
      <Footer />
    </main>
  );
}
