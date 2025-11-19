"use client";

import Link from "next/link";
import MultiLangSpan from "../atoms/MultiLangSpan";

type LangContent = {
  en: string;
  es: string;
  it: string;
  ch: string;
};

const NAV_LINKS: { href: string; label: LangContent }[] = [
  {
    href: "#home",
    label: {
      en: "Home",
      es: "Inicio",
      it: "Home",
      ch: "首页",
    },
  },
  {
    href: "#about",
    label: {
      en: "About us",
      es: "Sobre nosotros",
      it: "Chi siamo",
      ch: "关于我们",
    },
  },
  {
    href: "#services",
    label: {
      en: "Our services",
      es: "Nuestros servicios",
      it: "I nostri servizi",
      ch: "我们的服务",
    },
  },
  {
    href: "#contact",
    label: {
      en: "Contact us",
      es: "Contáctanos",
      it: "Contattaci",
      ch: "联系我们",
    },
  },
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 flex items-center justify-center">
        {/* Your SVG logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="752.96121 290.42861 100.01513 100.09866"
          className="w-full h-full"
        >
          <g>
            <ellipse
              cx="802.97943"
              cy="340.51636"
              rx="48.540421"
              ry="48.554413"
              style={{
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: 2.913,
              }}
            />
            <path
              d="m 752.96121,290.50874 0.004,2.01331"
              style={{ fill: "none", stroke: "#000000", strokeWidth: 0 }}
            />
            <path
              d="m 754.62956,291.19973 -1.43836,1.40875"
              style={{ fill: "none", stroke: "#000000", strokeWidth: 0 }}
            />
            <path
              d="m 755.01158,291.33319 -1.79866,-0.90458"
              style={{ fill: "none", stroke: "#000000", strokeWidth: 0 }}
            />
            <path
              d="m 803.31938,305.91245 -29.04629,48.95464 h 58.07397 z m -30.48962,51.38704 -1.71049,2.88303 64.40331,0.0398 -1.73323,-2.92282 z"
              style={{
                fill: "#ffffff",
                stroke: "#ffffff",
                strokeWidth: 0.295824,
              }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function NavbarLink({ href, label }: { href: string; label: LangContent }) {
  return (
    <Link
      href={href}
      className="
        px-3 py-2 text-sm font-medium
        text-slate-200/80 hover:text-white
        transition-colors
      "
    >
      <MultiLangSpan content={label} />
    </Link>
  );
}

export default function Header() {
  return (
    <header
      className="
        sticky top-0 z-50
        w-full
        border-b border-white/10
        bg-[rgba(0,0,0,0.2)]
        backdrop-blur-md
      "
    >
      <div
        className="
          mx-auto max-w-6xl
          flex items-center justify-between
          px-6 py-3
        "
      >
        <a className="flex items-center" href="/">
          <Logo />
          <p className="text-lg font-semi ml-3 text-white">PrimalPorts</p>
        </a>

        <nav className="flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <NavbarLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>
      </div>
    </header>
  );
}
