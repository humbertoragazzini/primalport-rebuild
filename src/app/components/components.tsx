"use client";

import PpButton from "@/src/components/atoms/Button";
import Heading from "@/src/components/atoms/Heading";
import MultiLangSpan from "@/src/components/atoms/MultiLangSpan";
import { useLanguageStore } from "@/src/hooks/useLanguage";
import {
  FaBeer,
  FaArrowRight,
  FaGithub,
  FaDownload,
  FaHeart,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

// one source of truth: all literals so Tailwind can see them
const COLORS = [
  { name: "red", bg: "bg-red", text: "text-red" },
  { name: "black", bg: "bg-black", text: "text-black" },
  { name: "yellow", bg: "bg-yellow", text: "text-yellow" },
  { name: "graphite", bg: "bg-graphite", text: "text-graphite" },
  { name: "light-grey", bg: "bg-light-grey", text: "text-light-grey" },
  { name: "rose", bg: "bg-rose", text: "text-rose" },
  { name: "yellow-bright", bg: "bg-yellow-bright", text: "text-yellow-bright" },
  { name: "plum", bg: "bg-plum", text: "text-plum" },
  { name: "lime", bg: "bg-lime", text: "text-lime" },
  { name: "burgundy", bg: "bg-burgundy", text: "text-burgundy" },
  { name: "deep-black", bg: "bg-deep-black", text: "text-deep-black" },
];

export function ColorGrid() {
  return (
    <div className="flex items-center justify-center bg-slate-950 px-6 py-10">
      <div className="w-full max-w-4xl rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-xl">
        <h2 className="mb-2 text-2xl font-semibold text-slate-50">
          Brand Colours
        </h2>
        <p className="mb-6 text-sm text-slate-400">
          Squares use Tailwind utilities (e.g. <code>bg-plum</code>) backed by
          colours defined in <code>@theme</code> in your CSS.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {COLORS.map((color) => (
            <div key={color.name} className="flex flex-col items-center gap-2">
              <div
                className={`w-20 h-20 rounded-lg shadow-md border border-slate-800 ${color.bg}`}
              />
              <span className="text-xs font-medium text-slate-100">
                {color.name}
              </span>
              <span className="text-[10px] uppercase tracking-wide text-slate-500">
                {color.bg}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeadingShowcase() {
  return (
    <div className="flex items-center justify-center bg-slate-950 px-6 py-10">
      <div className="w-full max-w-4xl rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-xl">
        <h2 className="mb-4 text-2xl font-semibold text-slate-50">
          Headings (sizes & colors)
        </h2>

        <div className="space-y-10">
          {[1, 2, 3, 4, 5, 6].map((level) => (
            <div key={level} className="space-y-3">
              {/* Section label */}
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Level h{level}
              </p>

              {/* Row of all color variants for this level */}
              <div className="flex flex-col gap-2">
                {COLORS.map((color) => (
                  <Heading
                    key={`${level}-${color.name}`}
                    level={level as 1 | 2 | 3 | 4 | 5 | 6}
                    className={`${color.text}`}
                  >
                    {`H${level} – ${color.name}`}
                  </Heading>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ButtonsShowcase() {
  const buttons = [
    {
      label: "Yellow + Beer",
      theme: "yellow" as const,
      icon: <FaBeer size={18} />,
    },
    {
      label: "Yellow Arrow",
      theme: "yellow" as const,
      icon: <FaArrowRight size={16} />,
    },
    {
      label: "Plum + Mail",
      theme: "plum" as const,
      icon: <FiMail size={18} />,
    },
    {
      label: "Plum (no icon)",
      theme: "plum" as const,
      icon: null,
    },
    {
      label: "Rose + Heart",
      theme: "rose" as const,
      icon: <FaHeart size={16} />,
    },
    {
      label: "Rose Download",
      theme: "rose" as const,
      icon: <FaDownload size={16} />,
    },
    {
      label: "Lime Github",
      theme: "lime" as const,
      icon: <FaGithub size={18} />,
    },
    {
      label: "Lime (no icon)",
      theme: "lime" as const,
      icon: null,
    },
    {
      label: "Graphite Link",
      theme: "graphite" as const,
      icon: <FaArrowRight size={14} />,
      as: "a" as const,
      href: "#graphite-link",
    },
    {
      label: "Graphite Mail Link",
      theme: "graphite" as const,
      icon: <FiMail size={16} />,
      as: "a" as const,
      href: "#graphite-mail",
    },
  ];

  return (
    <div className="flex items-center justify-center bg-slate-950 px-6 py-10">
      <div className="w-full max-w-4xl rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-xl">
        <h2 className="mb-4 text-2xl font-semibold text-slate-50">Buttons</h2>

        <p className="mb-6 text-sm text-slate-400">
          Variants using <code>yellow</code>, <code>plum</code>,{" "}
          <code>rose</code>, <code>lime</code> and <code>graphite</code> themes,
          with icons and polymorphic <code>as</code> (<code>button</code> /{" "}
          <code>a</code>).
        </p>

        <div className="flex flex-wrap gap-4">
          {buttons.map((btn, index) => (
            <PpButton
              key={index}
              theme={btn.theme}
              icon={btn.icon ?? undefined}
              as={btn.as}
              href={btn.href}
            >
              {btn.label}
            </PpButton>
          ))}
        </div>
      </div>
    </div>
  );
}
// Your multilingual heading demo data
const HEADING_CONTENT = [
  {
    level: 1 as const,
    content: {
      en: "Welcome to <strong>our universe</strong>",
      es: "Bienvenido a <strong>nuestro universo</strong>",
      it: "Benvenuto nel <strong>nostro universo</strong>",
      ch: "欢迎来到<strong>我们的宇宙</strong>",
    },
  },
  {
    level: 2 as const,
    content: {
      en: "Multilingual <em>headings</em> in action",
      es: "Encabezados <em>multilingües</em> en acción",
      it: "Titoli <em>multilingue</em> in azione",
      ch: "多语言<em>标题</em>动态展示",
    },
  },
  {
    level: 3 as const,
    content: {
      en: "Change the language, keep the <u>structure</u>",
      es: "Cambia el idioma, mantén la <u>estructura</u>",
      it: "Cambia la lingua, mantieni la <u>struttura</u>",
      ch: "切换语言但保持<u>结构</u>",
    },
  },
  {
    level: 4 as const,
    content: {
      en: "Perfect for <strong>SEO</strong> & UX",
      es: "Perfecto para <strong>SEO</strong> y UX",
      it: "Perfetto per <strong>SEO</strong> e UX",
      ch: "非常适合<strong>SEO</strong>和体验",
    },
  },
  {
    level: 5 as const,
    content: {
      en: "Powered by <code>Zustand</code> state",
      es: "Impulsado por el estado de <code>Zustand</code>",
      it: "Alimentato dallo stato di <code>Zustand</code>",
      ch: "由 <code>Zustand</code> 状态驱动",
    },
  },
];

export function HeadingsI18nShowcase() {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6 py-10">
      <div className="w-full max-w-4xl rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-xl">
        <h2 className="mb-4 text-2xl font-semibold text-slate-50">
          Multilingual Headings
        </h2>

        <p className="mb-6 text-sm text-slate-400">
          Switch languages and see the headings update instantly using Zustand.
        </p>

        {/* LANGUAGE BUTTONS */}
        <div className="flex flex-wrap gap-4 mb-10">
          <PpButton
            theme={language === "en" ? "yellow" : "graphite"}
            onClick={() => setLanguage("en")}
          >
            English
          </PpButton>

          <PpButton
            theme={language === "es" ? "yellow" : "graphite"}
            onClick={() => setLanguage("es")}
          >
            Español
          </PpButton>

          <PpButton
            theme={language === "it" ? "yellow" : "graphite"}
            onClick={() => setLanguage("it")}
          >
            Italiano
          </PpButton>

          <PpButton
            theme={language === "ch" ? "yellow" : "graphite"}
            onClick={() => setLanguage("ch")}
          >
            中文
          </PpButton>
        </div>

        {/* HEADINGS */}
        <div className="space-y-6">
          {HEADING_CONTENT.map(({ level, content }, index) => (
            <Heading key={index} level={level} className="text-slate-50">
              <MultiLangSpan content={content} />
            </Heading>
          ))}
        </div>
      </div>
    </div>
  );
}
