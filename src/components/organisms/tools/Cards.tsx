"use client";
import { useActions } from "@/src/hooks/useActions";
import Card from "./Card";

export default function Cards() {
  const card = useActions((state) => state.card);
  const setCard = useActions((state) => state.setCard);

  // --- Cards config JSON ---------------------------------
  const cardsConfig = [
    {
      id: "imports",
      title: "Calcula tus importaciones",
      body: "Calcula el costo total de traer tus productos.",
      icon: "importsIcon", // <- icon name you’ll map to a component
      wrapperClass: "col-span-2",
    },
    {
      id: "tariff-code",
      title: "Partida Aduanera?",
      body: "Identifica la partida arancelaria correcta.",
      icon: "tariffIcon",
      wrapperClass: "col-span-2",
    },
    {
      id: "costs-benefits",
      title: "Calcula tus costos y beneficios",
      body: "Simula tu rentabilidad antes de importar.",
      icon: "costsIcon",
      wrapperClass: "col-span-2",
    },
    {
      id: "tools",
      title: "Herramientas imprescindibles",
      body: "Accede a recursos clave para tu negocio.",
      icon: "toolsIcon",
      wrapperClass: "col-span-1 md:col-span-3",
    },
    {
      id: "advice",
      title: "¿Necesitas asesoría?",
      body: "Hablá con un especialista en comercio exterior.",
      icon: "adviceIcon",
      wrapperClass: "col-span-1 md:col-span-3",
    },
  ];

  // Optional: icon name -> component map (you fill this in)
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    // importsIcon: ImportsIconComponent,
    // tariffIcon: TariffIconComponent,
    // costsIcon: CostsIconComponent,
    // toolsIcon: ToolsIconComponent,
    // adviceIcon: AdviceIconComponent,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mx-auto text-white">
      {cardsConfig.map((item) => {
        const IconComponent = icons[item.icon];

        return (
          <div key={item.id} className={item.wrapperClass}>
            <Card
              id={item.id}
              title={<span lang="es">{item.title}</span>}
              body={<span lang="es">{item.body}</span>}
              icon={
                IconComponent ? <IconComponent className="w-14 h-14" /> : null
              }
            />
          </div>
        );
      })}
    </div>
  );
}
