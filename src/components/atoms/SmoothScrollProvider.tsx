"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { useActions } from "@/src/hooks/useActions";
import { LenisContext } from "@/src/context/LenisContext";

export default function SmoothScrollProvider({ children }: PropsWithChildren) {
  const card = useActions((state) => state.card);
  const isModalOpen = Boolean(card !== "");

  const lenisRef = useRef<Lenis | null>(null);
  const [lenisState, setLenisState] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;
    setLenisState(lenis);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      setLenisState(null);
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (isModalOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [isModalOpen]);

  return (
    <LenisContext.Provider value={lenisState}>{children}</LenisContext.Provider>
  );
}
