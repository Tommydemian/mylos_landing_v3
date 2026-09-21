"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { TiendanubeIcon } from "./icons/tiendanube";
import { MercadoLibreIcon } from "./icons/mercadolibre";
import { StatusDot } from "./status-dot";

type Channel = "local" | "tiendanube" | "mercadolibre";

// El local es el anillo bronce, el canal propio; las tiendas llevan su marca.
function ChannelMark({ channel }: { channel: Channel }) {
  if (channel === "tiendanube") return <TiendanubeIcon className="size-3.5 text-tiendanube" />;
  if (channel === "mercadolibre") return <MercadoLibreIcon className="size-3.5" />;
  return <StatusDot tone="brand" hollow label="Local" className="mx-[3px]" />;
}

type Row = {
  time: string;
  channel: Channel;
  where: string;
  ref: string;
  amount: string;
  status: { kind: "ok" | "stock"; text: string };
};

// Un día de ejemplo. Filas del local, de Tiendanube y de MercadoLibre
// intercaladas: cada una con su factura o su descuento de stock. En orden
// cronológico: las seis primeras se ven al cargar (la última arriba); el resto
// va entrando de a una, arriba, y la más vieja sale por abajo. Cuando se
// acaban, vuelve a empezar.
const pool: Row[] = [
  { time: "12:55", channel: "mercadolibre", where: "MercadoLibre", ref: "Venta 9930", amount: "$6.400", status: { kind: "stock", text: "Stock −2 · Belgrano" } },
  { time: "13:12", channel: "tiendanube", where: "Tiendanube", ref: "Pedido 2206", amount: "$89.000", status: { kind: "ok", text: "Fact. A · CUIT 2" } },
  { time: "13:40", channel: "local", where: "Local · Belgrano", ref: "Venta 4811", amount: "$12.300", status: { kind: "ok", text: "Fact. B · ARCA" } },
  { time: "13:51", channel: "mercadolibre", where: "MercadoLibre", ref: "Venta 9931", amount: "$22.700", status: { kind: "ok", text: "Fact. B · ARCA" } },
  { time: "13:58", channel: "tiendanube", where: "Tiendanube", ref: "Pedido 2207", amount: "$31.500", status: { kind: "stock", text: "Stock −1 · Palermo" } },
  { time: "14:02", channel: "local", where: "Local · Palermo", ref: "Venta 4812", amount: "$48.900", status: { kind: "ok", text: "Fact. B · ARCA" } },
  { time: "14:05", channel: "tiendanube", where: "Tiendanube", ref: "Pedido 2208", amount: "$54.200", status: { kind: "ok", text: "Fact. B · ARCA" } },
  { time: "14:07", channel: "local", where: "Local · Belgrano", ref: "Venta 4813", amount: "$9.800", status: { kind: "stock", text: "Stock −1 · Belgrano" } },
  { time: "14:11", channel: "mercadolibre", where: "MercadoLibre", ref: "Venta 9932", amount: "$118.000", status: { kind: "ok", text: "Fact. A · CUIT 2" } },
  { time: "14:14", channel: "local", where: "Local · Palermo", ref: "Venta 4814", amount: "$27.600", status: { kind: "ok", text: "Fact. B · ARCA" } },
  { time: "14:16", channel: "tiendanube", where: "Tiendanube", ref: "Pedido 2209", amount: "$41.300", status: { kind: "stock", text: "Stock −3 · Palermo" } },
  { time: "14:20", channel: "mercadolibre", where: "MercadoLibre", ref: "Venta 9933", amount: "$15.900", status: { kind: "ok", text: "Fact. B · ARCA" } },
];

const VISIBLE = 6;
const EVERY_MS = 4800;

export function Ledger() {
  // `next` es el índice del pool de la próxima fila que entra. Las visibles son
  // las VISIBLE anteriores a `next`, de la más nueva a la más vieja.
  const [next, setNext] = useState(VISIBLE);
  // Segundos desde la última sincronización de stock. Se reinicia cuando entra
  // una fila que descuenta stock.
  const [since, setSince] = useState(12);
  // Solo animan las filas que entraron después del primer render.
  const [live, setLive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setLive(true);
    const tick = setInterval(() => setSince((s) => s + 1), 1000);
    const feed = setInterval(() => setNext((n) => n + 1), EVERY_MS);
    return () => {
      clearInterval(tick);
      clearInterval(feed);
    };
  }, []);

  // Solo una fila que toca stock reinicia el reloj de sincronización.
  useEffect(() => {
    if (live && pool[(next - 1) % pool.length].status.kind === "stock") setSince(1);
  }, [live, next]);

  const rows = Array.from({ length: VISIBLE }, (_, i) => pool[(next - 1 - i) % pool.length]);
  const newest = next - 1;

  return (
    <div
      className="overflow-hidden rounded-md border border-card-border bg-card font-mono text-xs shadow-[var(--popover-shadow)]"
      aria-label="Ejemplo de la operación de un día en MYLOS"
      aria-live="off"
    >
      <div className="flex items-baseline justify-between gap-3 border-b border-card-inner-border px-3.5 py-2.5 text-label tracking-[.05em] uppercase whitespace-nowrap text-muted-foreground">
        <b className="text-xs font-medium normal-case tracking-normal text-foreground">Hoy · 2 locales · 2 tiendas</b>
        <span className="hidden sm:inline">un solo stock · 2 CUIT</span>
        <span className="sm:hidden">2 CUIT</span>
      </div>
      {/* Abajo de sm quedan hora, canal y monto; en sm entra el estado. La referencia
          de la venta entra solo entre md y lg, donde el hero es de una columna y el
          extracto ocupa todo el ancho: en el hero a dos celdas no hay lugar para cinco. */}
      {rows.map((r, i) => (
        <div
          // La key lleva el índice del pool para que React monte una fila nueva
          // (y dispare la animación) en vez de reciclar la de arriba.
          key={newest - i}
          className={cn(
            "grid grid-cols-[38px_1fr_auto] items-center gap-2.5 border-b border-card-inner-border px-3.5 py-2.5 whitespace-nowrap tabular-nums last-of-type:border-b-0 sm:grid-cols-[40px_1.15fr_.7fr_1.4fr] md:max-lg:grid-cols-[40px_1.3fr_.85fr_.7fr_1.35fr] lg:text-[11.5px]",
            live && i === 0 && "ledger-row-in",
          )}
        >
          <span className="text-muted-foreground">{r.time}</span>
          <span className="flex min-w-0 items-center gap-1.5 overflow-hidden font-sans text-[12.5px] font-medium text-ellipsis">
            <ChannelMark channel={r.channel} />
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
          <i className={cn("size-1.5 rounded-full bg-success", live && "ledger-beat")} />
          Caja Palermo abierta<span className="hidden sm:inline"> · turno 2</span>
        </span>
        <span className="tabular-nums">Stock sync hace {since} s</span>
      </div>
    </div>
  );
}
