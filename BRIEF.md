# MYLOS — Brief de la landing v3

Fuente de verdad de contenido para la landing nueva. Lo nuclear está en `CLAUDE.md`; acá está el detalle.

> **Revisión 2026-09-21.** Tomás fijó el hero y el orden final (ver `CLAUDE.md`). Eso reemplaza las secciones 1, 4 y 6 de abajo en lo que se contradigan: el hero vuelve a ser la lista de sustantivos con MercadoLibre agregado, "todo en un mismo sistema" vuelve, y las secciones son hero → todo lo que hace → integraciones → logos → planes → FAQ. Lo demás sigue vigente.

## 1. Sujeto

Un perfil único: **el comercio con local físico que además vende por Tiendanube.** Uno o más puntos de venta, stock propio.

Es el sujeto del hero, no un badge ni una card secundaria. Todo lo que no le hable a ese perfil se va.

## 2. Problema

El comercio que vende en el local y por Tiendanube tiene la operación repartida entre planillas y sistemas que no se hablan, y **el dueño termina siendo el sistema**.

MYLOS junta esa operación en **una sola cuenta**:

- stock
- facturación ARCA
- ventas del local y de Tiendanube
- uno o varios locales
- uno o varios CUIT

Se instala desde la **Tienda de Aplicaciones Nube** y queda operativa en minutos con los datos migrados.

## 3. Categoría

**No usar "sistema de gestión" ni "ERP" en ningún lado.** Es la categoría del incumbente y no se compite ahí. Tampoco "todo en un mismo sistema".

## 4. Qué se descarta de la landing actual (mylos.app)

- "No está hecho para contadores. Está hecho para comerciantes." Oposición que no existe para este perfil y aliena al contador, que es un recomendador.
- El hero de lista de sustantivos ("Ventas, egresos, proveedores, mercadería, facturación.").
- Los cuatro pasos genéricos de "Cómo funciona" (cargás productos / registrás ventas / controlás caja / facturás ARCA).
- "Ver planes" apuntando a WhatsApp.
- "Un sistema. Todo adentro." y cualquier variante de "todo en un mismo sistema".

## 5. Qué se sostiene

- **Planes tal cual.** Esencial / Pro / Multi, volumen como diferenciador, "Nunca frenamos una venta", 14 días gratis.
- **Los seis logos:** Perfumum BUE, Electro Cañitas, Lúmina, Dua Deco, Hope Accesorios, Taquari.
- **FAQ**, reescrita al sujeto nuevo.
- La frase **"Diseñado para ser usado, no para ser aprendido."**

## 6. Orden de secciones

1. **Hero** — sujeto + problema.
2. **Cómo se instala desde Tiendanube** — 3 pasos.
3. **Qué queda unificado** — stock, ARCA, ventas local + Tiendanube, caja.
4. **Multi-local y multi-CUIT.**
5. **Logos.**
6. **Planes.**
7. **FAQ.**

## 7. Planes (datos exactos)

| Plan | Precio | Incluye | Límites |
|---|---|---|---|
| Esencial | $50.000 /mes +IVA | Todo MYLOS. Para el comercio que opera con una persona. | 1 usuario · 1 local · 500 ventas/mes · venta extra $70 |
| Pro (el más elegido) | $80.000 /mes +IVA | Todo MYLOS. Para el comercio con equipo. | 3 usuarios · 1 local · 2.000 ventas/mes · venta extra $50 |
| Multi | $150.000 /mes +IVA | Todo MYLOS, sin límite de ventas ni usuarios. Para la operación multi-local. | Hasta 2 locales y 3 CUIT · soporte directo del fundador · onboarding asistido |

Nota al pie: **"Nunca frenamos una venta.** Si te pasás del límite, la factura sale igual y el excedente se cobra al mes siguiente."

Cabecera vieja de planes (se puede reusar): "El sistema es el mismo en todos los planes. Solo cambia cuánto operás." → reescribir sin la palabra "sistema".

14 días gratis.

## 8. FAQ vieja (referencia para reescribir al sujeto nuevo)

- ¿Necesito saber contabilidad para usar MYLOS? — No. Vendés, controlás y registrás sin conocimientos técnicos. *(reescribir sin oponer operador/contador)*
- ¿Sirve si tengo un local físico? — Sí. Ventas, caja, stock, productos y gastos del comercio.
- ¿Sirve si vendo por Tiendanube? — Sí. Conecta la gestión del ecommerce con el control del negocio diario. Stock, ventas y caja en un solo lugar.
- ¿MYLOS reemplaza a mi contador? — No. Ordena ventas, gastos y comprobantes. El contador sigue siendo clave para lo fiscal y contable.
- ¿Puedo empezar sin cargar todo mi negocio? — Sí. Empezás con los productos principales y ordenás el resto progresivamente. *(con la migración desde Tiendanube esto cambia: los datos ya vienen)*
- ¿Cuánto tiempo lleva empezar a operar? — En minutos. Sin asistencia técnica, sin configuración previa.

## 9. Assets disponibles en mylos.app

- `assets/logo-mylos.png` (400×400)
- `assets/resumen-panel.webp` (1670×998) — panel de resumen
- `assets/ventas-panel.webp`, `assets/productos-panel.webp`, `assets/caja-panel.webp` (1670×1326)
- `images/brands/perfumum.svg`, `electrocanitas.webp`, `lumina.webp`, `dua-deco.webp`, `hope-accesorios.webp`, `taquari.webp`
- Snapshot de accesibilidad y screenshot full-page de la landing vieja en `.playwright-mcp/`.

## 10. Contacto y links

- WhatsApp: https://wa.me/5491131473895
- App: app.mylos.app
- Instagram: instagram.com/mylos.app · Facebook: facebook.com/mylos.app · LinkedIn: linkedin.com/company/mylos-app
- Privacidad: https://www.mylos.app/privacy.html
- Meta description vieja (reescribir): "Ventas, stock, caja, egresos y facturación ARCA en un solo sistema. Pensado para comercios que operan en serio."

## 11. Design system

El de la app: `globals.css` en la raíz. Landing y app son la misma familia visual. **No** el de la landing vieja (dark #000, papel #eeedeb, cobre #c07a4b, fuente Archivo, botones sin radius).

Resumen de `globals.css`:

- Tailwind v4 + shadcn. Todo en oklch. `--font-sans: Geist`, `--font-mono: Geist Mono`, `--font-serif: Source Serif 4`. `--text-label: 11px` para labels en versalitas.
- **Marca hue 52 (bronce).** `--primary: oklch(0.6 0.14 52)`, `--primary-vivid: oklch(0.68 0.18 52)`. Texto de marca legible: `--primary-ink: oklch(0.35 0.12 52)`. Nunca `text-primary` como texto (4.03:1).
- **Tinta neutra cálida**, hue 52 y no negro puro: `--foreground: oklch(0.2 0.008 52)`, `--muted-foreground: oklch(0.535 0.006 52)`, `--muted-foreground-strong: oklch(0.4828 0.006 52)`.
- **Superficies light:** `--canvas: oklch(0.98 0 0)` (#F8F8F8, el lienzo), `--card: oklch(1 0 0)` blanca, `--card-border: #e3e3e3`, `--card-inner-border: #eeeeee`, `--card-ring-shadow` (hairline 4% + caída 6%) en vez de border. `--surface: oklch(0.9789 0 0)`, `--muted: oklch(0.97 0 0)`, `--border: oklch(0.9 0 0)`.
- **Dark:** `--background/--canvas: oklch(0.13 0 0)`, `--card: oklch(0.205 0 0)`, `--primary: oklch(0.65 0.15 52)`, bordes blanco al 10%.
- **Cinco familias** (primary 52 / success 150 / destructive 25 / warning 75 / info 240) con cuatro roles: `-ink` (texto teñido, default), `-surface` + `-surface-border`, `-surface-subtle` + `-subtle-border`, fill (`--success`, `--warning`, `--error`, `--info`). Receta: surface `oklch(0.94 0.08 hue)`, subtle `oklch(0.97 0.03 hue)`.
- **Canales:** `--tiendanube: oklch(0.47 0.192 260)` (#0050C3), `--whatsapp`, `--mercadolibre`, `--instagram`.
- `--badge-brand: #fcf2e6` (pastilla crema de marca). `--link: oklch(0.45 0.08 52)`.
- `--radius: 0.625rem` (sm −4px, md −2px, lg = radius, xl +4px).
- Sombras: `--shadow-*` computadas desde `--shadow-y: 1px / blur 2px / opacity 0.05`. `--shadow-interactive: 0 1.5px 4px rgba(0,0,0,.15)`.
- Utilidades: `.width-container` (max 1200px), `.card-ring-shadow`, `.control-touch` (48px), `.scroll-subtle`, `.pb-safe`.
