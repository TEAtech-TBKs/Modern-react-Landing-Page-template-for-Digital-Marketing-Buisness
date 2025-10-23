// src/sections/FAQ.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "How long until I see results?",
    a: "Most clients see measurable growth within 6–8 weeks.",
  },
  {
    q: "What platforms do you manage?",
    a: "Instagram, Facebook, X (Twitter), TikTok, and LinkedIn.",
  },
  {
    q: "Do you require contracts?",
    a: "No — we offer flexible month-to-month plans tailored to your goals.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-background" id="faq">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-text mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600">Quick answers to common questions about working with us.</p>
      </div>

      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border-b border-gray-200 py-4 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-text">{faq.q}</h3>
              <FaChevronDown
                className={`text-primary transition-transform ${
                  openIndex === i ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            <AnimatePresence>
              {openIndex === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 mt-2 text-left"
                >
                  {faq.a}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
