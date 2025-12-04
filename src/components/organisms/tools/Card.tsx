"use client";
import { FiCloudLightning } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useActions } from "@/src/hooks/useActions";

interface iCard {
  title: any;
  body: any;
}
export default function Card({ title, body, icon, id }: iCard) {
  const card = useActions((state) => state.card);
  const setCard = useActions((state) => state.setCard);
  return (
    <>
      <button
        onClick={() => {
          setCard(id);
        }}
        className="group relative mx-auto w-full h-full overflow-hidden rounded-3xl bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50"
      >
        <div className="relative h-full z-10 flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800">
          <div className="main-container">
            <div className="icon-container w-28 h-28 z-10 mb-10 mt-2 rounded-full border-2 border-indigo-500 bg-slate-900 flex justify-center items-center text-7xl">
              {icon}
            </div>
            <h4 className="title relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
              {title}
            </h4>
            <p className="body relative z-10 text-slate-400">{body}</p>
          </div>
        </div>

        <motion.div
          initial={{ rotate: "0deg" }}
          animate={{ rotate: "360deg" }}
          style={{ scale: 2 }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "linear",
          }}
          className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </button>
      <AnimatePresence>
        {card == id && (
          <motion.div
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
              width: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              width: "100vw",
              height: "100vh",
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed top-0 left-0 bg-red-400/40 z-50"
          >
            <button
              onClick={() => {
                setCard("");
              }}
            >
              close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
