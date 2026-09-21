"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { cn } from "@/lib/cn";

const tabs = [
  { id: "ventas", label: "Ventas", body: "Todas tus ventas con canal, medio de pago y estado de envío en un solo lugar.", src: "/assets/ventas-panel.webp" },
  { id: "productos", label: "Productos", body: "Catálogo, variantes y precios centralizados. El stock se descuenta solo en cada venta.", src: "/assets/productos-panel.webp" },
  { id: "caja", label: "Caja", body: "Cobros, egresos y cierre de turno en un mismo lugar, conciliados con tu operación real.", src: "/assets/caja-panel.webp" },
] as const;

export function PanelTabs() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("ventas");
  const base = useId();
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  function onKey(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (i + dir + tabs.length) % tabs.length;
    setActive(tabs[next].id);
    refs.current[next]?.focus();
  }

  return (
    <div className="grid lg:grid-cols-[280px_1fr]">
      {/* Abajo de lg son tres columnas iguales con solo el nombre; la descripción de la
          activa va debajo. Con overflow-x la tercera quedaba fuera de pantalla sin aviso. */}
      <div
        role="tablist"
        aria-label="Vistas de la app"
        className="grid grid-cols-3 border-b border-border lg:flex lg:flex-col lg:border-r lg:border-b-0"
      >
        {tabs.map((t, i) => {
          const selected = t.id === active;
          return (
            <button
              key={t.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              role="tab"
              id={`${base}-t-${t.id}`}
              aria-selected={selected}
              aria-controls={`${base}-p-${t.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(t.id)}
              onKeyDown={(e) => onKey(e, i)}
              className={cn(
                "flex min-w-0 flex-col gap-1 px-3 py-3.5 text-center lg:px-6 lg:py-5 lg:text-left lg:border-b lg:border-border",
                "border-r border-border last:border-r-0 lg:border-r-0",
                selected
                  ? "bg-card shadow-[inset_0_-3px_0_var(--primary)] lg:shadow-[inset_3px_0_0_var(--primary)]"
                  : "hover:bg-surface",
              )}
            >
              <b className={cn("text-[15px] font-semibold tracking-[-.01em] lg:text-base", selected ? "text-foreground" : "text-muted-foreground-strong")}>
                {t.label}
              </b>
              <span className="hidden text-[13.5px] leading-[1.45] text-muted-foreground-strong lg:block">{t.body}</span>
            </button>
          );
        })}
        <div className="hidden flex-1 bg-surface lg:block" />
      </div>
      <p className="border-b border-border px-5 py-3.5 text-[13.5px] leading-[1.45] text-muted-foreground-strong lg:hidden">
        {tabs.find((t) => t.id === active)?.body}
      </p>

      {/* La captura sale del marco: pegada a la regla derecha y sin borde de ese
          lado, como una hoja que sigue más allá de la página. */}
      <div className="flex items-end overflow-hidden bg-surface pt-8 pl-4 md:pt-10 md:pl-8 lg:pt-12 lg:pl-10">
        <div className="max-h-[560px] w-full overflow-hidden rounded-tl-[12px] border border-r-0 border-b-0 border-card-border bg-card shadow-[var(--popover-shadow)]">
          {tabs.map((t) => (
            <Image
              key={t.id}
              id={`${base}-p-${t.id}`}
              role="tabpanel"
              aria-labelledby={`${base}-t-${t.id}`}
              src={t.src}
              alt={`Pantalla de ${t.label.toLowerCase()} de MYLOS`}
              width={1670}
              height={1326}
              sizes="(min-width: 1120px) 840px, 100vw"
              className="h-auto w-full"
              hidden={t.id !== active}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
