import { motion } from "framer-motion";
import {
  ArrowRight,
  Instagram,
  Star,
  Play
} from "lucide-react";
import { handleGetStarted,} from "../utils/navigation";
import instaxbot from "@/assets/instaxbot.png"; // correct alias

const Hero = () => {
  const heroImages = {
    dashboard: instaxbot,
    mockup: instaxbot,
  };

  const renderHeroVisual = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative"
    >
      <div className="relative h-[500px] w-[500px] overflow-hidden transition-all duration-300 hover:scale-[1.02]">
  <img
    src={heroImages.dashboard}
    alt="instaxbot"
    className="object-contain w-full h-full"  // Changed from object-cover
    onError={(e) => {
      e.currentTarget.src = heroImages.mockup;
      e.currentTarget.classList.add("bg-gray-100");
    }}
  />
</div>
    </motion.div>
  );

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-60px)] flex items-center justify-center overflow-hidden bg-gradient-to-b from-indigo-50 via-purple-100 to-pink-200 mt-4"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full pl-2 pr-4 py-2 shadow-xl mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Star className="h-4 w-4 text-white" />
              </motion.span>
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI-Powered Instagram Growth
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Boost Your{" "}
              <motion.span
                className="inline-flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Instagram className="inline-block w-14 h-14 text-pink-500 mr-2" />
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Sales
                </span>
              </motion.span>{" "}
              with{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Smart Automation
              </span>
            </motion.h1>

            <motion.p
              className="mt-8 text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your Instagram business with intelligent automation.
              Handle orders, engage customers, and boost sales - all on autopilot.
              Join <span className="font-semibold text-primary">10,000+</span>{" "}
              successful businesses.
            </motion.p>

            <motion.div
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={handleGetStarted}
                className="group relative overflow-hidden px-8 py-5 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                className="btn-secondary flex items-center justify-center space-x-2 group py-5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>View Demo</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {renderHeroVisual()}
        </div>
      </div>
    </section>
  );
};

export default Hero;
