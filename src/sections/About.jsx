import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaUsers, FaChartPie, FaCogs } from "react-icons/fa";

const features = [
  {
    icon: <FaBullseye className="text-accent text-2xl" />,
    title: "Result-Driven Campaigns",
    text: "We craft every campaign to deliver measurable growth and ROI.",
  },
  {
    icon: <FaUsers className="text-accent text-2xl" />,
    title: "Dedicated Team",
    text: "Our experts focus on your brand like it’s their own.",
  },
  {
    icon: <FaChartPie className="text-accent text-2xl" />,
    title: "Transparent Reporting",
    text: "Get clear insights on performance with detailed analytics.",
  },
  {
    icon: <FaCogs className="text-accent text-2xl" />,
    title: "Flexible Packages",
    text: "Choose plans that scale as your business grows.",
  },
];

const About = () => {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-text mb-4">
            Why Businesses <span className="text-primary">Trust Prolanz</span>
          </h3>
          <p className="text-text/80 leading-relaxed mb-6">
            We combine <span className="font-semibold text-primary">strategy</span>,{" "}
            <span className="font-semibold text-primary">creative content</span>, and{" "}
            <span className="font-semibold text-primary">paid ads</span> to grow followers
            and drive sales for SMEs across Africa. Our approach blends data with
            creativity to help you turn your social media into a client magnet.
          </p>
          <button className="px-6 py-3 rounded-full font-medium text-white bg-primary hover:bg-accent transition-all duration-300">
            See Our Process
          </button>
        </motion.div>

        {/* Right Side - Feature Grid */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white border border-secondary rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-3">{feature.icon}</div>
              <h4 className="font-semibold text-text mb-1">{feature.title}</h4>
              <p className="text-text/70 text-sm leading-relaxed">{feature.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
