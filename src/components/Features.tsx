import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquareMore,
  ShoppingCart,
  MessageCircle,
  Users,
  ArrowRight,
  X
} from "lucide-react";
import { scrollToSection } from "../utils/navigation";
import ChatDemo from "./ChatDemo";

// Define a type for the feature object
interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  stats: string;
  color: string;
  promoContent: string;
}

interface UseCase {
  title: string;
  description: string;
  stats: string;
}

const features: Feature[] = [
  {
    icon: MessageSquareMore,
    title: "Smart Auto-Replies",
    description: "AI-powered responses that sound human and drive engagement",
    stats: "45% faster response time",
    color: "from-blue-500 to-indigo-500",
    promoContent: "Instaxbot's Smart Auto Replies detect user intent from incoming messages and respond in real-time with relevant, personalized replies. Powered by keyword triggers, AI understanding, and smart logic, this feature helps you simulate natural conversations—boosting engagement while saving time."
  },
  {
    icon: Users,
    title: "Human Agents",
    description: "Seamlessly switch from bot to human when needed.",
    stats: "92% order accuracy",
    color: "from-green-500 to-teal-500",
    promoContent: "Instaxbot's Human Agent feature, real people can step in to handle conversations that require personal attention. Whether it's a complex query, sensitive issue, or high-value lead, you can take over the chat instantly—ensuring a smooth, human touch whenever it's needed."
  },
  {
    icon: ShoppingCart,
    title: "Product Catalogue in Carousel Format",
    description: "Showcase your products beautifully—right inside Instagram DMs.",
    stats: "Handle 3x more customers",
    color: "from-purple-500 to-pink-500",
    promoContent: "Instaxbot lets you display your product catalog in an interactive carousel format, allowing users to swipe through multiple items with images, names, and prices directly in the chat. This visually engaging experience makes it easier for customers to browse, select, and even buy—without ever leaving the conversation."
  },
  {
    icon: MessageCircle,
    title: "Comment Automation",
    description: "Automatically turn comments into conversations.",
    stats: "Save 20 hours/week",
    color: "from-yellow-500 to-orange-500",
    promoContent: "Instaxbot's Comment Automation instantly replies to comments on your Instagram posts or reels via Direct Message. Whether it's a thank you note, a product link, a template message, or a follow-up question, you can set custom responses that boost engagement, drive traffic, and convert commenters into loyal customers."
  },
];

// Define an empty array with proper typing
const additionalFeatures: Array<{
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  useCase: string;
}> = [];

const useCases: UseCase[] = [
  {
    title: "Retail & E-commerce",
    description:
      "Streamline customer support and boost sales with automated responses",
    stats: "3x faster response time",
  },
  {
    title: "Service Providers",
    description:
      "Schedule appointments and maintain client relationships effortlessly",
    stats: "80% reduction in manual tasks",
  },
  {
    title: "Content Creators",
    description:
      "Engage with followers, manage collaborations, and automate responses",
    stats: "2x engagement rate",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
      damping: 10
    },
  }),
};

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const openFeaturePopup = (feature: Feature) => {
    setSelectedFeature(feature);
  };

  const closeFeaturePopup = () => {
    setSelectedFeature(null);
  };

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
          className="text-center"
        >
          <motion.div
            initial={{ rotate: -10, scale: 0.5 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
            className="inline-block p-2 bg-white rounded-2xl shadow-xl mb-6"
          >
            <span className="bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-xl text-white font-semibold">
              Features & Benefits
            </span>
          </motion.div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Everything You Need to{" "}
            <span className="gradient-text">Grow Your Business</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you manage Instagram messages
            efficiently and convert more customers.
          </p>
        </motion.div>

        {/* Modified grid - changed to 2x2 layout */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03, 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative bg-white/95 backdrop-blur-lg p-6 rounded-3xl 
              shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)]
              border border-gray-100/50 transition-all duration-500 overflow-hidden
              hover:bg-gradient-to-br hover:from-white/98 hover:to-white/90"
            >
              {/* Enhanced Gradient Background Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 
              transition-all duration-500 ease-out from-primary/40 to-secondary/40
              group-hover:scale-105 transform-gpu blur-[2px]"
              />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.6 }
                  }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-3.5
                  shadow-lg hover:shadow-2xl flex items-center justify-center
                  relative before:absolute before:inset-0 before:rounded-2xl
                  before:bg-gradient-to-br before:from-white/30 before:to-transparent/10`}
                >
                  <feature.icon className="w-9 h-9 text-white relative z-10" />
                </motion.div>
              </div>

              {/* Feature Content with Enhanced Typography */}
              <div className="mt-7 relative z-10 space-y-4">
                <motion.h3
                  whileHover={{ 
                    x: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="text-2xl font-bold bg-clip-text text-transparent 
                  bg-gradient-to-r from-gray-900 to-gray-700 group-hover:from-primary 
                  group-hover:to-secondary transition-all duration-300"
                >
                  {feature.title}
                </motion.h3>
                <div className="flex items-center space-x-3">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 
                    rounded-full text-sm font-semibold text-primary"
                  >
                    {feature.stats}
                  </motion.span>
                </div>
                <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed">
                  {feature.description}
                </p>

                {/* Enhanced Learn More Link */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileHover={{ 
                    x: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="flex items-center text-primary font-medium 
                  group-hover:text-secondary transition-colors duration-500 pt-2 
                  relative overflow-hidden hover:pl-2 cursor-pointer"
                  onClick={() => openFeaturePopup(feature)}
                >
                  <span className="relative">
                    Learn more
                    <span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary 
                    group-hover:w-full transition-all duration-300"
                    />
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                </motion.div>
              </div>

              {/* Animated Border Gradient */}
              <div
                className="absolute inset-0 p-[1px] rounded-3xl bg-gradient-to-br opacity-0 
              group-hover:opacity-100 transition-opacity duration-300 from-primary/20 via-secondary/20 to-primary/20"
              >
                <div className="absolute inset-0 rounded-3xl bg-white/80 backdrop-blur-lg" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4
          }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => scrollToSection("pricing")}
            className="btn-primary group"
          >
            <span>View Pricing</span>
          </button>
        </motion.div>

        {/* Chat Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
          className="mt-48"
        >
          <motion.h3 
            whileInView={{
              scale: [1, 1.05, 1],
              transition: { duration: 1, ease: "easeInOut" }
            }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 text-center"
          >
            Experience the Power of AI-Driven Conversations
          </motion.h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-center">
            See how our intelligent chatbot handles real customer interactions
          </p>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Chat Demo Section - Left Side */}
            <motion.div 
              whileInView={{
                rotate: [0, 2, -2, 0],
                transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
              }}
              className="max-w-[420px] mx-auto lg:ml-0"
            >
              <ChatDemo />
            </motion.div>

            {/* Description Section - Right Side */}
            <div className="space-y-8">
              <motion.div
                initial={{ x: 50 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Transform Your Instagram Business
                </h4>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Our AI-powered chatbot understands context, maintains natural conversations, and helps you convert more customers. Experience seamless automation that feels personal and engaging.
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    icon: MessageSquareMore,
                    title: "Natural Conversations",
                    text: "AI-driven responses that sound human and maintain context"
                  },
                  {
                    icon: ShoppingCart,
                    title: "Seamless Order Processing",
                    text: "Handle product inquiries and orders automatically"
                  },
                  {
                    icon: Users,
                    title: "24/7 Customer Support",
                    text: "Never miss a customer inquiry, even outside business hours"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">{item.title}</h5>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary group inline-flex items-center space-x-2"
                onClick={() => scrollToSection("pricing")}
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Use Cases Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32"
        >
          <motion.h3 
            whileInView={{
              scale: [1, 1.03, 1],
              transition: { duration: 1 }
            }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 text-center"
          >
            Perfect for Every Business
          </motion.h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-center">
            See how different businesses are using our platform to grow
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 200 }
                }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl 
                transition-all duration-300 border border-gray-100 hover:border-primary/20"
              >
                <div className="h-full flex flex-col">
                  <h4
                    className="text-2xl font-bold bg-clip-text text-transparent 
                    bg-gradient-to-r from-primary to-secondary"
                  >
                    {useCase.title}
                  </h4>
                  <p className="mt-4 text-gray-600 flex-grow">
                    {useCase.description}
                  </p>
                  <motion.div
                    className="mt-6 inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span
                      className="px-4 py-2 bg-gradient-to-r from-primary/10 
                      to-secondary/10 rounded-full text-primary font-semibold"
                    >
                      {useCase.stats}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 200 }
              }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl 
              transition-all duration-300 relative overflow-hidden"
            >
              <div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color}
                transform group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h4
                className="mt-6 text-2xl font-bold text-gray-900 group-hover:text-primary 
                transition-colors"
              >
                {feature.title}
              </h4>

              <p className="mt-4 text-gray-600">{feature.description}</p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 p-4 bg-gray-50 rounded-xl transform group-hover:-translate-y-1 
                transition-transform duration-300"
              >
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-primary">Use Case: </span>
                  {feature.useCase}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feature Popup */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeFeaturePopup}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1,
                opacity: 1,
                transition: { 
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }
              }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div 
                className="flex justify-between items-start mb-6"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedFeature.color} flex items-center justify-center`}
                  >
                    <selectedFeature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold"
                  >
                    {selectedFeature.title}
                  </motion.h3>
                </div>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  onClick={closeFeaturePopup}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </motion.button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <p className="text-gray-700 leading-relaxed">
                  {selectedFeature.promoContent}
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-xl"
                >
                  <p className="text-sm font-medium text-gray-800">
                    <span className="text-primary font-bold">HIGHLIGHT:</span> {selectedFeature.stats}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Features;