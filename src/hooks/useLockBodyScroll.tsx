// useLockBodyScroll.ts
"use client";

import { useEffect } from "react";

export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (typeof document === "undefined") return; // SSR safety

    const originalStyle = document.body.style.overflow;

    if (locked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalStyle || "";
    }

    // Clean up on unmount / when locked changes
    return () => {
      document.body.style.overflow = originalStyle || "";
    };
  }, [locked]);
}
