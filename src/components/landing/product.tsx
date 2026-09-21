import { ButtonLink } from "./button";
import { SectionLabel } from "./section-label";
import { PanelTabs } from "./panel-tabs";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

type Feature = {
  key: string;
  title: string;
  body: string;
  chips?: Array<{ label: string; dot: string }>;
};

// Todo lo que MYLOS hace, sin recortar.
const features: Feature[] = [
  {
    key: "Ventas",
    title: "Todos los canales, una lista",
    body: "Local, Tiendanube y MercadoLibre con canal, medio de pago y estado de envío.",
    chips: [
      { label: "Local", dot: "bg-primary" },
      { label: "Tiendanube", dot: "bg-tiendanube" },
      { label: "MercadoLibre", dot: "bg-mercadolibre" },
    ],
  },
  { key: "Stock", title: "Uno solo, siempre preciso", body: "Se descuenta en cada venta y se sincroniza con tus tiendas. Sin quiebres ni conteos a mano." },
  { key: "Caja", title: "Cobros, egresos y cierre", body: "Turnos, medios de pago y arqueo, conciliados con la operación real del día." },
  { key: "Egresos", title: "Cada gasto con su comprobante", body: "Cargás el comprobante y queda la deuda derivada, sin duplicar datos." },
  { key: "Proveedores", title: "Cuenta corriente por proveedor", body: "Cuánto le debés, qué pagaste y qué comprobantes respaldan cada saldo." },
  { key: "Facturación ARCA", title: "Sale sola al cobrar", body: "Factura A o B en cada venta, del local o de la tienda, sin salir de la app." },
  { key: "Multi-local", title: "Todos los locales, una pantalla", body: "Stock, caja y ventas por local, y el total del negocio arriba." },
  { key: "Multi-CUIT", title: "Varias razones sociales", body: "Cada comprobante sale por el CUIT que corresponde. Una sola cuenta para todo." },
];

export function Product() {
  return (
    <section id="producto" aria-labelledby="h-producto">
      <SectionLabel aside="Sin recortar">Todo lo que MYLOS hace</SectionLabel>

      <div className="grid items-end gap-6 border-b border-border px-5 pt-10 pb-8 md:grid-cols-[1fr_auto] md:px-7 md:pt-11 md:pb-9">
        <div>
          <h2 id="h-producto" className="max-w-[26ch] text-[clamp(26px,2.8vw,34px)] font-semibold tracking-[-.028em] text-balance">
            Diseñado para ser usado, no para ser aprendido.
          </h2>
          <p className="mt-2.5 max-w-[52ch] text-muted-foreground-strong">
            Cada venta, del canal que sea, descuenta stock, entra a la caja y factura en ARCA. Lo que sigue es la lista completa.
          </p>
        </div>
        <ButtonLink variant="outline" href={site.whatsapp}>
          Pedir una demo
        </ButtonLink>
      </div>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <li
            key={f.key}
            className={cn(
              "flex min-h-[170px] flex-col border-b border-border px-5 py-5 lg:px-6 lg:pt-6 lg:pb-6.5",
              // Reglas: derecha salvo la última de cada fila; abajo salvo la última fila.
              "sm:[&:nth-child(odd)]:border-r lg:border-r lg:[&:nth-child(4n)]:border-r-0",
              "lg:[&:nth-last-child(-n+4)]:border-b-0",
              i >= features.length - 2 && "sm:border-b-0",
            )}
          >
            <span className="mb-7 font-mono text-label tracking-[.06em] uppercase text-muted-foreground">{f.key}</span>
            <h3 className="mb-1.5 text-lg font-semibold tracking-[-.015em] text-balance">{f.title}</h3>
            <p className="text-[14.5px] text-muted-foreground-strong">{f.body}</p>
            {f.chips ? (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {f.chips.map((c) => (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-card-border bg-card py-[3px] pr-2 pl-[7px] text-xs font-medium"
                  >
                    <i className={cn("size-[7px] rounded-[2px]", c.dot)} />
                    {c.label}
                  </span>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ul>

      <PanelTabs />
    </section>
  );
}
