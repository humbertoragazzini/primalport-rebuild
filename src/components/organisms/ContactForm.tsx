"use client";
import contactPageContent from "@/src/data/contactPageContent";
import { useLanguageStore } from "@/src/hooks/useLanguage";

const ContactForm = () => {
  const language = useLanguageStore((state) => state.language);
  const { fields, button } = contactPageContent.formSection;

  const t = (obj: Record<string, string>) => obj[language] ?? obj.en;

  return (
    <form className="space-y-5">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-muted-steel-blue mb-1.5">
          {t(fields.name.label)}
        </label>
        <input
          type="text"
          name="name"
          className="w-full rounded-full border border-muted-steel-blue/40 bg-deep-black/40 px-4 py-3 text-sm text-white placeholder:text-muted-steel-blue/70 focus:outline-none focus:ring-2 focus:ring-yellow-bright focus:border-yellow-bright transition"
          placeholder={t(fields.name.placeholder)}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-muted-steel-blue mb-1.5">
          {t(fields.email.label)}
        </label>
        <input
          type="email"
          name="email"
          className="w-full rounded-full border border-muted-steel-blue/40 bg-deep-black/40 px-4 py-3 text-sm text-white placeholder:text-muted-steel-blue/70 focus:outline-none focus:ring-2 focus:ring-yellow-bright focus:border-yellow-bright transition"
          placeholder={t(fields.email.placeholder)}
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium text-muted-steel-blue mb-1.5">
          {t(fields.subject.label)}
        </label>
        <input
          type="text"
          name="subject"
          className="w-full rounded-full border border-muted-steel-blue/40 bg-deep-black/40 px-4 py-3 text-sm text-white placeholder:text-muted-steel-blue/70 focus:outline-none focus:ring-2 focus:ring-yellow-bright focus:border-yellow-bright transition"
          placeholder={t(fields.subject.placeholder)}
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-muted-steel-blue mb-1.5">
          {t(fields.message.label)}
        </label>
        <textarea
          name="message"
          rows={5}
          className="w-full rounded-2xl border border-muted-steel-blue/40 bg-deep-black/40 px-4 py-3 text-sm text-white placeholder:text-muted-steel-blue/70 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-bright focus:border-yellow-bright transition"
          placeholder={t(fields.message.placeholder)}
        />
      </div>

      {/* Button */}
      <div className="pt-2 w-fit mx-auto">
        <button
          type="submit"
          className="inline-flex w-fit cursor-pointer items-center justify-center gap-2 rounded-full bg-light-grey px-6 py-3.5 text-sm font-semibold text-white hover:bg-light-grey/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-bright focus-visible:ring-offset-2 focus-visible:ring-offset-deep-black transition"
        >
          {/* Paper plane icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
          </svg>
          <span>{t(button)}</span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
