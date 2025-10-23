import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaArrowUp, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const GlobalUIElements = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem("cookieConsent");
    if (storedConsent) setCookieConsent(true);
    
    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAcceptCookies = () => {
    setCookieConsent(true);
    localStorage.setItem("cookieConsent", "true");
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+2347035101578"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-float fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-accent transition-all"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Scroll-to-top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            className="fixed bottom-20 right-6 bg-secondary text-text p-3 rounded-full shadow-md hover:bg-primary hover:text-white transition-all"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cookie Consent Toast */}
      <AnimatePresence>
        {!cookieConsent && (
          <motion.div
            className="fixed bottom-6 left-6 bg-white border border-gray-200 shadow-lg p-4 rounded-lg w-72 text-sm text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
          >
            <p className="mb-3">
              🍪 We use cookies to personalize content and analyze traffic.
            </p>
            <div className="flex justify-between items-center">
              <button
                onClick={handleAcceptCookies}
                className="bg-primary text-white px-3 py-1 rounded hover:bg-accent text-xs"
              >
                Accept
              </button>
              <button
                onClick={() => setCookieConsent(true)}
                className="text-gray-500 text-xs hover:text-text"
              >
                <FaTimes />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GlobalUIElements;
