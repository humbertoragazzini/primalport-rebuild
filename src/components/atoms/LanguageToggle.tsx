"use client";
import { useLanguageStore } from "@/src/hooks/useLanguage";
import Image from "next/image";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguageStore();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="
        flex items-center gap-2 
        px-3 py-2 rounded-md 
        font-semibold
        cursor-pointer
        bg-slate-950 hover:bg-neutral-900 
        transition-colors
        border border-neutral-700
        text-white
      "
    >
      {language === "en" ? (
        <>
          <Image
            src="./images/icons/flags/es.svg"
            alt="Español"
            width={22}
            height={22}
            className="rounded-sm"
          />
          <span className="text-sm">ES</span>
        </>
      ) : (
        <>
          <Image
            src="./images/icons/flags/uk.svg"
            alt="English"
            width={22}
            height={22}
            className="rounded-sm"
          />
          <span className="text-sm">EN</span>
        </>
      )}
    </button>
  );
}
