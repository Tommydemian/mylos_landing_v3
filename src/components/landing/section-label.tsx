// La etiqueta de fila de la hoja: mono, versalitas, con un dato a la derecha.
export function SectionLabel({
  children,
  aside,
  id,
}: {
  children: React.ReactNode;
  aside?: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="flex justify-between gap-4 border-b border-border px-5 py-3 font-mono text-label tracking-[.08em] uppercase text-muted-foreground md:px-7">
      <span id={id}>{children}</span>
      {aside ? <span className="normal-case tracking-[.04em]">{aside}</span> : null}
    </div>
  );
}
