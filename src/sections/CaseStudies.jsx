import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaChartLine } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import logoFashion from "../assets/fashion.jpg";
import logoFintech from "../assets/fintech.png";
import logoRestaurant from "../assets/restaurant.jpg";
import logoEdu from "../assets/edu.jpg";
import logoBeauty from "../assets/beauty.png";
import CTAButton from "../components/CTAButton";

const caseStudies = [
  {
    id: 1,
    logo: logoFashion,
    metric: "+120% Engagement",
    result: "We grew a fashion brand’s Instagram from 2k → 12k in 3 months.",
  },
  {
    id: 2,
    logo: logoFintech,
    metric: "+3.2x ROI",
    result: "Helped a fintech company triple conversions through ad optimization.",
  },
  {
    id: 3,
    logo: logoRestaurant,
    metric: "+85% Leads",
    result: "Boosted a restaurant’s online orders via content and paid campaigns.",
  },
  {
    id: 4,
    logo: logoEdu,
    metric: "+10k Followers",
    result: "Scaled an edu brand’s TikTok audience with consistent viral content.",
  },
  {
    id: 5,
    logo: logoBeauty,
    metric: "+150% Sales",
    result: "Turned a beauty brand’s socials into a customer acquisition machine.",
  },
];

const CaseStudies = () => {
  const carouselRef = useRef();

  return (
    <section className="py-20 bg-background text-text overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Proven Results That Speak for Themselves
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          We don’t just talk growth — we deliver it. Explore how brands across
          industries achieved real, measurable results with Prolanz Digitals.
        </motion.p>

        {/* Carousel */}
        <motion.div
          ref={carouselRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing overflow-x-auto pb-6 scrollbar-hide"
          drag="x"
          dragConstraints={{ right: 0, left: -800 }}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl shadow-md p-6 flex flex-col items-start text-left hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Updated logo image */}
              <img
                src={study.logo}
                alt="Client logo"
                className="w-full h-40 object-cover rounded-xl mb-3 border border-gray-100 shadow-sm"
              />
              <p className="text-primary font-bold text-lg mb-2 flex items-center gap-2">
                <FaChartLine /> {study.metric}
              </p>
              <p className="text-gray-600 mb-4">{study.result}</p>
              <button className="text-accent font-semibold flex items-center gap-2 hover:underline">
                View Case Study <FaArrowRight className="text-sm" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-16 items-center justify-center flex flex-col">
          <p className="flex items-center text-gray-600 mb-4">
            Your brand could be next — let’s make it happen
            <FaArrowTrendUp className="text-primary ml-2 text-xl" />
          </p>
          <CTAButton text="Start Your Growth Plan" variant="primary" />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
