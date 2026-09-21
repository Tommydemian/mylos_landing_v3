import { ButtonLink } from "./button";
import { WhatsAppIcon } from "./icons/whatsapp";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    // El único bloque de peso de la hoja: tinta invertida (bg-contrast es tinta en
    // claro y papel en oscuro). Todo lo demás son reglas sobre el lienzo.
    <section
      aria-labelledby="h-final"
      className="grid items-center gap-7 bg-contrast px-5 py-14 text-contrast-foreground md:grid-cols-[1fr_auto] md:px-7 md:py-16"
    >
      <div>
        <span className="mb-4 block font-mono text-label tracking-[.08em] uppercase opacity-60">Empezá hoy</span>
        <h2 id="h-final" className="max-w-[22ch] text-[clamp(28px,3.4vw,42px)] leading-[1.05] font-semibold tracking-[-.03em] text-balance">
          En minutos estás operando desde una sola cuenta.
        </h2>
        <p className="mt-3 max-w-[48ch] text-[15.5px] opacity-70">
          14 días gratis, sin tarjeta. Si tenés dudas, escribinos y te contesta alguien del equipo.
        </p>
      </div>
      <div className="flex flex-wrap gap-2.5">
        <ButtonLink size="lg" href={site.whatsapp} className="max-sm:w-full">
          Empezá gratis 14 días
        </ButtonLink>
        <ButtonLink size="lg" variant="inverse" href={site.whatsapp} className="max-sm:w-full">
          <WhatsAppIcon className="text-whatsapp" />
          Hablar por WhatsApp
        </ButtonLink>
      </div>
    </section>
  );
}
