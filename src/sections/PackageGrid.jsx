import React from "react";
import { motion } from "framer-motion";
import { FaBullhorn, FaPenNib, FaAd, FaUsers, FaChartPie, FaGlobe } from "react-icons/fa";

const packages = [
  {
    icon: <FaBullhorn />,
    title: "Social Media Management",
    desc: "Daily posting & engagement",
  },
  {
    icon: <FaPenNib />,
    title: "Content Creation",
    desc: "Reels, carousels & copy",
  },
  {
    icon: <FaAd />,
    title: "Targeted Ads",
    desc: "Meta & Google campaigns",
  },
  {
    icon: <FaUsers />,
    title: "Community Management",
    desc: "Comment & DM handling",
  },
  {
    icon: <FaChartPie />,
    title: "Analytics & Reports",
    desc: "Clear monthly KPIs",
  },
  {
    icon: <FaGlobe />,
    title: "Landing Page Optimization",
    desc: "Boost conversions",
  },
];

const PackageGrid = () => {
  return (
    <section className="py-20 bg-background text-text text-center px-6">
      {/* Section Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-12 leading-snug"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What’s Inside the{" "}
        <span className="text-primary">Social Media Growth Package</span>
      </motion.h2>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {packages.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Icon Wrapper */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-secondary mb-5 shadow-sm">
              <div className="text-primary text-2xl">{item.icon}</div>
            </div>

            {/* Content */}
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Microcopy */}
      <p className="text-sm text-gray-500 mt-12 italic">
        Custom add-ons available
      </p>
    </section>
  );
};

export default PackageGrid;
