import React from "react";
import CTAButton from "../components/CTAButton";
import heroImage from "../assets/heroImage.jpg";

const Hero = () => {
  return (
    <section
      className="relative bg bg-secondary  overflow-hidden"
      role="region"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Text */}
        <div className="space-y-6">
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 hero__headline"
          >
            Turn Your Social Media Into a Client Magnet <span className="material-symbols-outlined text-red-600 text-5xl align-top">
monitoring
</span>
          </h1>
          <p className="text-lg text-gray-600 hero__subtext">
            Grow followers, boost engagement, and convert clicks into customers with our proven growth strategy.
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mt-6">
            <CTAButton
              variant="primary"
              text="Get My Growth Plan"
              dataAction="openLeadForm"
            />
            <CTAButton
              variant="alt"
              text="Book Free Strategy Call"
            />
          </div>

          <p className="text-sm text-gray-500 mt-4 hero__trustline">
            Free audit included • 14-day money-back guarantee
          </p>
        </div>

        {/* Right Column: Hero Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Social media growth dashboard mockup"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
