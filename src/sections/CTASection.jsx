// src/sections/CTASection.jsx
import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../components/CTAButton";

const CTASection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-text to-accent text-background text-center overflow-hidden">
      {/* Animated headline */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold mb-4"
      >
        Ready to Grow Your Brand Faster?
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-secondary mb-10"
      >
        Let’s build your social media success story today.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <CTAButton text="Get Your Free Strategy Call" />
      </motion.div>

      {/* Microcopy */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-6 text-sm text-background/80"
      >
        No spam. Just results. 🚀
      </motion.p>

      {/* Decorative glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default CTASection;
