"use client";

import { useRouter } from "next/navigation";
import type { ReactNode, MouseEvent } from "react";
import { useLenisInstance } from "@/src/context/LenisContext";

type JumpLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function JumpLink({ href, children, className }: JumpLinkProps) {
  const router = useRouter();
  const lenis = useLenisInstance();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const [pathname, hash] = href.split("#");
    const targetPath = pathname || window.location.pathname;
    const targetHash = hash || "";

    // If we're already on the same page, don't push a new route
    const samePage = targetPath === window.location.pathname;

    if (!samePage) {
      // Navigate to the page WITHOUT default scroll
      router.push(targetPath, { scroll: false });
    }

    if (!targetHash) return;

    // Give Next.js a moment to render the new page if needed
    setTimeout(
      () => {
        const el = document.getElementById(targetHash);
        if (!el) return;

        if (lenis) {
          // ✅ Use Lenis for smooth scroll
          lenis.scrollTo(el, {
            // You can add offset if you have a sticky header
            // offset: -80,
            // duration: 1.2, // depends on Lenis version/options
          });
        } else {
          // Fallback if Lenis isn't ready for some reason
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        window.history.replaceState(null, "", `${targetPath}#${targetHash}`);
      },
      samePage ? 0 : 2000
    ); // small delay only when changing page
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
