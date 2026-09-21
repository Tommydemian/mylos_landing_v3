import Image from "next/image";
import { SectionLabel } from "./section-label";
import { cn } from "@/lib/cn";

const brands = [
  { src: "/assets/brands/perfumum.svg", alt: "Perfumum BUE", w: 300, h: 72 },
  { src: "/assets/brands/electrocanitas.webp", alt: "Electro Cañitas", w: 640, h: 427, tall: true },
  { src: "/assets/brands/lumina.webp", alt: "Lúmina", w: 256, h: 102 },
  { src: "/assets/brands/dua-deco.webp", alt: "Dua Deco", w: 480, h: 192 },
  { src: "/assets/brands/hope-accesorios.webp", alt: "Hope Accesorios", w: 256, h: 131 },
  { src: "/assets/brands/taquari.webp", alt: "Taquari", w: 256, h: 102 },
];

export function Logos() {
  return (
    <section aria-label="Comercios que operan con MYLOS" className="border-b border-border">
      <SectionLabel>Comercios que operan con MYLOS</SectionLabel>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {brands.map((b, i) => (
          <li
            key={b.alt}
            className={cn(
              "flex min-h-20 items-center justify-center border-border px-4.5 py-5",
              "border-r [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:last:border-r-0",
              i < 4 && "border-b sm:border-b-0",
              i < 3 && "sm:border-b lg:border-b-0",
            )}
          >
            <Image
              src={b.src}
              alt={b.alt}
              width={b.w}
              height={b.h}
              // Son archivos de 2 a 12 KB y uno es SVG, que el optimizador rechaza.
              unoptimized
              className={cn("w-auto max-w-[130px] opacity-85 dark:invert dark:hue-rotate-180", b.tall ? "max-h-[52px]" : "max-h-[34px]")}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
