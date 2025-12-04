"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { useActions } from "@/src/hooks/useActions"; // <- your zustand store

export default function SmoothScrollProvider({ children }: PropsWithChildren) {
  // Grab whatever tells you "modal is open"
  // Here I'm assuming: card != "" means a modal is open
  const card = useActions((state) => state.card);
  const isModalOpen = Boolean(card !== "");

  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis once
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // React to modal open/close
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (isModalOpen) {
      lenis.stop(); // 🚫 lock scroll
    } else {
      lenis.start(); // ✅ enable scroll again
    }
  }, [isModalOpen]);

  return <>{children}</>;
}
