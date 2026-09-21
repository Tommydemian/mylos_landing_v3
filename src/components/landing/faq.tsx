const faqs = [
  {
    q: "¿Sirve si tengo local y además vendo por Tiendanube o MercadoLibre?",
    a: "Sí, es justo para eso. Las ventas de los tres canales entran a MYLOS, descuentan del mismo stock, pasan por la misma caja y facturan en ARCA sin que cargues nada dos veces.",
  },
  {
    q: "¿Cómo se instala?",
    a: "Desde la Tienda de Aplicaciones Nube, con tu cuenta de Tiendanube. Tus productos, variantes, stock y clientes migran solos y en minutos estás operando. MercadoLibre se conecta desde adentro de MYLOS con tu cuenta.",
  },
  {
    q: "¿Necesito saber contabilidad para usarlo?",
    a: "No. Vendés, cobrás y registrás como siempre; MYLOS ordena los comprobantes. Tu contador recibe todo prolijo y sigue siendo clave para la parte fiscal.",
  },
  {
    q: "¿La factura ARCA sale sola?",
    a: "Sí. Se emite al cobrar, en cada venta y del canal que sea, con el CUIT que corresponda. Sin pasos extra ni salir de la app.",
  },
  {
    q: "¿Tengo más de un local o más de un CUIT?",
    a: "MYLOS es multi-local y multi-CUIT desde el día uno: cada local con su stock, su caja y sus ventas, y el total del negocio en una sola pantalla. El plan Multi cubre hasta 2 locales y 3 CUIT.",
  },
  {
    q: "¿Qué pasa si me paso del límite de ventas del plan?",
    a: "Nada que frene la venta. La factura sale igual y el excedente se cobra al mes siguiente, al precio por venta extra de tu plan.",
  },
];

export function Faq() {
  return (
    <section id="faq" aria-labelledby="h-faq" className="grid border-b border-border md:grid-cols-[1fr_1.5fr]">
      <div className="border-b border-border px-5 py-8 md:border-r md:border-b-0 md:px-7 md:py-11">
        <h2 id="h-faq" className="mb-3 text-[clamp(26px,3vw,34px)] font-semibold tracking-[-.028em] text-balance">
          Preguntas que probablemente te estás haciendo.
        </h2>
        <p className="max-w-[34ch] text-[15px] text-muted-foreground-strong">
          Si la tuya no está, escribinos por WhatsApp y te contesta alguien del equipo.
        </p>
      </div>
      <div>
        {faqs.map((f, i) => (
          <details key={f.q} open={i === 0} className="group border-b border-border last:border-b-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-4.5 text-base font-medium hover:bg-surface md:px-7 [&::-webkit-details-marker]:hidden">
              {f.q}
              <span aria-hidden="true" className="shrink-0 font-mono text-lg text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="max-w-[62ch] px-5 pb-5 text-[15px] text-muted-foreground-strong md:px-7">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
