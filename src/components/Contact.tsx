import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Send,
  CheckCircle,
  AlertCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const inputClasses =
    "peer mt-1 block w-full rounded-lg border-2 border-gray-300 bg-transparent px-4 py-3 placeholder-transparent focus:border-primary focus:ring-0";
  const labelClasses =
    "absolute left-4 -top-3 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary";

  return (
    <section id="contact" ref={sectionRef} className="bg-gradient-to-b from-white to-purple-50 py-24 overflow-x-clip">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <div className="text-blue-600 font-semibold">Contact Us</div>
            <h2 className="text-3xl font-bold mt-5">Get in Touch with Us</h2>
            <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
              Have questions, feedback, or need assistance? Feel free to reach out to us. Our team is here to help you
              with anything related to our services.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row mt-20"
        >
          {/* Contact Info */}
          <div className="md:w-1/2 bg-gray-100 p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Contact Information</h3>
            <p className="text-gray-600 mt-4">Feel free to contact us through email, phone, or visit our location.</p>

            <div className="mt-6 space-y-6 text-gray-700">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-primary" />
                <span>9, Vijaya Nagar, Reddypalayam Road, Thanjavur-613009</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1 text-primary" />
                <a href="tel:+8524089733" className="hover:underline">+91 85240 89733</a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1 text-primary" />
                <a href="mailto:contact@instaxbot.com" className="hover:underline">admin@techvaseegrah.com</a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8 md:mt-10">
              <p className="text-gray-700 font-medium">Connect with us:</p>
              <div className="flex space-x-6 mt-4 text-primary">
                <a href="https://www.linkedin.com/company/tech-vaseegrah/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
                <a href="https://www.instagram.com/techvaseegrah/" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
                <a href="https://wa.me/+918524089733" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={24} /></a>
                <a href="https://www.youtube.com/channel/UCdpaYm53cdH0SODoBXAKRmQ" target="_blank" rel="noopener noreferrer"><FaYoutube size={24} /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className={inputClasses}
                  required
                />
                <label htmlFor="name" className={labelClasses}>Name</label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className={inputClasses}
                  required
                />
                <label htmlFor="email" className={labelClasses}>Email</label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className={inputClasses}
                  required
                />
                <label htmlFor="subject" className={labelClasses}>Subject</label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  placeholder="Message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className={`${inputClasses} resize-none`}
                  required
                />
                <label htmlFor="message" className={labelClasses}>Message</label>
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center space-x-2 btn-primary bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "loading" ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >⌛</motion.div>
                ) : status === "success" ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent</span>
                  </>
                ) : status === "error" ? (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to Send</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;