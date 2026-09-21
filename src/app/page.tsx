import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { Product } from "@/components/landing/product";
import { Integrations } from "@/components/landing/integrations";
import { Logos } from "@/components/landing/logos";
import { Plans } from "@/components/landing/plans";
import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";

export default function Page() {
  return (
    <>
      <Nav />
      {/* La hoja: una columna con reglas a los lados. Cada sección es una fila. */}
      <main id="top" className="mx-auto w-full max-w-[1120px] border-x border-border bg-canvas">
        <Hero />
        <Product />
        <Integrations />
        <Logos />
        <Plans />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
