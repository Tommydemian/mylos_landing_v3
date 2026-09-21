import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost" | "contrast" | "inverse";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-vivid",
  outline: "bg-card text-foreground border-card-border card-ring-shadow hover:bg-muted",
  ghost: "bg-transparent text-foreground border-border hover:bg-muted",
  contrast: "bg-contrast text-contrast-foreground",
  // Para botones dentro de un bloque bg-contrast.
  inverse:
    "bg-transparent text-contrast-foreground shadow-[inset_0_0_0_1px_color-mix(in_oklch,var(--contrast-foreground)_30%,transparent)] hover:bg-contrast-foreground/10",
};

// Mismos escalones que la app: sm h-8.5, md h-10, lg h-12.
const sizes: Record<Size, string> = {
  sm: "h-[34px] px-3.5 text-[13.5px]",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-[22px] text-[15px]",
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; size?: Size }) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md border border-transparent font-medium whitespace-nowrap transition-colors",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
