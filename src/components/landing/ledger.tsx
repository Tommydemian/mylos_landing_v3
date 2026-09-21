import { cn } from "@/lib/cn";

type Channel = "local" | "tiendanube" | "mercadolibre";

const channelDot: Record<Channel, string> = {
  local: "bg-primary",
  tiendanube: "bg-tiendanube",
  mercadolibre: "bg-mercadolibre",
};

type Row = {
  time: string;
  channel: Channel;
  where: string;
  ref: string;
  amount: string;
  status: { kind: "ok" | "stock"; text: string };
};

// Un día de ejemplo. Filas del local, de Tiendanube y de MercadoLibre
// intercaladas: cada una con su factura o su descuento de stock.
const rows: Row[] = [
  { time: "14:02", channel: "local", where: "Local · Palermo", ref: "Venta 4812", amount: "$48.900", status: { kind: "ok", text: "Fact. B · ARCA" } },
  { time: "13:58", channel: "tiendanube", where: "Tiendanube", ref: "Pedido 2207", amount: "$31.500", status: { kind: "stock", text: "Stock −1 · Palermo" } },
  { time: "13:51", channel: "mercadolibre", where: "MercadoLibre", ref: "Venta 9931", amount: "$22.700", status: { kind: "ok", text: "Fact. B · ARCA" } },
  { time: "13:40", channel: "local", where: "Local · Belgrano", ref: "Venta 4811", amount: "$12.300", status: { kind: "ok", text: "Fact. B · ARCA" } },
  { time: "13:12", channel: "tiendanube", where: "Tiendanube", ref: "Pedido 2206", amount: "$89.000", status: { kind: "ok", text: "Fact. A · CUIT 2" } },
  { time: "12:55", channel: "mercadolibre", where: "MercadoLibre", ref: "Venta 9930", amount: "$6.400", status: { kind: "stock", text: "Stock −2 · Belgrano" } },
];

export function Ledger() {
  return (
    <div
      className="overflow-hidden rounded-md border border-card-border bg-card font-mono text-xs shadow-[var(--popover-shadow)]"
      aria-label="Ejemplo de la operación de un día en MYLOS"
    >
      <div className="flex items-baseline justify-between gap-3 border-b border-card-inner-border px-3.5 py-2.5 text-label tracking-[.05em] uppercase whitespace-nowrap text-muted-foreground">
        <b className="text-xs font-medium normal-case tracking-normal text-foreground">Hoy · 2 locales · 2 tiendas</b>
        <span className="hidden sm:inline">un solo stock · 2 CUIT</span>
        <span className="sm:hidden">2 CUIT</span>
      </div>
      {/* Abajo de sm quedan hora, canal y monto; en sm entra el estado. La referencia
          de la venta entra solo entre md y lg, donde el hero es de una columna y el
          extracto ocupa todo el ancho: en el hero a dos celdas no hay lugar para cinco. */}
      {rows.map((r) => (
        <div
          key={r.ref}
          className="grid grid-cols-[38px_1fr_auto] items-center gap-2.5 border-b border-card-inner-border px-3.5 py-2.5 whitespace-nowrap tabular-nums last-of-type:border-b-0 sm:grid-cols-[40px_1.15fr_.7fr_1.4fr] md:max-lg:grid-cols-[40px_1.3fr_.85fr_.7fr_1.35fr] lg:text-[11.5px]"
        >
          <span className="text-muted-foreground">{r.time}</span>
          <span className="flex min-w-0 items-center gap-1.5 overflow-hidden font-sans text-[12.5px] font-medium text-ellipsis">
            <i className={cn("size-2 shrink-0 rounded-[2px]", channelDot[r.channel])} />
            {r.where}
          </span>
          <span className="hidden md:max-lg:inline">{r.ref}</span>
          <span className="text-right">{r.amount}</span>
          <span className={cn("hidden min-w-0 overflow-hidden text-ellipsis sm:inline", r.status.kind === "ok" ? "text-success-ink" : "text-info-ink")}>
            {r.status.kind === "ok" ? "✓ " : ""}
            {r.status.text}
          </span>
        </div>
      ))}
      <div className="flex justify-between gap-3 border-t border-card-inner-border bg-surface px-3.5 py-2 text-label whitespace-nowrap text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <i className="size-1.5 rounded-full bg-success" />
          Caja Palermo abierta<span className="hidden sm:inline"> · turno 2</span>
        </span>
        <span>Stock sync hace 12 s</span>
      </div>
    </div>
  );
}
