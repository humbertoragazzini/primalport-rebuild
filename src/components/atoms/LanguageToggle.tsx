"use client";
import { useLanguageStore } from "@/stores/useLanguageStore";
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
        bg-neutral-800 hover:bg-neutral-700 
        transition-colors
        border border-neutral-700
      "
    >
      {language === "en" ? (
        <>
          <Image
            src="/flags/es.png" // you need to add this icon
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
            src="/flags/en.png" // you need to add this icon
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
