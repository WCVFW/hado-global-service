"use client";

import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white border-white sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/assets/hado_global_services_logo.jpg"
              alt="Hado Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide animate-gradient">
              Hado Global Services
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 font-medium text-black
                  before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px]
                  before:w-0 before:bg-black before:transition-all before:duration-300
                  hover:before:w-full
                  ${isActive(item.href) ? "before:w-full font-semibold" : ""}
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link to="/services">
              <Button className="bg-transparent hover:bg-gray-100 text-black shadow-none border border-gray-300">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-100"
          >
            <nav className="flex flex-col space-y-3 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`relative px-4 py-2 font-medium text-black
                    before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px]
                    before:w-0 before:bg-black before:transition-all before:duration-300
                    hover:before:w-full
                    ${isActive(item.href) ? "before:w-full font-semibold" : ""}
                  `}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/services" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-transparent hover:bg-gray-100 text-black shadow-none border border-gray-300 px-10 py-4 font-semibold">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
