import { ButtonLink } from "./button";
import { SectionLabel } from "./section-label";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

type Plan = {
  name: string;
  price: string;
  lead?: boolean;
  tag?: string;
  forWho: string;
  rows: Array<[string, string]>;
};

// Tal cual están en mylos.app. El volumen es el diferenciador.
const plans: Plan[] = [
  {
    name: "Esencial",
    price: "$50.000",
    forWho: "Para el comercio que opera con una persona. Todo MYLOS: ventas, stock, caja, egresos, facturación ARCA, Tiendanube y MercadoLibre.",
    rows: [
      ["Usuarios", "1"],
      ["Locales", "1"],
      ["Ventas por mes", "500"],
      ["Venta extra", "$70"],
    ],
  },
  {
    name: "Pro",
    price: "$80.000",
    lead: true,
    tag: "El más elegido",
    forWho: "Para el comercio con equipo. Todo MYLOS, con más manos operando.",
    rows: [
      ["Usuarios", "3"],
      ["Locales", "1"],
      ["Ventas por mes", "2.000"],
      ["Venta extra", "$50"],
    ],
  },
  {
    name: "Multi",
    price: "$150.000",
    forWho: "Para la operación multi-local. Todo MYLOS, sin límite de ventas ni de usuarios.",
    rows: [
      ["Locales", "hasta 2"],
      ["CUIT", "hasta 3"],
      ["Soporte", "directo del fundador"],
      ["Onboarding", "asistido"],
    ],
  },
];

export function Plans() {
  return (
    <section id="planes" aria-labelledby="h-planes" className="border-b border-border">
      <SectionLabel aside="14 días gratis · precios +IVA">Planes</SectionLabel>

      <div className="border-b border-border px-5 pt-10 pb-8 md:px-7 md:pt-11 md:pb-9">
        <h2 id="h-planes" className="max-w-[26ch] text-[clamp(26px,2.8vw,34px)] font-semibold tracking-[-.028em] text-balance">
          Es el mismo MYLOS en todos los planes. Solo cambia cuánto operás.
        </h2>
      </div>

      <ul className="grid md:grid-cols-3">
        {plans.map((p) => (
          <li
            key={p.name}
            className={cn(
              "flex flex-col border-b border-border px-6 pt-7 pb-7 last:border-b-0 md:border-r md:border-b-0 md:px-7 md:last:border-r-0",
              p.lead && "bg-card",
            )}
          >
            <div className="mb-3.5 flex items-center justify-between gap-2.5">
              <h3 className="text-xl font-semibold tracking-[-.02em]">{p.name}</h3>
              {p.tag ? (
                <span className="rounded bg-badge-brand px-[7px] py-[3px] font-mono text-[10.5px] font-medium tracking-[.06em] uppercase text-primary-ink">
                  {p.tag}
                </span>
              ) : null}
            </div>
            <div className="mb-3 flex items-baseline gap-2 tabular-nums">
              <b className="text-[38px] leading-none font-semibold tracking-[-.035em]">{p.price}</b>
              <span className="text-[13px] text-muted-foreground">/mes +IVA</span>
            </div>
            <p className="mb-4.5 min-h-[66px] text-[14.5px] text-muted-foreground-strong">{p.forWho}</p>
            <ul className="mb-5.5 border-t border-card-inner-border">
              {p.rows.map(([k, v]) => (
                <li key={k} className="flex justify-between gap-3 border-b border-card-inner-border py-2.5 text-sm">
                  <span>{k}</span>
                  <span className="font-mono text-xs whitespace-nowrap tabular-nums text-muted-foreground-strong">{v}</span>
                </li>
              ))}
            </ul>
            <ButtonLink variant={p.lead ? "primary" : "outline"} href={site.whatsapp} className="mt-auto w-full">
              Empezá hoy
            </ButtonLink>
          </li>
        ))}
      </ul>

      <p className="flex flex-wrap items-baseline gap-2.5 border-t border-border px-5 py-4.5 text-[14.5px] text-muted-foreground-strong md:px-7">
        <strong className="font-semibold text-foreground">Nunca frenamos una venta.</strong>
        <span>Si te pasás del límite, la factura sale igual y el excedente se cobra al mes siguiente.</span>
      </p>
    </section>
  );
}
