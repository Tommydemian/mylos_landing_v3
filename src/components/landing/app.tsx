import { SectionLabel } from "./section-label";
import { PanelTabs } from "./panel-tabs";

// La captura, separada de la lista de features para que no compita con ella.
export function App() {
  return (
    <section id="app" aria-labelledby="h-app" className="border-b border-border">
      <SectionLabel id="h-app" aside="Ventas · Productos · Caja">
        Así se ve
      </SectionLabel>
      <PanelTabs />
    </section>
  );
}
