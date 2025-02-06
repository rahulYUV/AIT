import { useState, useEffect } from "react";
import { 
  MapPin, Moon, Sun, Zap, Leaf, Award, ChevronDown, Boxes 
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Landing() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const features = [
    {
      title: "Cost-Effective Custom Drones",
      description: "Tailored drone solutions that fit your budget without compromising on quality.",
      icon: <Zap className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Reducing Carbon Footprint",
      description: "Eco-friendly delivery solutions that help protect our environment.",
      icon: <Leaf className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Award-Winning Innovation",
      description: "Showcasing groundbreaking technology at Innerve 9.",
      icon: <Award className="w-8 h-8 text-green-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-gray-800 relative transition-all duration-500">
      
      {/* 🌙 Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-6 right-6 p-3 rounded-full bg-green-500/20 backdrop-blur-sm hover:bg-green-500/30 transition-all duration-300"
      >
        {darkMode ? <Sun className="text-yellow-400 w-6 h-6" /> : <Moon className="text-green-400 w-6 h-6" />}
      </button>

      {/* Innerve 9 Logo at Top Left */}
      <motion.img
        src="https://aitoss.club/static/media/logo.1921dff9.svg"
        alt="Innerve 9 Hackathon"
        className="h-16 absolute top-6 left-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side Content */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <h1 className="text-6xl font-bold text-white leading-tight">
              Revolutionizing Aerial Logistics with{" "}
              <span className="text-green-500">SwiftAir</span>{" "}
              <span className="inline-block animate-bounce">🚀</span>
            </h1>

            <p className="text-xl text-gray-300">
              Experience next-gen drone monitoring with real-time tracking, AI-powered navigation, and live data insights.
            </p>

            <Link
              to="/dashboard"
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Dashboard
              <MapPin className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          {/* Right Side - Rotating Icon Animation */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.5 }}
            className="w-full h-[500px] relative flex items-center justify-center"
          >
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }} 
              className="w-64 h-64 text-green-500"
            >
              <Boxes className="w-full h-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Our Highlights</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800/50 backdrop-blur-lg border-green-500/20 rounded-lg text-center transition-all duration-300 hover:shadow-xl">
              <div className="p-4 bg-gray-700/50 rounded-lg inline-block mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Join Innerve 9 Section */}
      <div className="mt-32 text-center pb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Join Innerve 9</h2>
        <p className="text-xl text-gray-300 mb-8">Be part of the biggest innovation hackathon and shape the future!</p>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          onClick={() => window.open("https://www.innerve.tech/", "_blank")}
          className="px-8 py-4 text-lg font-medium rounded-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 transform shadow-lg"
        >
          Visit Innerve 9
        </motion.button>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 py-8">
        <p className="text-center text-gray-400 text-lg">
          Made with <span className="inline-block text-red-500 animate-pulse">❤️</span> by Team Straw Hat
        </p>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Landing;
