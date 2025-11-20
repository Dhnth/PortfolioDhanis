"use client";
import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    num: "01",
    title: "Web Application Development",
    description: "Build dynamic websites using PHP, MySQL, and JavaScript. Focused on essential features such as login systems, CRUD operations, and user-friendly data display.",
    href: "/project?slide=1",
    features: ["Login Systems", "CRUD Operations", "User-friendly Data Display"]
  },
  {
    num: "02", 
    title: "Frontend Visual & Parallax Design",
    description: "I've been learning how to create simple landing pages with parallax effects and scroll animations using AOS. I enjoy exploring how motion and layout can make a website look more alive.",
    href: "/project?slide=2",
    features: ["Parallax Effects", "AOS Animations", "Lightweight Design"]
  },
  {
    num: "03",
    title: "Responsive Web Design & Interactivity", 
    description: "I'm familiar with the basics of responsive design using HTML, CSS, and JavaScript. I focus on ensuring layouts remain clean and functional across devices.",
    href: "/project?slide=3",
    features: ["Cross-Device Compatibility", "Modern CSS"]
  },
];

// Interactive element buat ngisi space ke-4
const interactiveElements = [
  {
    title: "Process",
    description: "My workflow approach",
    icon: "🚀",
    content: "Discovery → Design → Develop → Deploy"
  },
  {
    title: "Collaboration", 
    description: "Let's work together",
    icon: "💬",
    content: "Open for new projects and collaborations"
  },
  {
    title: "Innovation",
    description: "Always learning",
    icon: "✨", 
    content: "Exploring new technologies and trends"
  }
];

const Services = () => {
  const [activeElement, setActiveElement] = useState(0);

  return (
    <section className="min-h-[80vh] my-10 p-6 py-12 flex flex-col justify-center xl:py-0">
      <div className="container mx-auto">
        
        <motion.div 
          initial={{opacity: 0}}
                animate={{
                opacity: 1, transition:{delay: 2, duration: 0.3, ease: "easeIn"}
                }}
          className="text-center mb-16"
        >
          <h1 className="h1 mb-4">What I Offer</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Specialized web development services to bring your digital ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1, 
            transition: { delay: 2, duration: 0.3, ease: "easeIn" }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {/* 3 Service Cards */}
          {services.map((service, index) => {
            return (
              <motion.div 
                key={index}
                className="min-h-[400px] flex flex-1 flex-col justify-between gap-6 group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-aksen/10 hover:border-aksen/30 transition-all duration-500"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full justify-between flex items-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-outline text-transparent bg-gradient-to-r from-aksen to-blue-400 bg-clip-text">
                    {service.num}
                  </div>
                  <Link 
                    href={service.href}
                    className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] rounded-full bg-white group-hover:bg-aksen transition-all duration-300 flex items-center justify-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-xl md:text-2xl lg:text-3xl"/>
                  </Link>
                </div>
                
                <h2 className="text-[22px] md:text-[32px] lg:text-[42px] font-bold text-white group-hover:text-aksen transition-all duration-300">
                  {service.title}
                </h2>
                
                <p className="text-sm md:text-lg text-white/60 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-aksen/20 text-aksen rounded-full text-xs border border-aksen/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="border-b border-white/20 w-full group-hover:border-aksen/50 transition-colors duration-300"></div>
              </motion.div>
            )
          })}

          {/* INTERACTIVE 4TH CARD - Hanya muncul di desktop */}
          <motion.div 
            className="hidden md:flex min-h-[400px] flex-col gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {/* Interactive Header */}
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-aksen mb-2">More About Me</h3>
              <p className="text-white/60">Click to explore</p>
            </div>

            {/* Floating Interactive Elements */}
            <div className="flex-1 relative">
              {interactiveElements.map((element, index) => (
                <motion.div
                  key={index}
                  className={`absolute cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 ${
                    activeElement === index 
                      ? 'bg-aksen/20 border-aksen scale-105' 
                      : 'bg-white/5 border-white/10 hover:bg-aksen/10'
                  }`}
                  style={{
                    top: `${0 + index * 25}%`,
                    left: `${5 + index * 20}%`,
                    zIndex: activeElement === index ? 10 : 1,
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveElement(index)}
                  animate={{
                    rotate: activeElement === index ? 0 : [-1, 1, -1, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-2xl mb-2">{element.icon}</div>
                  <h4 className="font-bold text-sm mb-1">{element.title}</h4>
                  <p className="text-xs text-white/60">{element.description}</p>
                  
                  {/* Expanded Content */}
                  {activeElement === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 text-xs text-white/80"
                    >
                      {element.content}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-auto pt-4 border-t border-white/20">
              <Link href="/contact">
                <button className="bg-aksen text-white px-6 py-2 rounded-lg hover:bg-aksen/80 transition-colors duration-300 text-sm font-semibold">
                  Let's Talk
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="text-center my-20"
        >
          <p className="text-white/60 mb-6 ">Want to see these skills in action?</p>
          <Link href="/project">
            <button className="bg-aksen text-white px-8 py-3 rounded-lg hover:bg-aksen/80 transition-colors duration-300 font-semibold">
              View All Projects
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default Services