import React, { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useActions } from "@/src/hooks/useActions";
import LanguageToggle from "../atoms/LanguageToggle";

export const MobileMenu = () => {
  const { menu, setMenuToggle } = useActions();

  return (
    <div>
      <div className="w-[42px] h-[42px] ml-3 rounded-md grid place-content-center bg-gradient-to-br from-slate-800 to-slate-950">
        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{
                opacity: 0,
                y: -500,
              }}
              animate={{
                opacity: 1,
                y: -100,
              }}
              exit={{
                opacity: 0,
                y: -500,
              }}
              className="absolute top-0 left-0 h-[500px] w-full bg-[rgba(0,0,0,0.85)]"
            >
              <div className="pt-[115px] px-4">
                <LanguageToggle></LanguageToggle>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatedHamburgerButton />
      </div>
    </div>
  );
};

const AnimatedHamburgerButton = () => {
  const { menu, setMenuToggle } = useActions();
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={menu ? "open" : "closed"}
        onClick={() => setMenuToggle(menu)}
        className="relative h-8 w-8 rounded-sm bg-slate-950 transition-colors hover:bg-slate-700"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-[2px] w-6 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-[2px] w-6 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-[2px] w-3 bg-white"
          style={{
            x: "-70%",
            y: "55%",
            bottom: "30%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["30%", "55%", "55%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "33%"],
      left: "calc(50% + 10px)",
    },
  },
};
