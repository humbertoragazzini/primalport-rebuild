"use client";
import { FaArrowRight } from "react-icons/fa";
import PpButton from "../atoms/Button";
import Heading from "../atoms/Heading";
import MultiLangSpan from "../atoms/MultiLangSpan";
import { ScrollReveal } from "../atoms/ScrollReveal";
import { motion } from "framer-motion";

export default function HeadingSection({ tag, title, subtitle, button }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "linear",
      }}
      className="mx-auto px-2 xl:px-6 h-screen w-full flex justify-center items-center"
    >
      <div className="max-w-[1480px]">
        {tag && (
          <div className="rounded-full border-yellow-bright border-2 text-white py-4 px-6 w-fit mx-auto font-semibold mb-4 text-2xl backdrop-blur-xl">
            <MultiLangSpan content={tag}></MultiLangSpan>
          </div>
        )}
        {title && (
          <Heading
            level={1}
            className="text-white font-bold text-center mb-4 xl:text-[100px]!"
          >
            <MultiLangSpan content={title}></MultiLangSpan>
          </Heading>
        )}
        {subtitle && (
          <p className="font-semi text-lg! lg:text-xl! text-muted-steel-blue text-center mx-auto xl:w-[75%] mb-8">
            <MultiLangSpan content={subtitle}></MultiLangSpan>
          </p>
        )}
        {button && (
          <div className="flex justify-center items-center mb-8">
            <div className="ml-3">
              <PpButton
                theme={"yellow"}
                icon={<FaArrowRight size={18} />}
                href={"/"}
              >
                <MultiLangSpan content={button}></MultiLangSpan>
              </PpButton>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
