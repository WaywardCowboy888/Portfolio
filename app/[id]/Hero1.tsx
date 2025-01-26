import { inter } from "../fonts/inter.ts";
import { motion } from "framer-motion";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle.tsx";
import { Project } from "../components/types/valibot.ts";
import HeroBackground1 from "./HeroBackground.tsx";

const Hero1 = ({ props }: { props: Project }) => {
  return (
    <motion.section
      className="relative z-10 flex h-[100vh] w-full justify-center"
      id="home"
      initial="initial"
      animate="animate"
    >
      <HeroBackground1 props={props} />
      <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
        <div
          className={`relative flex flex-col items-center justify-center ${inter.className} pointer-events-none`}
        >
          <AnimatedTitle
            text={props.name}
            className={
              "mb-1 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
            }
            wordSpace={"mr-[10px]"}
            charSpace={"mr-[0.001em]"}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero1;
