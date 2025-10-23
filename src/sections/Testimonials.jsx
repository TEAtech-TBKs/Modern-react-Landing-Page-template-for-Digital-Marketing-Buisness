import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Glow Cosmetics",
    avatar: "https://i.pravatar.cc/100?img=1",
    rating: 5,
    quote: "Prolanz boosted our conversions by 30% in just 60 days.",
    link: "https://linkedin.com/in/sarahjohnson",
  },
  {
    name: "David Miller",
    company: "TechNova",
    avatar: "https://i.pravatar.cc/100?img=2",
    rating: 5,
    quote: "Their social campaigns brought in consistent leads every week.",
    link: "https://linkedin.com/in/davidmiller",
  },
  {
    name: "Amaka Obi",
    company: "StyleHub",
    avatar: "https://i.pravatar.cc/100?img=3",
    rating: 5,
    quote: "Prolanz completely transformed our brand presence online.",
    link: "https://linkedin.com/in/amakaobi",
  },
  {
    name: "Carlos Diaz",
    company: "UrbanWear",
    avatar: "https://i.pravatar.cc/100?img=4",
    rating: 5,
    quote: "From engagement to sales — everything improved drastically.",
    link: "https://linkedin.com/in/carlosdiaz",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-secondary py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-text mb-4">
          What Our Clients Are Saying
        </h2>
        <p className="text-text/70 mb-12">
          Real voices from brands that grew with us.
        </p>

        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="min-w-[300px] bg-background shadow-md rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <h3 className="font-semibold text-text">{t.name}</h3>
              <p className="text-sm text-text/60 mb-2">{t.company}</p>
              <p className="text-yellow-500 mb-3">
                {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
              </p>
              <p className="text-text/80 italic mb-4">“{t.quote}”</p>
              <a
                href={t.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                View Profile →
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
