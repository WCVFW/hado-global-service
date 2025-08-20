// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const quickLinks: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// These IDs must match <div id="..."> in Services.tsx
const serviceLinks: NavItem[] = [
  { name: "Cloud Migration", href: "/services/cloud-migration" },
  { name: "Customer Support", href: "/services/customer-support" },
  { name: "Accounting & Bookkeeping", href: "/services/accounting-bookkeeping" },
  { name: "Payroll", href: "/services/payroll" },
];

const legalLinks: NavItem[] = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
];

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand & Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="assets/hado_global_services_logo.jpg"
                alt="Hado Global Service Logo"
                className="w-14 h-14 object-contain"
              />
              <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide animate-gradient">
                Hado Global Service
              </span>
            </div>
            <p className="text-gray-600 max-w-md mb-8 leading-relaxed">
              We provide consultancy and software development services that blend innovation, cutting-edge technology, and industry expertise to deliver tailored solutions and measurable business growth for our clients.
              
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Github, href: "#", label: "GitHub" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 bg-gray-100 rounded-full hover:bg-blue-50 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Services
            </h3>
            <ul className="space-y-4">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Get in Touch
            </h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>info@hado.co.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+91 12345 67890</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-10 h-10 text-blue-600 mt-1" />
                <span>
                  3/32, 1st Main Road, Ayyappa Nagar, Virugambakkam,
                  <br />
                  Chennai-600092, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Hado Global Service. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legalLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-500 hover:text-blue-600 text-sm transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
