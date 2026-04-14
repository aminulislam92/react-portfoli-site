import React from "react";
import { motion } from "framer-motion";
import { fadeInUP, transition } from "../utils/animations";

const Footer = () => {
  return (
    <>
      <motion.footer
        variants={fadeInUP}
        initial="initial"
        animate="animate"
        transition={{ ...transition.default, delay: 0.4 }}
        className=" py-8 px-4 md:px-6 bg-black border-t border-gray-800/80"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2026 All rights reserved.</p>

          <div className="flex gap-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <span>/</span>
            <a href="#" className="hover:text-white transition-colors">
              Dribble
            </a>
            <span>/</span>
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
