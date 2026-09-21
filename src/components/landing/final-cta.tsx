import { ButtonLink } from "./button";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section aria-labelledby="h-final" className="grid items-center gap-6 bg-card px-5 py-10 md:grid-cols-[1fr_auto] md:px-7">
      <div>
        <h2 id="h-final" className="text-[clamp(24px,2.8vw,32px)] font-semibold tracking-[-.028em] text-balance">
          Empezá hoy. En minutos estás operando.
        </h2>
        <p className="mt-1.5 text-[15px] text-muted-foreground-strong">
          14 días gratis, sin tarjeta. Si tenés dudas, escribinos y te contesta alguien del equipo.
        </p>
      </div>
      <div className="flex flex-wrap gap-2.5">
        <ButtonLink size="lg" href={site.whatsapp}>
          Empezá gratis 14 días
        </ButtonLink>
        <ButtonLink size="lg" variant="outline" href={site.whatsapp}>
          Hablar por WhatsApp
        </ButtonLink>
      </div>
    </section>
  );
}
