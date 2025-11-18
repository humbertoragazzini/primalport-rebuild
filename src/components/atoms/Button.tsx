"use client";
import { ReactNode, ElementType } from "react";
import { motion } from "framer-motion";

type Theme = "primary" | "secondary" | "danger" | "ghost";

type PpButtonProps = {
  as?: ElementType; // "button", "a", or any element/component
  href?: string; // only used when rendering <a>
  theme?: Theme;
  icon?: ReactNode; // any icon, e.g. <FaBeer />
  children: ReactNode;
  className?: string;
};

// Gradients use your brand colors (hex values from your @theme)
const gradients: Record<Theme, string> = {
  // yellow-bright → plum
  primary: "linear-gradient(135deg, #FDE305, #8C3B60)",
  // graphite → deep-black
  secondary: "linear-gradient(135deg, #313434, #030d0c)",
  // red → burgundy
  danger: "linear-gradient(135deg, #e0363e, #6B0142)",
  // deep-black → plum
  ghost: "linear-gradient(135deg, #030d0c, #8C3B60)",
};

// Tailwind classes using your custom colors
const themes: Record<Theme, string> = {
  primary: "border-yellow-bright text-deep-black",
  secondary: "border-graphite text-light-grey",
  danger: "border-red text-red",
  ghost: "border-transparent text-yellow-bright",
};

export default function PpButton({
  as: Component = "button",
  href,
  theme = "primary",
  icon,
  children,
  className = "",
  ...rest
}: PpButtonProps) {
  const MotionComponent = motion(Component as ElementType);

  const baseStyles =
    "inline-flex items-center justify-center gap-3 rounded-xl px-5 py-3 font-bold " +
    "border-2 cursor-pointer " +
    "transition-transform duration-200 ease-out " +
    "hover:-translate-y-0.5";

  return (
    <MotionComponent
      href={Component === "a" ? href : undefined}
      className={`${baseStyles} ${themes[theme]} ${className}`}
      style={{
        backgroundImage: gradients[theme],
        backgroundSize: "200% 200%",
        backgroundPosition: "0% 0%",
        backgroundRepeat: "no-repeat",
      }}
      variants={{
        rest: { backgroundPosition: "0% 0%" },
        hover: { backgroundPosition: "100% 100%" },
      }}
      initial="rest"
      whileHover="hover"
      transition={{ duration: 0.8, ease: "easeInOut" }}
      {...rest}
    >
      <span className="block">{children}</span>
      {icon && <span className="flex items-center">{icon}</span>}
    </MotionComponent>
  );
}
