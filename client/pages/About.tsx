
"use client";

import { motion } from "framer-motion";
import { Users, Target, Award, Briefcase, Calendar, Globe } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
          >
            Hado Global Services LLC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Since 2018, Hado Global Services LLC has been dedicated to connecting
            businesses with top-tier IT and software professionals for a range
            of contract and permanent roles across the United States.
          </motion.p>
        </div>

        {/* Mission & What We Do */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-10 lg:gap-16 mb-16 md:mb-24"
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-4 mb-4">
              <Award className="w-10 h-10 text-indigo-600 bg-indigo-50 rounded-full p-2" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We specialize in serving clients across diverse industries,
              including financial services, ERP, IT development, and
              pharmaceuticals. Our client base is broad, encompassing
              Fortune 500 companies, public sector organizations, and
              cutting-edge startups.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-4 mb-4">
              <Target className="w-10 h-10 text-indigo-600 bg-indigo-50 rounded-full p-2" />
              <h2 className="text-2xl font-bold text-gray-900">What We Do</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We offer flexible and tailored delivery models to meet unique
              business needs. Whether it's staff augmentation on a per-person
              or team basis, project-based solutions, or blended engagement
              models, we ensure every solution aligns perfectly with our
              clients' goals.
            </p>
          </motion.div>
        </motion.div>


        {/* Core Values */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
          <p className="text-gray-600 mt-2">
            The principles that guide our work and partnerships.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-16 md:mb-24"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gray-50 rounded-xl p-8 text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="mb-4 flex justify-center">
              <Users className="w-12 h-12 text-indigo-600" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Expert Talent</h3>
            <p className="text-gray-600 leading-relaxed">
              We provide access to highly skilled professionals who are
              rigorously screened and tested to ensure exceptional quality and
              performance for every role.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-50 rounded-xl p-8 text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="mb-4 flex justify-center">
              <Briefcase className="w-12 h-12 text-indigo-600" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Precision Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              Our expertise spans all facets of IT—from development and
              consulting to delivery and ongoing maintenance—to provide a
              complete and precise solution.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-50 rounded-xl p-8 text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="mb-4 flex justify-center">
              <Globe className="w-12 h-12 text-indigo-600" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Client Success</h3>
            <p className="text-gray-600 leading-relaxed">
              Our ultimate goal is to exceed expectations and empower our
              clients to achieve their business objectives through reliable and
              strategic partnerships.
            </p>
          </motion.div>
        </motion.div>

        {/* Key Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">

              {/* Founded */}
              <div className="flex flex-col items-center justify-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
                <Calendar className="w-8 h-8 text-indigo-600" />
                <p className="text-sm font-medium text-gray-500">Founded</p>
                <p className="text-xl font-semibold text-gray-900">2018</p>
              </div>

              {/* Specialties */}
              <div className="flex flex-col items-center justify-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
                <Briefcase className="w-8 h-8 text-indigo-600" />
                <p className="text-sm font-medium text-gray-500">Specialties</p>
                <p className="text-xl font-semibold text-gray-900">
                  IT Staffing & Consulting
                </p>
              </div>

              {/* Industries */}
              <div className="flex flex-col items-center justify-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
                <Globe className="w-8 h-8 text-indigo-600" />
                <p className="text-sm font-medium text-gray-500">Industries</p>
                <p className="text-xl font-semibold text-gray-900">
                  Finance, IT & more
                </p>
              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}