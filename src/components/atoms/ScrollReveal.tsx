"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

type Direction = "left" | "right" | "bottom" | "scale";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
};

const directionVariants: Record<Direction, Variants> = {
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  bottom: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function ScrollReveal({
  children,
  className = "",
  direction = "bottom",
  delay = 0, // default delay = 0
  duration = 0.6,
}: ScrollRevealProps) {
  const variants = directionVariants[direction];

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay, // optional, no problem if undefined
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
