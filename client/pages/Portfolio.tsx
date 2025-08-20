import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, ArrowRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  const projects = [
    {
      title: "FinTech Dashboard",
      category: "Web Application",
      description: "Comprehensive financial analytics platform with real-time data visualization and portfolio management.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      client: "Financial Corp",
      results: "40% increase in user engagement"
    },
    {
      title: "E-Commerce Platform",
      category: "E-commerce",
      description: "Full-featured online marketplace with advanced search, payment processing, and inventory management.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      client: "Retail Solutions",
      results: "150% boost in online sales"
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile App",
      description: "Patient management system with appointment scheduling, medical records, and telemedicine features.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Firebase", "Redux", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      client: "HealthTech Inc",
      results: "60% reduction in admin time"
    },
    {
      title: "Corporate Website",
      category: "Website",
      description: "Professional corporate website with content management system and SEO optimization.",
      image: "/placeholder.svg",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      client: "Business Corp",
      results: "200% increase in leads"
    },
    {
      title: "SaaS Analytics Tool",
      category: "SaaS Platform",
      description: "Business intelligence platform with custom dashboards and automated reporting capabilities.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "D3.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      client: "Analytics Pro",
      results: "85% faster reporting"
    },
    {
      title: "Education Platform",
      category: "Web Application",
      description: "Online learning management system with video streaming, progress tracking, and certification.",
      image: "/placeholder.svg",
      technologies: ["Angular", "Express", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      client: "EduTech Solutions",
      results: "300% student enrollment growth"
    }
  ];

  const categories = ["All", "Web Application", "E-commerce", "Mobile App", "Website", "SaaS Platform"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const testimonials = [
    {
      quote: "ProSolutions delivered exactly what we needed. The team was professional, responsive, and delivered on time.",
      author: "John Smith",
      role: "CTO, Financial Corp",
      rating: 5
    },
    {
      quote: "Outstanding quality and attention to detail. Our new platform exceeded all expectations.",
      author: "Sarah Johnson",
      role: "CEO, Retail Solutions",
      rating: 5
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our successful projects and see how we've helped businesses 
              achieve their goals through innovative digital solutions.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "250+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our most impactful solutions that delivered exceptional results for our clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="professional-card overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex space-x-4">
                        <Button size="sm" className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </Button>
                        <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                    <Badge className="absolute top-4 right-4 bg-blue-600 text-white">
                      Featured
                    </Badge>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                        {project.category}
                      </Badge>
                      <div className="text-sm text-gray-500">
                        {project.client}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                      <div className="text-green-700 font-semibold text-sm">
                        Results: {project.results}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="border-gray-300 text-gray-600">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              All Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our complete portfolio of successful projects across various industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="professional-card h-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.featured && (
                      <Badge className="absolute top-3 right-3 bg-blue-600 text-white">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                        {project.category}
                      </Badge>
                      <div className="text-xs text-gray-500">
                        {project.client}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="bg-green-50 border border-green-200 rounded p-2 mb-4">
                      <div className="text-green-700 text-xs font-medium">
                        {project.results}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="border-gray-300 text-gray-600 text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="border-gray-300 text-gray-600 text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                        <ExternalLink className="w-3 h-3 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                        <Github className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our clients have to say about their experience working with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="professional-card h-full">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.author}
                        </div>
                        <div className="text-gray-600">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Let's create something amazing together. Contact us today to discuss your project requirements.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
