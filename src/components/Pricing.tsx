import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { handleGetStarted } from "../utils/navigation";

const plans = {
  monthly: {
    professional: 1499,
  },
};

const features = {
  professional: [
    { name: "Advanced Auto-Replies", description: "AI-powered responses" },
    { name: "Comment Automation", description: "Auto-reply to post comments via DM" },
    { name: "Product Catalogue in Carousel Format", description: "Showcase products with swipeable carousels" },
    { name: "Unlimited Contacts & DM, Comments Automation", description: "Engage without limits—no cap on contacts or replies" },
  ],
};

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-purple-50 to-white px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Simple Pricing
          </span>
          <h2 className="mt-4 text-4xl font-bold">
            Choose Your <span className="gradient-text">Growth Plan</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <div className="flex justify-center rounded-xl p-6 w-full max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="relative p-1 bg-gradient-to-r from-primary to-secondary rounded-2xl w-full max-w-xl"
          >
            <div className="bg-white rounded-xl p-6 relative">
              {/* Sparkle */}
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-primary" />
                </motion.div>
              </div>

              <h3 className="text-xl font-bold text-gray-900">Professional</h3>
              <p className="mt-2 text-gray-500">Perfect for growing businesses</p>

              {/* Price */}
              <div className="mt-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">₹{plans.monthly.professional}</span>
                  <span className="ml-2 text-gray-500">/month</span>
                </div>
              </div>

              {/* Features - Updated Layout */}
              <div className="mt-8">
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">INCLUDED FEATURES</h4>
                  <ul className="space-y-4">
                    {features.professional.map((feature, index) => (
                      <motion.li
                        key={feature.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3 group"
                      >
                        <div className="bg-white rounded-full p-1 shadow-sm mt-1 group-hover:bg-primary/10 transition-colors duration-200">
                          <Check className="w-4 h-4 text-primary shrink-0" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{feature.name}</p>
                          <p className="text-sm text-gray-500">{feature.description}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <motion.button
                onClick={handleGetStarted}
                className="mt-8 w-full btn-primary group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                  animate={{ scale: [1, 1.5], opacity: [0, 0.2, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Guarantee */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center text-gray-600"
        >
          🎉 14-day money-back guarantee • No credit card required • Cancel anytime
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;