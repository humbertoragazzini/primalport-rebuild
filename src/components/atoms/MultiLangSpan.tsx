"use client";

import { useLanguageStore } from "@/src/hooks/useLanguage";

// adjust to your path

type MultiLangHTML = {
  en: string;
  es: string;
  it: string;
  ch: string;
};

type MultiLangSpanProps = {
  content: MultiLangHTML;
  className?: string;
};

export default function MultiLangSpan({
  content,
  className = "",
}: MultiLangSpanProps) {
  const language = useLanguageStore((state) => state.language);
  const selected = content[language] || content.en; // fallback to English

  return (
    <span
      className={className}
      lang={language}
      dangerouslySetInnerHTML={{ __html: selected }}
    />
  );
}
