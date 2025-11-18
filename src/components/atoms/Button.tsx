"use client";
import { ReactNode, ElementType } from "react";
import { motion } from "framer-motion";

type PpButtonProps = {
  as?: ElementType;
  href?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function PpButton({
  as: Component = "button",
  href,
  icon,
  children,
  className = "",
  ...rest
}: PpButtonProps) {
  const MotionWrapper = motion.div;
  const MotionComponent = motion(Component as ElementType);

  const gradient =
    "linear-gradient(135deg, #FDE305, #030d0c, #FDE305, #030d0c)";

  return (
    <MotionWrapper
      className="p-[3px] rounded-xl"
      style={{
        backgroundImage: gradient,
        backgroundSize: "300% 300%",
        backgroundPosition: "0% 50%",
        boxShadow: "0 0 0 rgba(0,0,0,0)", // no glow initially
      }}
      variants={{
        rest: {
          backgroundPosition: "0% 50%",
          boxShadow: "0 0 0 rgba(0,0,0,0)", // no glow
        },
        hover: {
          backgroundPosition: "100% 50%",
          boxShadow: "0 0 28px rgba(253, 227, 5, 0.6)", // yellow glow (smooth)
        },
      }}
      initial="rest"
      whileHover="hover"
      transition={{
        duration: 1.3,
        ease: "easeInOut",
      }}
    >
      <MotionComponent
        href={Component === "a" ? href : undefined}
        className={`
          flex items-center justify-center gap-3
          px-6 py-3 rounded-[10px]
          font-bold cursor-pointer select-none
          bg-yellow-bright text-black
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
