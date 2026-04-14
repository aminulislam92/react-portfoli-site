import React from "react";
import { LuHandshake } from "react-icons/lu";
import { motion } from "framer-motion";
import { fadeInUP, transition } from "../utils/animations";

const Contact = () => {
  return (
    <>
      <section className="py-32 px-4 md:px-6 bg-[#0F0F0F]/80">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            variants={fadeInUP}
            initial="initial"
            animate="animate"
            transition={{ ...transition.default }}
            className="mb-12"
          >
            <div className=" size-24 mx-auto bg-gray-900 rounded-full flex items-center justify-center mb-8">
              <LuHandshake className="text-5xl text-gray-300" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl md:max-w-1/2 mx-auto bg-linear-to-br from-white via-gray-400 to-gray-700 text-transparent bg-clip-text">
              Tell me about your next project
            </h2>
          </motion.div>
          <motion.div
            variants={fadeInUP}
            initial="initial"
            animate="animate"
            transition={{ ...transition.default, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="mailto:aminulislam@dev.com"
              className="inline-flex items-center font-medium px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://wa.me/01740855599"
              target="_black"
              className="inline-flex items-center font-medium px-8 py-3 border border-gray-700 rounded-full text-white hover:border-gray-500 transition-colors"
            >
              WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
