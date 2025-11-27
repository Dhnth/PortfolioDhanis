"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

import Swal from "sweetalert2";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 895 619 037 007",
    link: "tel:+62895619037007"
  },
  {
    icon: <FaEnvelope />,
    title: "Email", 
    description: "fathangunawan19@gmail.com",
    link: "mailto:fathangunawan19@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Banjar, Jawa Barat, Indonesia",
    link: "https://maps.google.com/?q=Banjar,Jawa+Barat,Indonesia"
  },
];

import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isHovered, setIsHovered] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    
    setIsLoading(true);
    const formData = {
      firstname: e.target[0].value,
      lastname: e.target[1].value,
      email: e.target[2].value,
      subject: e.target[3].value,
      message: e.target[4].value,
    };

    const errors = {};
    if (!formData.email.includes("@")) errors.email = "Invalid email address";
    if (formData.message.length < 10) errors.message = "Message must be at least 10 characters long";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
      });

      if(res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent! 🎉',
          text: 'I\'ll get back to you within 24 hours!',
          theme: 'dark',
          confirmButtonColor: "#2BB3BC",
        });
        e.target.reset();
        setFormErrors({});
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your message could not be sent, please try again later.",
        theme: 'dark',
        confirmButtonColor: "#2BB3BC",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5, ease: "easeIn" } }}
      className="min-h-screen flex items-center justify-center py-12"
    >
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="text-aksen bg-gradient-to-r from-aksen to-blue-400 bg-clip-text">Work Together</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-12 items-start">
          {/* Contact Info - Enhanced */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                {info.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-4 rounded-xl bg-white/5 hover:bg-aksen/10 border border-white/10 hover:border-aksen/30 transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-aksen to-blue-500 text-white rounded-xl flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-2xl">
                        {item.icon}
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-white/60 text-sm font-medium">{item.title}</p>
                      <h3 className="text-lg font-semibold text-white group-hover:text-aksen transition-colors">
                        {item.description}
                      </h3>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ 
                        opacity: isHovered === index ? 1 : 0,
                        x: isHovered === index ? 0 : -10
                      }}
                      className="text-aksen"
                    >
                      →
                    </motion.div>
                  </motion.a>
                ))}
              </div>

              {/* Quick Stats */}
              <motion.div 
                className="mt-8 pt-8 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-aksen">24h</div>
                    <div className="text-white/60 text-sm">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-aksen">100%</div>
                    <div className="text-white/60 text-sm">Project Success</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form - Enhanced */}
          <motion.div 
            className="xl:w-[55%] w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <form 
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl"
              onSubmit={handleSubmit}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-aksen to-blue-500 rounded-xl flex items-center justify-center">
                  <FaPaperPlane className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text">
                    Send Message
                  </h3>
                  <p className="text-white/60">I'll get back to you as soon as possible</p>
                </div>
              </div>

              {/* Input Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Input 
                    type="text" 
                    name="firstname" 
                    placeholder="First Name" 
                    required
                    className="bg-white/5 border-white/10 focus:border-aksen transition-all duration-300 h-12 w-full"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Input 
                    type="text" 
                    name="lastname" 
                    placeholder="Last Name" 
                    required
                    className="bg-white/5 border-white/10 focus:border-aksen transition-all duration-300 h-12 w-full"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Input 
                    type="text" 
                    name="email" 
                    placeholder="Email Address" 
                    required
                    className="bg-white/5 border-white/10 focus:border-aksen transition-all duration-300 h-12 w-full"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Input 
                    type="text" 
                    name="subject" 
                    placeholder="Project Subject" 
                    required
                    className="bg-white/5 border-white/10 focus:border-aksen transition-all duration-300 h-12 w-full"
                  />
                </motion.div>
              </div>

              {/* Textarea */}
              <motion.div whileHover={{ scale: 1.02 }} className="mb-6">
                <Textarea 
                  className="min-h-[150px] bg-white/5 border-white/10 focus:border-aksen resize-none transition-all duration-300"
                  placeholder="Tell me about your project, timeline, and expectations..."
                  required
                />
              </motion.div>

              {/* Submit Button & Errors */}
              <div className="flex items-center gap-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-aksen to-blue-500 hover:from-aksen/90 hover:to-blue-600 text-white font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-aksen/20 transition-all duration-300 gap-3"
                    disabled={isLoading}
                    type="submit"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>

                {/* Error Messages */}
                <div className="flex flex-col gap-1">
                  {formErrors.email && (
                    <motion.p 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-red-400 text-sm font-medium"
                    >
                      ⚠️ {formErrors.email}
                    </motion.p>
                  )}
                  {formErrors.message && (
                    <motion.p 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-red-400 text-sm font-medium"
                    >
                      ⚠️ {formErrors.message}
                    </motion.p>
                  )}
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;