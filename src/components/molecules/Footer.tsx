"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        border-t border-white/10
        bg-gradient-to-b from-transparent to-black backdrop-blur-md
        text-slate-300
      "
    >
      <div className="mx-auto max-w-[1480px] px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              Sign up for updates
            </h3>
            <p className="text-sm text-slate-400">
              Get news, product updates, and sneak peeks. No spam, ever.
            </p>

            {/* Email form (placeholder only) */}
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="
                  flex-1 rounded-md border border-slate-700 bg-black/40
                  px-3 py-2 text-sm text-slate-100
                  placeholder:text-slate-500
                  focus:outline-none focus:ring-2 focus:ring-yellow-bright focus:border-transparent
                "
              />
              <button
                type="submit"
                className="
                  rounded-md bg-yellow-bright px-5 py-2 text-xs font-semibold
                  uppercase tracking-wide text-black
                  hover:bg-yellow-400 transition-colors
                "
              >
                Let&apos;s go
              </button>
            </form>

            {/* Social + contact */}
            <div className="flex flex-col gap-3 pt-4">
              <div className="flex items-center gap-3 text-slate-400">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="p-2 rounded-full bg-black/40 hover:bg-black text-slate-200 transition-colors"
                >
                  <FaInstagram size={16} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="p-2 rounded-full bg-black/40 hover:bg-black text-slate-200 transition-colors"
                >
                  <FaLinkedinIn size={16} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="p-2 rounded-full bg-black/40 hover:bg-black text-slate-200 transition-colors"
                >
                  <FaFacebookF size={16} />
                </a>
              </div>

              <div className="flex flex-col gap-1 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt size={12} />
                  <span>Phone: +00 0000 000000</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaWhatsapp size={14} />
                  <span>WhatsApp: +00 0000 000000</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: LINK COLUMNS */}
          <FooterColumn
            title="Home"
            links={[
              { label: "Hero", href: "/#home-hero" },
              { label: "About Primalport", href: "/#home-highlights" },
              { label: "Smart Importing", href: "/#cards-highlights" },
              { label: "Smooth Exporting", href: "/#cards-highlights" },
              { label: "Logistics & Coordination", href: "/#cards-highlights" },
              { label: "Toilet Paper Line", href: "/#cards-highlights" },
            ]}
          />

          <FooterColumn
            title="About us"
            links={[
              { label: "Who we are", href: "#about-who" },
              { label: "Our mission", href: "#about-mission" },
              { label: "Our values", href: "#about-values" },
              { label: "Our story", href: "#about-story" },
              { label: "Why we’re different", href: "#about-different" },
              { label: "Our team", href: "#about-team" },
              { label: "Toilet paper brand", href: "#about-paper" },
              { label: "Looking ahead", href: "#about-future" },
            ]}
          />

          <FooterColumn
            title="Our services"
            links={[
              { label: "Import services", href: "#services-import" },
              { label: "Export services", href: "#services-export" },
              {
                label: "Market research & sourcing",
                href: "#services-research",
              },
              {
                label: "Logistics & supply chain",
                href: "#services-logistics",
              },
              { label: "Customs & compliance", href: "#services-customs" },
              { label: "Quality assurance", href: "#services-quality" },
              { label: "Toilet paper distribution", href: "#services-paper" },
              { label: "Additional services", href: "#services-extra" },
            ]}
          />

          <FooterColumn
            title="Contact us"
            links={[
              { label: "Contact form", href: "#contact-form" },
              { label: "Location", href: "#contact-location" },
            ]}
          />
        </div>

        {/* Bottom strip */}
        <div className="mt-10 border-t border-slate-800 pt-4 text-xs text-slate-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-slate-300">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-300">
              Terms
            </a>
            <a href="#" className="hover:text-slate-300">
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: { label: string; href: string }[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="space-y-3">
      <h4 className="text-xs font-semibold tracking-[0.18em] text-slate-300 uppercase">
        {title}
      </h4>
      <ul className="space-y-1 text-sm text-slate-400">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="hover:text-slate-200 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
