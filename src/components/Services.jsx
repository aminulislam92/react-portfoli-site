import React from "react";
import { BiPencil } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { MdOutlineDevices } from "react-icons/md";
import { TbCode } from "react-icons/tb";
import { delay, motion } from "framer-motion";
import { fadeInUP, transition } from "../utils/animations";

const servicesData = [
  {
    icon: <BiPencil className="text-2xl" />,
    title: "UX & UI",
    description:
      "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
  },
  {
    icon: <BsPhone className="text-2xl" />,
    title: "Web & Mobile App",
    description:
      "Transforming ideas into exceptional web and mobile app experiences.",
  },
  {
    icon: <MdOutlineDevices className="text-2xl" />,
    title: "Design & Creative",
    description:
      "Crafting visually stunning designs that connect with your audience.",
  },
  {
    icon: <TbCode className="text-2xl" />,
    title: "Development",
    description:
      "Bringing your vision to life with the latest technology and design trends.",
  },
];

const Services = () => {
  return (
    <>
      <section className="py-20 px-4 md:px-6 bg-[#0D0D0D]">
        <motion.div
          variants={fadeInUP}
          initial="initial"
          animate="animate"
          transition={{ ...transition.default }}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl mb-4 md:max-w-1/2 mx-auto bg-linear-to-br from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Collaborate with brands and agencies to create impactful results.
          </h2>
        </motion.div>

        {/* services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {servicesData.map((Service, index) => (
            <motion.div
              variants={fadeInUP}
              initial="initial"
              animate="animate"
              transition={{ ...transition.default, delay: index * 0.2 }}
              key={index}
              className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
            >
              <div className="mb-4 inline-block p-3 bg-gray-800/50 rounded-lg ">
                {Service.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{Service.title}</h3>
              <p className="text-gray-300 text-sm">{Service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
