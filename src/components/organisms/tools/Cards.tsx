"use client";
import { BsCalculator } from "react-icons/bs";
import { useActions } from "@/src/hooks/useActions";
import Card from "./Card";
import MultiLangSpan from "../../atoms/MultiLangSpan";
import { LuClipboardList } from "react-icons/lu";
import { GoGraph } from "react-icons/go";
import { LiaHandsHelpingSolid, LiaToolsSolid } from "react-icons/lia";

// same shape as in MultiLangSpan.tsx
type MultiLangHTML = {
  en: string;
  es: string;
  it?: string;
  ch?: string;
};

// ---------- Body components (special per card) ----------

const ImportsBody: React.FC = () => (
  <MultiLangSpan
    content={{
      es: "Calculá el costo total de traer tus productos.",
      en: "Calculate the total cost of bringing your products.",
    }}
  />
);

const TariffBody: React.FC = () => (
  <MultiLangSpan
    content={{
      es: "Identificá la partida arancelaria correcta para tu producto.",
      en: "Find the correct tariff code for your product.",
    }}
  />
);

const CostsBody: React.FC = () => (
  <MultiLangSpan
    content={{
      es: "Simulá tus costos y beneficios antes de importar.",
      en: "Simulate your costs and profits before importing.",
    }}
  />
);

const ToolsBody: React.FC = () => (
  <MultiLangSpan
    content={{
      es: "Accedé a herramientas imprescindibles para tu negocio.",
      en: "Access essential tools for your business.",
    }}
  />
);

const AdviceBody: React.FC = () => (
  <MultiLangSpan
    content={{
      es: "Hablá con un especialista en comercio exterior.",
      en: "Talk withBsCalculator a foreign trade specialist.",
    }}
  />
);

// map body keys -> body components
const bodyComponents: Record<string, React.ComponentType> = {
  importsBody: ImportsBody,
  tariffBody: TariffBody,
  costsBody: CostsBody,
  toolsBody: ToolsBody,
  adviceBody: AdviceBody,
};

// ---------- Icons map (you’ll fill these in) -------------

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  importsIcon: BsCalculator,
  tariffIcon: LuClipboardList,
  costsIcon: GoGraph,
  toolsIcon: LiaToolsSolid,
  adviceIcon: LiaHandsHelpingSolid,
};

// ---------- Cards config JSON-ish ------------------------

type CardConfig = {
  id: string;
  title: MultiLangHTML;
  body: string; // key in bodyComponents
  icon: string; // key in icons
  wrapperClass: string;
};

const cardsConfig: CardConfig[] = [
  {
    id: "imports",
    title: {
      es: "Calculá tus importaciones",
      en: "Calculate your imports",
    },
    body: "importsBody",
    icon: "importsIcon",
    wrapperClass: "col-span-2",
  },
  {
    id: "tariff-code",
    title: {
      es: "¿Partida Aduanera?",
      en: "Tariff code?",
    },
    body: "tariffBody",
    icon: "tariffIcon",
    wrapperClass: "col-span-2",
  },
  {
    id: "costs-benefits",
    title: {
      es: "Calculá tus costos y beneficios",
      en: "Calculate your costs and profits",
    },
    body: "costsBody",
    icon: "costsIcon",
    wrapperClass: "col-span-2",
  },
  {
    id: "tools",
    title: {
      es: "Herramientas imprescindibles",
      en: "Essential tools",
    },
    body: "toolsBody",
    icon: "toolsIcon",
    wrapperClass: "col-span-1 md:col-span-3",
  },
  {
    id: "advice",
    title: {
      es: "¿Necesitás asesoría?",
      en: "Need advice?",
    },
    body: "adviceBody",
    icon: "adviceIcon",
    wrapperClass: "col-span-1 md:col-span-3",
  },
];

// ================== Component ============================

export default function Cards() {
  const card = useActions((state) => state.card);
  const setCard = useActions((state) => state.setCard);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mx-auto text-white">
      {cardsConfig.map((item) => {
        const IconComponent = icons[item.icon];
        const BodyComponent = bodyComponents[item.body];

        return (
          <div key={item.id} className={item.wrapperClass}>
            <Card
              id={item.id}
              title={<MultiLangSpan content={item.title} />}
              body={BodyComponent ? <BodyComponent /> : null}
              icon={
                IconComponent ? (
                  <IconComponent className="w-14 h-14 mx-auto" />
                ) : null
              }
            />
          </div>
        );
      })}
    </div>
  );
}
