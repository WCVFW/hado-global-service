"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Award, Target, Zap, ChevronRight } from "lucide-react";

// Define the types for our component props and data.
type Feature = { icon: JSX.Element; title: string; description: string };
type Stat = { number: string; label: string; description: string };

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

// A reusable Button component with different variants and sizes.
// This component is inherently responsive due to the use of Tailwind classes.
function Button({ variant = "solid", size = "md", className = "", children, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-3 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white";

  const variants: Record<string, string> = {
    solid: "bg-gray-900 text-white hover:bg-black focus:ring-gray-600",
    outline: "border border-gray-400 text-gray-800 hover:bg-gray-100 focus:ring-gray-300",
    ghost: "bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-gray-300",
  };

  const sizes: Record<string, string> = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-10 py-4 text-lg rounded-xl",
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}

// Main LandingPage component.
export default function LandingPage(): JSX.Element {
  const HEADER_HEIGHT = 80; // px, fixed header height

  const features: Feature[] = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Strategic Vision",
      description:
        "We help you define a clear, strategic digital roadmap to navigate market complexities and achieve your long-term business objectives.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Impactful Solutions",
      description:
        "Our custom software solutions are engineered to deliver measurable results, directly addressing your core challenges and driving growth.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Focused Execution",
      description:
        "With an agile and dedicated team, we execute projects efficiently, ensuring timely delivery and continuous improvement for your success.",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Sustainable Growth",
      description:
        "We build solutions that are not only effective today but also scalable for your future growth and evolving business needs.",
    },
  ];

  const stats: Stat[] = [
    { number: "7+", label: "Years of Experience", description: "In the digital landscape" },
    { number: "100%", label: "Satisfaction Rate", description: "Based on client feedback" },
    { number: "150+", label: "Successful Projects", description: "Delivered globally" },
    { number: "4.9/5", label: "Average Rating", description: "From our Clients" },
  ];

  // Animation variants for Framer Motion.
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const item = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="antialiased font-sans bg-white text-gray-900">
      {/* Hero Section */}
      <section
        aria-label="Hero"
        className="relative overflow-hidden bg-white"
        style={{
          paddingTop: HEADER_HEIGHT + 80, // 80px extra space below header
          paddingBottom: 100, // bottom breathing room
        }}
      >
        <div className="relative z-10 mx-auto max-w-7xl pt-12 px-6 pb-24 text-center md:pb-32">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl"
          >
            <h1 className="text-4xl font-[Nunito] font-extrabold leading-[1.1] tracking-tight text-gray-800 sm:text-5xl md:text-6xl">
              Helping People and Businesses Grow Together
            </h1>
            <p className="mx-auto mt-6 max-w-xl font-light text-xl text-gray-900 sm:text-2xl">
              From strategy to implementation, we build for impact.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <a href="/contact">
                  <Button variant="outline" size="md" aria-label="Get started">
                    <span>Start Your Project</span>
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </a>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <a href="/services">
                  <Button variant="outline" size="md" aria-label="Discover services">
                    <span>Explore Our Services</span>
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section with 4 cards in one row */}
      <section aria-label="Why Choose Our Service" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-4xl">Why Choose Our Service</h2>
            <p className="mt-4 text-gray-600">
              Our proven process is designed to deliver innovation, efficiency, and a tangible return on your investment.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 px-6 sm:grid-cols-2 md:grid-cols-4 lg:px-12 mx-auto max-w-7xl">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              variants={item}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 text-center transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-700 shadow-sm">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-3 text-gray-600">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section aria-label="Statistics" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Title */}
            <div className="text-center mb-14">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Our Impact
              </h2>
             
              <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                A snapshot of our journey, achievements, and the milestones we’ve reached together.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="text-3xl font-extrabold text-gray-900 md:text-4xl">
                    {s.number}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-gray-700 md:text-base">
                    {s.label}
                  </div>
                  <div className="mt-1 text-sm text-gray-500">{s.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>



      {/* Final CTA Section */}
      <section aria-label="Call to action" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Let's build something great, together.
          </h2>
          <p className="mt-4 text-gray-600">
            Ready to take the next step? Contact us to schedule a free consultation and see how we can accelerate your
            digital journey.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
