import React from "react";
import { Link } from "react-router-dom";
import {
  Headset, Cloud, Book, Users, MapPin, Handshake, HandCoins, Search
} from "lucide-react";

const services = [
  { id: "customer-support", title: "Customer Support Service", icon: Headset, tagline: "Your Brand's Voice. Our Expertise.", path: "/services/customer-support" },
  { id: "cloud-migration", title: "Cloud Migration", icon: Cloud, tagline: "Your Future, in the Cloud.", path: "/services/cloud-migration" },
  { id: "accounting-bookkeeping", title: "Accounting & Bookkeeping", icon: Book, tagline: "Precision Finance. Strategic Growth.", path: "/services/accounting-bookkeeping" },
  { id: "payroll", title: "Payroll Services", icon: HandCoins, tagline: "Efficient Payroll. Confident Compliance.", path: "/services/payroll" },
  { id: "geospatial", title: "Geospatial Solutions", icon: MapPin, tagline: "Location Intelligence. Strategic Insights.", path: "/services/geospatial" },
  { id: "hr", title: "HR Services", icon: Handshake, tagline: "People First. Business Thrives.", path: "/services/hr" },
  { id: "consulting", title: "Consulting", icon: Search, tagline: "Navigate Change. Drive Growth.", path: "/services/consulting" },
  { id: "recruitment", title: "Recruitment Process Outsourcing", icon: Users, tagline: "Find the Best Talent. Faster.", path: "/services/recruitment" },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-gray-900">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                to={service.path}
                key={service.id}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center pt-10 pb-10
                           transition-transform duration-300 transform hover:scale-105 hover:bg-gray-100 hover:shadow-xl"
              >
                <Icon size={28} className="text-gray-600 mb-4" />
                <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                <p className="text-gray-600 text-sm">{service.tagline}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
