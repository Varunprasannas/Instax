import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Linkedin, Send, MessageSquareMore, Heart, Star, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ["Features", "Pricing", "Case Studies", "Reviews", "Updates"],
    Company: ["About", "Careers", "Press", "News", "Contact"],
    Resources: ["Blog", "Newsletter", "Help Center", "Tutorials", "API"],
    Legal: ["Privacy", "Terms", "Security", "Cookies", "Compliance"],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative overflow-hidden py-20">
      {/* Dramatic Multi-color Pink Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-100 to-pink-100" />
      
      {/* Glowing Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-24 " />
        <div className="absolute -top-20 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -left-10 w-80 h-80 bg-fuchsia-400/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute top-2/3 right-1/6 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6 bg-pink-500/20 rounded-full"
            animate={{
              x: [Math.random() * 100, Math.random() * window.innerWidth],
              y: [Math.random() * 100, Math.random() * window.innerHeight],
              scale: [0.5, 1, 0.5],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-8">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <motion.a 
              href="/" 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/70 via-fuchsia-500/70 to-purple-600/70 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                <div className="absolute -inset-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur" />
                <MessageSquareMore className="w-10 h-10 text-white relative" />
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">Insta</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-fuchsia-500 to-purple-500 text-transparent bg-clip-text">xbot</span>
              </div>
            </motion.a>
            <motion.p 
              className="mt-8 text-gray-800 max-w-md leading-relaxed backdrop-blur-sm bg-white/30 p-6 rounded-lg shadow-lg border border-pink-300/50"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Transform your Instagram business with automated messaging and
              intelligent customer engagement tools powered by cutting-edge AI technology.
            </motion.p>
            <div className="mt-8 flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="relative group"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-md opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-150 transition-all duration-300" />
                  <div className="relative flex items-center justify-center w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full border border-pink-200/50 shadow-md">
                    <social.icon className="h-5 w-5 text-pink-600 group-hover:text-fuchsia-700 transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="backdrop-blur-lg bg-gradient-to-br from-white/40 to-pink-100/40 p-6 rounded-2xl shadow-xl border border-pink-300/50"
            >
              <h3 className="text-sm font-bold text-pink-700 uppercase tracking-wider flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-pink-500" />
                {category}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link, idx) => (
                  <motion.li 
                    key={link}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx }}
                    whileHover={{ x: 5 }}
                  >
                    <a
                      href="#"
                      className="text-base text-gray-800 hover:text-pink-600 transition-colors relative group flex items-center"
                    >
                      <span className="absolute -left-4 w-0 opacity-0 group-hover:opacity-100 group-hover:w-3 h-px bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300" />
                      {link}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-fuchsia-400 group-hover:w-full transition-all duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 border-t border-pink-300/50 pt-12"
        >
          <div className="max-w-md mx-auto p-8 backdrop-blur-lg bg-gradient-to-r from-pink-100/70 to-purple-100/70 rounded-3xl shadow-2xl border border-pink-300/50">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-400 to-fuchsia-500 p-3 rounded-full shadow-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-pink-800 text-center mb-4">
              Join Our Newsletter
            </h3>
            <p className="mt-2 text-gray-700 text-center">
              Get the latest updates and exclusive offers directly in your inbox.
            </p>
            <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 border border-pink-200 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white/70 backdrop-blur-sm transition-all duration-300 focus:bg-white pr-12 shadow-inner"
                />
                <motion.button
                  type="submit"
                  className="absolute right-1 top-1 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="h-4 w-4" />
                </motion.button>
              </div>
              <motion.div 
                className="w-full mt-6"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
              </motion.div>
            </form>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 border-t border-pink-300/50 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-pink-800 text-sm">
              © {currentYear} InstaBot. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <ul className="flex space-x-8">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    whileHover={{ y: -2 }}
                  >
                    <a
                      href="#"
                      className="text-sm text-pink-700 hover:text-fuchsia-600 transition-colors font-medium"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Decorative Bottom Element */}
          <div className="mt-8 flex justify-center">
            <motion.div 
              className="flex items-center space-x-1 text-xs text-pink-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-3 h-3 text-pink-500" />
              <span>Designed with love for maximum engagement</span>
              <Star className="w-3 h-3 text-pink-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;