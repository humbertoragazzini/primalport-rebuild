"use client";
import { ReactNode, ElementType } from "react";
import { motion } from "framer-motion";

type ButtonTheme = "yellow" | "plum" | "rose" | "lime" | "graphite";

type PpButtonProps = {
  as?: ElementType;
  href?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  theme?: ButtonTheme;
};

const THEME_CONFIG: Record<
  ButtonTheme,
  {
    gradient: string;
    idleGlow: string;
    hoverGlow: string;
    innerBgClass: string;
    textClass: string;
  }
> = {
  yellow: {
    // yellow-bright + deep-black
    gradient: "linear-gradient(135deg, #FDE305, #030d0c, #FDE305)",
    idleGlow: "0 0 6px rgba(253, 227, 5, 0.25)",
    hoverGlow: "0 0 28px rgba(253, 227, 5, 0.6)",
    innerBgClass: "bg-yellow-bright",
    textClass: "text-black",
  },
  plum: {
    // plum + deep-black
    gradient: "linear-gradient(135deg, #8C3B60, #030d0c, #8C3B60)",
    idleGlow: "0 0 6px rgba(140, 59, 96, 0.35)",
    hoverGlow: "0 0 28px rgba(140, 59, 96, 0.7)",
    innerBgClass: "bg-plum",
    textClass: "text-white",
  },
  rose: {
    // rose + burgundy
    gradient: "linear-gradient(135deg, #e07176, #6B0142, #e07176)",
    idleGlow: "0 0 6px rgba(224, 113, 118, 0.35)",
    hoverGlow: "0 0 28px rgba(224, 113, 118, 0.7)",
    innerBgClass: "bg-rose",
    textClass: "text-white",
  },
  lime: {
    // lime + deep-black
    gradient: "linear-gradient(135deg, #98DB14, #030d0c, #98DB14)",
    idleGlow: "0 0 6px rgba(152, 219, 20, 0.30)",
    hoverGlow: "0 0 28px rgba(152, 219, 20, 0.65)",
    innerBgClass: "bg-lime",
    textClass: "text-deep-black",
  },
  graphite: {
    // graphite + yellow-bright
    gradient: "linear-gradient(135deg, #313434, #FDE305, #313434)",
    idleGlow: "0 0 6px rgba(253, 227, 5, 0.30)",
    hoverGlow: "0 0 28px rgba(253, 227, 5, 0.7)",
    innerBgClass: "bg-graphite",
    textClass: "text-yellow-bright",
  },
};

export default function PpButton({
  as: Component = "button",
  href,
  icon,
  children,
  className = "",
  theme = "yellow",
  ...rest
}: PpButtonProps) {
  const MotionWrapper = motion.div;
  const MotionComponent = motion(Component as ElementType);

  const config = THEME_CONFIG[theme];

  return (
    <MotionWrapper
      className="p-[3px] rounded-2xl"
      style={{
        backgroundImage: config.gradient,
        backgroundSize: "300% 300%",
        backgroundPosition: "0% 50%",
        boxShadow: config.idleGlow,
      }}
      variants={{
        rest: {
          backgroundPosition: "0% 50%",
          boxShadow: config.idleGlow,
        },
        hover: {
          backgroundPosition: "100% 50%",
          boxShadow: config.hoverGlow,
        },
      }}
      initial="rest"
      whileHover="hover"
      transition={{
        backgroundPosition: {
          duration: 1.3,
          ease: "easeInOut",
        },
        boxShadow: {
          duration: 0.6,
          ease: "easeInOut",
        },
      }}
    >
      <MotionComponent
        href={Component === "a" ? href : undefined}
        className={`
          w-full flex items-center justify-center gap-3
          px-6 py-3 rounded-2xl
          font-bold cursor-pointer select-none
          ${config.innerBgClass} ${config.textClass}
          transition-colors duration-300
          ${className}
        `}
        variants={{
          rest: {
            boxShadow: "inset 0 0 0 rgba(0,0,0,0)",
          },
          hover: {
            boxShadow: "inset 0 0 30px rgba(0,0,0,0.45)",
          },
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        {...rest}
      >
        <span className="block">{children}</span>

        {icon && (
          <motion.span
            className="flex items-center"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.1 },
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {icon}
          </motion.span>
        )}
      </MotionComponent>
    </MotionWrapper>
  );
}
