import { SectionLabel } from "./section-label";
import { cn } from "@/lib/cn";

// La fila completa. Sin logos de terceros por ahora: wordmark con el color de canal.
const integrations = [
  { name: "Tiendanube", dot: "bg-tiendanube", body: "Ventas y stock sincronizados. Se instala desde la Tienda de Aplicaciones Nube." },
  { name: "MercadoLibre", dot: "bg-mercadolibre", body: "Cada venta entra con su comprador y descuenta del mismo stock." },
  { name: "MercadoPago Point", dot: "bg-info", body: "Cobrás con la terminal desde la caja y el pago queda conciliado." },
  { name: "Tango", dot: "bg-contrast", body: "Tus comprobantes salen listos para la contabilidad." },
  { name: "Kommo", dot: "bg-primary", body: "Los clientes y sus compras, en tu CRM." },
  { name: "Mailjet", dot: "bg-success", body: "Comprobantes y avisos a tus clientes por email." },
];

export function Integrations() {
  return (
    <section id="integraciones" aria-labelledby="h-integ" className="border-b border-border">
      <SectionLabel id="h-integ" aside="La fila completa">
        Integraciones
      </SectionLabel>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {integrations.map((it, i) => (
          <li
            key={it.name}
            className={cn(
              "flex min-h-[120px] flex-col gap-2.5 border-border px-5 pt-5 pb-5",
              "border-r [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:last:border-r-0",
              i < 4 && "border-b sm:border-b-0",
              i < 3 && "sm:border-b lg:border-b-0",
            )}
          >
            <span className="flex items-center gap-2 text-base font-bold tracking-[-.02em]">
              <i className={cn("size-2.5 shrink-0 rounded-[3px]", it.dot)} />
              {it.name}
            </span>
            <p className="mt-auto text-[13px] text-muted-foreground-strong">{it.body}</p>
            <span className="font-mono text-[10.5px] tracking-[.05em] uppercase text-success-ink">Conectado</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
