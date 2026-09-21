# MYLOS landing v3

Landing nueva de MYLOS. Detalle completo en `BRIEF.md`. Design system en `src/app/globals.css`.

## Stack

Next.js 16 (App Router, Turbopack) + Tailwind v4 + TypeScript, pnpm. `src/app/globals.css` es el archivo de la app copiado literal: no se edita acá, se trae de la app. Las fuentes llegan por Google Fonts con el nombre literal "Geist" porque `@theme inline` las nombra así.

- `pnpm dev` / `pnpm build` / `pnpm start`.
- Página: `src/app/page.tsx`. Secciones en `src/components/landing/`, una por archivo, en el orden de la página. `panel-tabs.tsx` es el único client component.
- Constantes (WhatsApp, app, redes, nav): `src/lib/site.ts`.
- Assets en `public/assets/` (paneles, logo recortado `logo-lockup.png`, `brands/`).
- `reference/index.html` es la maqueta standalone original; no se sirve, es referencia visual.

## Sujeto

El comercio con local físico que además vende online: **Tiendanube y MercadoLibre**. Uno o más puntos de venta, stock propio, uno o varios CUIT.

## Hero (fijado por Tomás el 2026-09-21, no se reescribe)

> **Ventas, stock, caja, facturación. Local, Tiendanube, MercadoLibre.**
>
> Todo en un mismo sistema, dispuesto a expandirse con una sola finalidad: ser el centro operativo de tu negocio y crecer con él.

## Promesa

La operación repartida entre planillas y programas que no se hablan se junta en una sola cuenta. Se instala desde la Tienda de Aplicaciones Nube y queda operativa en minutos con los datos migrados.

## Prohibido

- **"Sistema de gestión"** y **"ERP"**. Es la categoría del incumbente. ("Sistema" a secas sí, está en el hero.)
- Oponer comerciante a contador. El contador recomienda.
- CTA "Ver planes" a WhatsApp: "Ver planes" es un ancla a #planes.
- El look de la landing vieja (dark, Archivo, cobre #c07a4b, botones cuadrados).

## Se sostiene

Planes tal cual (Esencial $50k / Pro $80k / Multi $150k, "Nunca frenamos una venta", 14 días gratis). Los seis logos. "Diseñado para ser usado, no para ser aprendido."

## Orden de secciones

hero → todo lo que MYLOS hace, sin recortar (ventas, stock, caja, egresos, proveedores, ARCA, multi-local, multi-CUIT) → fila de integraciones completa (Tiendanube, MercadoLibre, MercadoPago Point, Tango, Kommo, Mailjet) → logos → planes → FAQ.

## Dirección visual elegida

C · "Libro mayor" (ver `DIRECCIONES.md`): grilla de hairlines, hero a dos celdas con extracto de la operación, Geist Mono para datos, bronce como único bloque de color.

## Visual

`globals.css` es la fuente de verdad. Landing y app son la misma familia. Geist, oklch, bronce hue 52 (`--primary`, texto con `--primary-ink`), tinta cálida `--foreground`, lienzo `--canvas` gris con cards blancas y `card-ring-shadow`. Cinco familias con roles ink / surface / surface-subtle / fill. Tiendanube tiene token propio (`--tiendanube`).
