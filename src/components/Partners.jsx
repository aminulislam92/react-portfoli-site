import React from "react";
import codeAcademy from "../assets/logos/code-academy.svg";
import adove from "../assets/logos/adove.svg";
import cocaCola from "../assets/logos/cocacola.svg";
import mattered from "../assets/logos/mattered.svg";
import nationalBank from "../assets/logos/national-bank.svg";
import subway from "../assets/logos/subway.svg";
import { image } from "framer-motion/client";

const Partners = () => {
  const partners = [
    { name: "Code Academy", image: codeAcademy },
    { name: "Adove", image: adove },
    { name: "Coca Cola", image: cocaCola },
    { name: "Mattered", image: mattered },
    { name: "National Bank", image: nationalBank },
    { name: "Subway", image: subway },
  ];

  const duplicatePartners = [...partners, ...partners];
  return (
    <div className=" mt-20 relative overflow-hidden bg-white py-12">
      <div className="flex items-center justify-start gap-8 animate-marquee whitespace-nowrap">
        {duplicatePartners.map((partner, index) => (
          <img
            key={index}
            src={partner.image}
            alt={partner.name}
            className="h-8 mx-6 object-contain min-w-30 hover:scale-110 transition-transform duration-300 opacity-50 hover:opacity-100"
          />
        ))}
        {duplicatePartners.map((partner, index) => (
          <img
            key={`duplicate-${index}`}
            src={partner.image}
            alt={partner.name}
            className="h-8 mx-6 object-contain min-w-30 hover:scale-110 transition-transform duration-300 opacity-50 hover:opacity-100"
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
