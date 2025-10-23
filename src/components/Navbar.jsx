import React, { useState } from "react";
import Logo from '../assets/prLogo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="logoBox flex">
          <img className="w-10 h-7 p-1" src={Logo} alt="ProlanzDigitals- don't miss out on amazing deals" />
          {/* Logo */}
          <h1 className="text-2xl font-bold text-red-600 tracking-tight">
            Prolanz<span className="text-gray-900">Digitals</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-red-600 cursor-pointer">Home</li>
          <li className="hover:text-red-600 cursor-pointer">About</li>
          <li className="hover:text-red-600 cursor-pointer">Services</li>
          <li className="hover:text-red-600 cursor-pointer">Pricing</li>
          <li className="hover:text-red-600 cursor-pointer"><a href="/Modern-react-Landing-Page-template-for-Digital-Marketing-Buisness/contact">Contact</a></li>
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-gray-900 transition-all">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
            <li className="hover:text-red-600 cursor-pointer">Home</li>
            <li className="hover:text-red-600 cursor-pointer">About</li>
            <li className="hover:text-red-600 cursor-pointer">Services</li>
            <li className="hover:text-red-600 cursor-pointer">Pricing</li>
            <li className="hover:text-red-600 cursor-pointer">Contact</li>
            <button className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700 transition-all">
              Get Started
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
