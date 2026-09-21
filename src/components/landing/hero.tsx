import { ButtonLink } from "./button";
import { WhatsAppIcon } from "./icons/whatsapp";
import { Ledger } from "./ledger";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section aria-labelledby="h1" className="grid border-b border-border lg:grid-cols-[1.1fr_1fr]">
      <div className="border-b border-border px-5 py-10 md:px-9 lg:border-r lg:border-b-0 lg:pt-18 lg:pb-16">
        <div className="mb-6 flex flex-wrap items-center gap-2.5">
          <b className="rounded bg-badge-brand px-2 py-1 font-mono text-label font-medium tracking-[.08em] uppercase text-primary-ink">
            Hecho en Argentina
          </b>
          <span className="font-mono text-label tracking-[.06em] uppercase text-muted-foreground">
            Para comercios que operan en serio
          </span>
        </div>

        <h1
          id="h1"
          className="mb-5 text-[clamp(36px,4.6vw,58px)] leading-[1.02] font-semibold tracking-[-.032em] text-balance"
        >
          Ventas, stock, caja, facturación.
          <br />
          <span className="font-medium text-muted-foreground-strong">Local, Tiendanube, MercadoLibre.</span>
        </h1>

        <p className="mb-7 max-w-[50ch] text-lg leading-normal text-muted-foreground-strong">
          Todo en un mismo sistema, dispuesto a expandirse con una sola finalidad:{" "}
          <strong className="font-semibold text-foreground">ser el centro operativo de tu negocio</strong> y crecer con él.
        </p>

        <div className="flex flex-wrap items-center gap-2.5">
          <ButtonLink size="lg" href={site.whatsapp} className="max-sm:w-full">
            <WhatsAppIcon />
            Empezá gratis 14 días
          </ButtonLink>
          <ButtonLink size="lg" variant="outline" href="#planes" className="max-sm:w-full">
            Ver planes
          </ButtonLink>
        </div>
        <p className="mt-4 text-[13.5px] text-muted-foreground">
          Sin tarjeta. Se instala desde la Tienda de Aplicaciones Nube y queda operativo en minutos, con tus datos migrados.
        </p>
      </div>

      <div className="flex flex-col justify-center bg-surface px-4 py-6 md:px-9 md:py-8 lg:px-7 lg:py-9">
        <Ledger />
      </div>
    </section>
  );
}
