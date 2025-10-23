// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-text text-white py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10 px-6">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-primary">Prolanz<span className="text-white">Digitals</span></h2>
          <p className="text-gray-300 text-sm mb-4">
            Helping brands turn social attention into measurable growth.
          </p>
          <p className="text-sm text-gray-400 italic">
            Looking for white-glove service? <a href="/contact" className="text-accent hover:underline">Contact sales</a>
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3 text-primary">Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Social Media</li>
            <li>Ads Management</li>
            <li>Web Design</li>
            <li>SEO Optimization</li>
            <li>Email Marketing</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3 text-primary">Company</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>About</li>
            <li>Case Studies</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 text-primary">Contact</h4>
          <p className="text-gray-300 text-sm">email@prolanzdigitals.com</p>
          <p className="text-gray-300 text-sm mb-4">+234 810 000 0000</p>
          <div className="flex gap-4 text-white text-lg">
            <FaInstagram className="hover:text-accent cursor-pointer" />
            <FaFacebookF className="hover:text-accent cursor-pointer" />
            <FaLinkedinIn className="hover:text-accent cursor-pointer" />
            <FaXTwitter className="hover:text-accent cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm border-t border-gray-700 mt-10 pt-6">
        © {new Date().getFullYear()} Prolanz Digitals • Privacy • Terms
      </div>
    </footer>
  );
};

export default Footer;
