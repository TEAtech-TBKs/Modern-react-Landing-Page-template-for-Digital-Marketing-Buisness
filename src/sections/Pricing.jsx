// src/sections/Pricing.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import CTAButton from "../components/CTAButton";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingData = [
    {
      title: "Starter",
      price: "₦50,000",
      desc: "For solopreneurs & microbusinesses",
      features: [
        "8 posts per month",
        "Basic ad spend",
        "Monthly performance report",
      ],
      cta: "Choose Starter",
      style: "outline",
    },
    {
      title: "Growth",
      price: "₦120,000",
      desc: "For growing SMEs",
      features: [
        "20 posts per month",
        "Full ads management",
        "Weekly performance reports",
      ],
      cta: "Choose Growth",
      style: "primary",
      popular: true,
    },
    {
      title: "Scale",
      price: "Custom pricing",
      desc: "For brands & enterprises",
      features: [
        "Dedicated account manager",
        "Full funnel ad campaigns",
        "Comprehensive analytics",
      ],
      cta: "Request Quote",
      style: "outline",
    },
  ];

  return (
    <section className="py-20 bg-background text-text text-center" id="pricing">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-4"
      >
        Pricing Plans
      </motion.h2>
      <p className="text-gray-500 mb-10">
        No long contracts — cancel any time.
      </p>

      {/* Billing Toggle */}
      <div className="flex justify-center items-center gap-3 mb-12">
        <span
          className={`text-sm font-medium ${
            billingCycle === "monthly" ? "text-primary" : "text-gray-400"
          }`}
        >
          Monthly
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={() =>
              setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
            }
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
        </label>
        <span
          className={`text-sm font-medium ${
            billingCycle === "yearly" ? "text-primary" : "text-gray-400"
          }`}
        >
          Yearly <span className="text-xs text-accent">(save 10%)</span>
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 max-w-6xl mx-auto">
        {pricingData.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className={`relative border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all ${
              plan.popular
                ? "border-primary bg-secondary/40 scale-105"
                : "border-gray-200 bg-white"
            }`}
          >
            {plan.popular && (
              <span className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <h3 className="text-2xl font-bold text-text mb-2">{plan.title}</h3>
            <p className="text-gray-500 mb-4">{plan.desc}</p>

            <p className="text-3xl font-extrabold text-primary mb-6">
              {plan.price}
              {plan.price !== "Custom pricing" && (
                <span className="text-base text-gray-500 font-normal">
                  {" "}
                  / {billingCycle === "monthly" ? "mo" : "yr"}
                </span>
              )}
            </p>

            <ul className="text-gray-600 space-y-2 mb-8">
              {plan.features.map((feat, i) => (
                <li key={i}>✔ {feat}</li>
              ))}
            </ul>

            <div>
              {plan.style === "primary" ? (
                <CTAButton text={plan.cta} />
              ) : (
                <CTAButton text={plan.cta} outline />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
