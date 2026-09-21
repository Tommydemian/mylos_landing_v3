import Image from "next/image";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1120px] border-x border-b border-border">
      <div className="flex flex-wrap items-center justify-between gap-5 border-b border-border px-5 py-5.5 md:px-7">
        <a href="#top" className="flex items-center">
          <Image src="/assets/logo-lockup.png" alt="MYLOS" width={152} height={66} className="h-[22px] w-auto" />
        </a>
        <nav aria-label="Pie" className="flex flex-wrap gap-5 text-sm text-muted-foreground-strong">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground">
              {n.label}
            </a>
          ))}
          <a href={site.privacy} className="hover:text-foreground">
            Privacidad
          </a>
        </nav>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 text-[13px] text-muted-foreground md:px-7">
        <span>Hecho en Argentina para comercios que operan en serio. © 2026 MYLOS.</span>
        <div className="flex gap-4">
          <a href={site.social.instagram} className="hover:text-foreground">Instagram</a>
          <a href={site.social.facebook} className="hover:text-foreground">Facebook</a>
          <a href={site.social.linkedin} className="hover:text-foreground">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
