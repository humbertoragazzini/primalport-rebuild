"use client";
import { FiCloudLightning } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useActions } from "@/src/hooks/useActions";
import { useLockBodyScroll } from "@/src/hooks/useLockBodyScroll";
import { ImCross } from "react-icons/im";

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
        className="group cursor-pointer relative mx-auto w-full h-full overflow-hidden rounded-3xl bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50"
      >
        <div className="relative h-full z-10 flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800">
          <div className="main-container h-full flex flex-col justify-between items-center">
            <div className="icon-container mx-auto w-28 h-28 z-10 mb-10 mt-2 rounded-full border-2 border-indigo-500 bg-slate-900 flex justify-center items-center text-7xl">
              {icon}
            </div>

            <h4 className="title relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
              {title}
            </h4>
            <div>
              <p className="body relative z-10 text-slate-400">{body}</p>
            </div>
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
              y: -50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: 50,
              opacity: 0,
            }}
            className="fixed w-full h-full top-0 left-0 z-50 p-6 bg-black/80"
          >
            <div className="bg-slate-800/40 backdrop-blur-2xl border-2 border-slate-600 rounded-4xl w-full h-full p-6">
              <button
                onClick={() => {
                  setCard("");
                }}
                className="absolute flex justify-center items-center rounded-full border-2 border-red hover:bg-red-800 transition-all duration-500 cursor-pointer right-0 top-0 m-4 w-12 h-12 bg-red"
              >
                <ImCross></ImCross>
              </button>

              <div className="text-white">
                <h2 className="text-4xl font-semibold">{title}:</h2>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
