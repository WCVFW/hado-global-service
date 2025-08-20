import { motion } from "framer-motion";
import { Home, Search, ArrowLeft, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const helpfulLinks = [
    { name: "Home", href: "/", description: "Go back to our homepage" },
    { name: "About", href: "/about", description: "Learn more about us" },
    { name: "Services", href: "/services", description: "Explore our offerings" },
    // { name: "Portfolio", href: "/portfolio", description: "View our work" },
    { name: "Contact", href: "/contact", description: "Get in touch" }
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-8xl md:text-9xl font-bold mb-4 text-gray-800"
          >
            404
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Sorry, we couldn't find the page you're looking for. 
            The page might have been moved, deleted, or doesn't exist.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          {/* Go Home Button */}
          <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link to="/">
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 text-lg">
                <Home className="mr-2 w-5 h-5" />
                Go Home
              </Button>
            </Link>
          </motion.div>

          {/* Go Back Button */}
          <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={goBack}
              variant="outline"
              className="px-8 py-3 text-lg border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Go Back
            </Button>
          </motion.div>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-gray-50 rounded-2xl p-8 shadow-lg max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-6 h-6 text-gray-800 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">
              Maybe you're looking for one of these?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {helpfulLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <Link
                  to={link.href}
                  className="block p-4 rounded-lg border border-gray-200 hover:border-gray-400 hover:bg-gray-100 transition-all duration-200 group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-gray-800 mb-1">
                    {link.name}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {link.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-700 mb-4">
            Still can't find what you're looking for?
          </p>
          <Link to="/contact">
            <Button variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-100">
              <Search className="mr-2 w-4 h-4" />
              Contact Support
            </Button>
          </Link>
        </motion.div>

        {/* Floating illustration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block text-6xl opacity-20"
          >
            🔍
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
