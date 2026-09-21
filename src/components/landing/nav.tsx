import Image from "next/image";
import { ButtonLink } from "./button";
import { nav, site } from "@/lib/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between border-x border-border px-5 py-3 md:px-7">
        <a href="#top" aria-label="MYLOS, inicio" className="flex items-center">
          <Image src="/assets/logo-lockup.png" alt="MYLOS" width={152} height={66} className="h-[22px] w-auto" priority />
        </a>
        <nav aria-label="Secciones" className="hidden gap-6 text-sm text-muted-foreground-strong md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-2">
          <ButtonLink variant="ghost" size="sm" href={site.app}>
            Ingresar
          </ButtonLink>
          <ButtonLink variant="primary" size="sm" href={site.whatsapp}>
            Empezar gratis
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
