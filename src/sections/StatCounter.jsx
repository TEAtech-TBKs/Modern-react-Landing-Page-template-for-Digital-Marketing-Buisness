import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaChartLine, FaGlobe, FaStar } from "react-icons/fa";

const stats = [
  { icon: <FaTrophy className="text-text/30 text-7xl" />, value: "250+", label: "Brands Grown" },
  { icon: <FaChartLine className="text-text/30 text-7xl" />, value: "1.2M", label: "Leads Generated" },
  { icon: <FaGlobe className="text-text/30 text-7xl" />, value: "5", label: "Countries Served" },
  { icon: <FaStar className="text-text/30 text-7xl" />, value: "4.9/5", label: "Avg Rating" },
];

const StatCounter = () => {
  return (
    <section className="py-12 bg-background text-center">
      <p className="text-primary uppercase text-2xl font-bold  tracking-wide mb-7">
        <span className="text-text font-medium">Real</span> results <span className="text-text font-medium">from real </span>businesses
      </p>

      <div className="stats flex flex-wrap justify-center gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3 bg-white/10 mt-7 shadow-sm rounded-2xl px-6 py-4 hover:shadow-md transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {stat.icon}
            <div className="text-left">
              <h3 className="text-5xl font-bold text-text">{stat.value}</h3>
              <p className="text-text/50 text-sm font-medium">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatCounter;
