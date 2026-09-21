import type { SVGProps } from "react";
import { cn } from "@/lib/cn";

// Marca de Tiendanube. Hereda el color del texto: `text-tiendanube` para el azul.
export function TiendanubeIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className={cn("size-4 shrink-0", className)} {...props}>
      <path d="M10.25 2.24a5.8 5.8 0 0 0-4 1.63 4.48 4.48 0 1 0 0 8.26 5.76 5.76 0 1 0 4-9.89m0 10.24A4.49 4.49 0 0 1 5.76 8H4.48a5.74 5.74 0 0 0 .89 3.07 3.3 3.3 0 0 1-.88.13 3.2 3.2 0 0 1 0-6.4A3.2 3.2 0 0 1 7.69 8H9a4.42 4.42 0 0 0-1.63-3.43 4.48 4.48 0 1 1 2.88 7.91" />
    </svg>
  );
}
