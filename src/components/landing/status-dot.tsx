import { cn } from "@/lib/cn";

/**
 * StatusDot — el estado de algo, sin palabras. Copiado de la app; el único
 * agregado es el tono `brand` (bronce), que acá marca al local: no es un estado
 * sino el canal propio, y va hueco para distinguirse de las marcas ajenas.
 *
 * El texto sigue estando para lectores de pantalla: se pasa en `label`, que va
 * a un `sr-only` — un punto no lo lee nadie.
 */
export type StatusDotTone = "ok" | "busy" | "attention" | "idle" | "brand";

// Rol `fill`: el único que sirve como marca gráfica sobre la página (3:1).
const TONES: Record<StatusDotTone, string> = {
  ok: "bg-success",
  busy: "bg-warning",
  attention: "bg-error",
  idle: "bg-muted-foreground",
  brand: "bg-primary",
};

// El mismo tono, vacío por dentro. Para lo que NO es un estado sino una
// AUSENCIA, o acá, lo propio frente a lo ajeno.
const TONES_HOLLOW: Record<StatusDotTone, string> = {
  ok: "border border-success",
  busy: "border border-warning",
  attention: "border border-error",
  idle: "border border-muted-foreground",
  brand: "border-[1.5px] border-primary",
};

// Late lo que está pasando ahora o lo que pide una decisión. Verde, gris y
// bronce quedan quietos a propósito.
const PULSES_BY_DEFAULT: Record<StatusDotTone, boolean> = {
  ok: false,
  busy: true,
  attention: true,
  idle: false,
  brand: false,
};

export function StatusDot({
  tone,
  label,
  pulse,
  hollow,
  className,
}: {
  tone: StatusDotTone;
  /** Qué significa el punto. No se dibuja; es el texto accesible. */
  label: string;
  /** Fuerza o apaga el latido. Por defecto lo decide el tono. */
  pulse?: boolean;
  /** Anillo en vez de punto lleno. */
  hollow?: boolean;
  className?: string;
}) {
  const isPulsing = pulse ?? PULSES_BY_DEFAULT[tone];

  return (
    <span className={cn("relative flex size-2 shrink-0", className)}>
      {/* El halo, no el punto: latir el punto mismo lo hace desaparecer a medio
          ciclo. `motion-safe` porque esto corre todo el día en pantalla. */}
      {isPulsing && (
        <span aria-hidden className={cn("absolute inline-flex size-full rounded-full opacity-60 motion-safe:animate-ping", TONES[tone])} />
      )}
      <span aria-hidden className={cn("relative inline-flex size-full rounded-full", hollow ? TONES_HOLLOW[tone] : TONES[tone])} />
      <span className="sr-only">{label}</span>
    </span>
  );
}
