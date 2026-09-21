import type { Metadata } from "next";
import "./globals.css";
import "./landing.css";

export const metadata: Metadata = {
  title: "MYLOS · Ventas, stock, caja y facturación para comercios",
  description:
    "Ventas, stock, caja, facturación ARCA. Local, Tiendanube, MercadoLibre. Todo en un mismo sistema, hecho en Argentina para comercios que operan en serio.",
  metadataBase: new URL("https://www.mylos.app"),
  openGraph: {
    title: "MYLOS · Ventas, stock, caja y facturación para comercios",
    description:
      "Local, Tiendanube y MercadoLibre en una sola cuenta. Stock, caja y facturación ARCA sin cargar nada dos veces.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className="h-full antialiased">
      <head>
        {/* globals.css nombra la familia literalmente ("Geist", "Geist Mono") en
            @theme inline, así que la fuente tiene que llegar con ese nombre. Un
            next/font generaría un nombre propio y el tema no lo vería. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-foreground">
        {children}
      </body>
    </html>
  );
}
