import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full rounded-tl-2xl rounded-tr-2xl py-[10vh] bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 overflow-hidden whitespace-nowrap flex">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
            delay: 1,
          }}
          className="flex-shrink-0 m-0 text-[15vw] leading-none inline font-FoundersGrotesk -tracking-3.5 font-semibold uppercase mr-10"
        >
          Event Gig.&nbsp;&nbsp;&nbsp;
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
            delay: 1,
          }}
          className="flex-shrink-0 m-0 text-[15vw] leading-none inline font-FoundersGrotesk -tracking-3.5 font-semibold uppercase"
        >
          Event Gig.
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
