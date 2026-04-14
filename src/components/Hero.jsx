import React from "react";
import profileImg from "../assets/images/profile.avif";
import { motion } from "framer-motion";
import { fadeInUP, nameTagAnimation, transition } from "../utils/animations";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh] text-center">
      {/* image and name animation */}
      <div>
        <div className="relative mb-8">
          {/* gradient effect */}
          <div className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent rounded-full blur-xl"></div>
          {/* stastic portfolio image */}
          <div className="relative">
            <img
              src={profileImg}
              alt="Profile image"
              className="w-32 h-32 rounded-full relative z-1"
            />
          </div>

          {/* animated name tage */}
          <motion.div
            initial={nameTagAnimation.initial}
            animate={nameTagAnimation.animate}
            transition={nameTagAnimation.transition}
            className="absolute -rotate-3 top-0 -right-27 bg-white text-black px-4 py-2 rounded-full shadow-lg z-2"
          >
            <p className="text-sm font-medium">Aminul Islam 👋</p>
          </motion.div>
        </div>
      </div>

      {/* heading or title */}
      <motion.h1
        variants={fadeInUP}
        initial="initial"
        animate="animate"
        transition={{ ...transition.default, delay: 0.4 }}
        className="md:text-5xl text-3xl px-2 md:px-0 font-medium mb-4 max-w-xl bg-linear-to-br from-white via-gray-300 to-gray-600 text-transparent bg-clip-text"
      >
        <span>Building digital</span>
        <br />
        <span>products, brands, and</span>
        <br />
        <span>experience.</span>
      </motion.h1>

      {/* btn */}
      <motion.button
        variants={fadeInUP}
        initial="initial"
        animate="animate"
        transition={{ ...transition.default, delay: 0.6 }}
        className="mt-8 py-4 px-8 bg-[#1A1A1A] border rounded-full border-gray-600 text-gray-600 hover:border-gray-400 hover:text-white cursor-pointer "
      >
        Latest Shots
      </motion.button>
    </div>
  );
};

export default Hero;
