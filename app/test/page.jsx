"use client";
import { 
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaReact,
  FaFigma,
  FaPython,
  FaPhp,
 } from "react-icons/fa"
import { 
  SiTailwindcss,
  SiNextdotjs,
  SiMysql
 } from "react-icons/si"
import { FiDownload, FiMail, FiPhone, FiUser, FiTarget } from "react-icons/fi"

// about data
const about = {
  title: "About Me",
  description: "Hi! I'm Fathan — a web enthusiast who enjoys learning how things work behind every website. I started by exploring HTML, CSS, and JavaScript, then gradually moved into backend development with PHP and MySQL. Along the way, I've also learned to design simple user interfaces, create responsive layouts, and experiment with scroll animations to make web pages feel more interactive. I enjoy building small but functional projects that help me understand how frontend and backend connect — and I'm always looking for new things to learn and improve.",
  info : [
    {
      fieldName: "Name",
      fieldValue: "Dhanis Fathan Gunawan",
      icon: <FiUser />,
      href: "/"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 895 619 037 007",
      icon: <FiPhone />,
      href: "https://api.whatsapp.com/send/?phone=0895619037007&text&type=phone_number&app_absent=0"
    },
    {
      fieldName: "Focus",
      fieldValue: "Web Development",
      icon: <FiTarget />,
      href: "/"
    },
    {
      fieldName: "Email",
      fieldValue: "fathangunawan19@gmail.com",
      icon: <FiMail />,
      href: "mailto:fathangunawan19@gmail.com"
    },
  ]
}

// skills data 
const skills = {
  title: "My Skills",
  description: "Some of the skills I've learned and continue to develop, mainly in web development. This also includes the technologies I used to build this portfolio.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
      description: "Know some basic HTML tags from practice and small projects.",
      level: 85,
      color: "#E44D26"
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
      description: "Know basic CSS properties and pseudo-classes for styling web pages.",
      level: 80,
      color: "#1572B6"
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      description: "Know the basics of JavaScript like variables, functions, and DOM manipulation.",
      level: 75,
      color: "#F7DF1E"
    },
    {
      icon: <FaPhp />,
      name: "PHP",
      description: "Know basic PHP, including using POST methods and connecting to databases.",
      level: 70,
      color: "#777BB4"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      description: "Know how to use Tailwind for styling based on basic CSS knowledge.",
      level: 85,
      color: "#06B6D4"
    },
    {
      icon: <FaPython />,
      name: "Python",
      description: "Know Python basics like data types, operators, and variables.",
      level: 60,
      color: "#3776AB"
    },
    {
      icon: <FaFigma />,
      name: "Figma",
      description: "Know the basics of Figma such as creating frames and prototypes.",
      level: 65,
      color: "#F24E1E"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.JS",
      description: "Know the basic concept of Node.js like server and backend, still learning more.",
      level: 55,
      color: "#339933"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.JS",
      description: "Know the basics of Next.js and used it to build this portfolio.",
      level: 80,
      color: "#000000"
    },
    {
      icon: <FaReact />,
      name: "React.JS",
      description: "Know the basic concept of React such as components and state.",
      level: 70,
      color: "#61DAFB"
    },
  ],
};

import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useState } from "react";

// Component untuk Skill Card dengan Progress Bar
const SkillCard = ({ skill, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Ganti progress bar dengan level labels
  const getLevelLabel = (level) => {
    if (level >= 80) return { label: "Advanced", color: "#10B981" };
    if (level >= 60) return { label: "Intermediate", color: "#3B82F6" };
    return { label: "Beginner", color: "#F59E0B" };
  };

  const levelInfo = getLevelLabel(skill.level);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative h-[180px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 flex flex-col items-center justify-center gap-4 hover:bg-aksen/10 hover:border-aksen/30 transition-all duration-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-4xl" style={{ color: skill.color }}>
            {skill.icon}
          </div>
          <h4 className="font-bold text-center text-sm md:text-base">{skill.name}</h4>
          
          {/* Level Badge (ganti progress bar) */}
          <span 
            className="px-3 py-1 rounded-full text-xs font-medium text-white"
            style={{ backgroundColor: levelInfo.color }}
          >
            {levelInfo.label}
          </span>
          
          {/* Experience Duration */}
          <span className="text-xs text-white/60">
            {skill.duration || "Learning"}
          </span>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 bg-aksen/20 backdrop-blur-sm rounded-xl border border-aksen/30 p-6 flex items-center justify-center"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }}
        >
          <p className="text-xs text-white/80 text-center leading-relaxed">
            {skill.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Component untuk Info Card
const InfoCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-aksen/10 hover:border-aksen/30 transition-all duration-300 group"
    >
      <a href={item.href} target="_blank" className="flex items-center gap-4">
        <div className="text-aksen text-xl group-hover:scale-110 transition-transform duration-300">
          {item.icon}
        </div>
        <div className="flex-1">
          <div className="text-white/60 text-sm mb-1">{item.fieldName}</div>
          <div className="text-white font-medium text-sm md:text-base">{item.fieldValue}</div>
        </div>
      </a>
    </motion.div>
  );
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="min-h-screen flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col xl:flex-row gap-[60px]">
          
          {/* Sidebar Navigation */}
          <div className="w-full xl:w-auto">
            <TabsList className="flex xl:flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <TabsTrigger 
                value="about"
                className="flex-1 xl:flex-none data-[state=active]:bg-aksen data-[state=active]:text-white px-6 py-3 rounded-lg transition-all duration-300"
              >
                About Me
              </TabsTrigger>
              <TabsTrigger 
                value="skills"
                className="flex-1 xl:flex-none data-[state=active]:bg-aksen data-[state=active]:text-white px-6 py-3 rounded-lg transition-all duration-300"
              >
                Skills
              </TabsTrigger>
              
              {/* Download CV Button */}
              <button className="flex items-center justify-center gap-2 px-6 py-3 border border-aksen text-aksen rounded-lg hover:bg-aksen hover:text-white transition-all duration-300 font-semibold mt-4 xl:mt-8">
                <FiDownload />
                Download CV
              </button>
            </TabsList>
          </div>

          {/* Content Area */}
          <div className="flex-1 min-h-[70vh]">
            
            {/* About Tab */}
            <TabsContent value="about" className="mt-0">
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-8"
              >
                {/* Header */}
                <div className="text-center xl:text-left">
                  <motion.h1 
                    className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-aksen to-blue-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {about.title}
                  </motion.h1>
                  <motion.p 
                    className="max-w-3xl text-white/60 leading-relaxed mx-auto xl:mx-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {about.description}
                  </motion.p>
                </div>

                {/* Info Grid */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto xl:mx-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {about.info.map((item, index) => (
                    <InfoCard key={index} item={item} index={index} />
                  ))}
                </motion.div>

                {/* Stats Section */}
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto xl:mx-0 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-aksen">3+</div>
                    <div className="text-white/60 text-sm mt-1">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-aksen">1+</div>
                    <div className="text-white/60 text-sm mt-1">Years</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-aksen">10+</div>
                    <div className="text-white/60 text-sm mt-1">Skills</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-aksen">100%</div>
                    <div className="text-white/60 text-sm mt-1">Passion</div>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="mt-0">
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-8"
              >
                {/* Header */}
                <div className="text-center xl:text-left">
                  <motion.h1 
                    className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-aksen to-blue-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {skills.title}
                  </motion.h1>
                  <motion.p 
                    className="max-w-3xl text-white/60 leading-relaxed mx-auto xl:mx-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {skills.description}
                  </motion.p>
                </div>

                {/* Skills Grid */}
                <ScrollArea className="h-[500px] pr-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {skills.skillList.map((skill, index) => (
                      <SkillCard key={index} skill={skill} index={index} />
                    ))}
                  </div>
                </ScrollArea>

                {/* Skill Categories */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="bg-aksen/10 border border-aksen/30 rounded-xl p-6 text-center">
                    <h4 className="font-bold text-aksen mb-2">Frontend</h4>
                    <p className="text-white/60 text-sm">HTML, CSS, JavaScript, React, Tailwind</p>
                  </div>
                  <div className="bg-aksen/10 border border-aksen/30 rounded-xl p-6 text-center">
                    <h4 className="font-bold text-aksen mb-2">Backend</h4>
                    <p className="text-white/60 text-sm">PHP, MySQL, Node.js</p>
                  </div>
                  <div className="bg-aksen/10 border border-aksen/30 rounded-xl p-6 text-center">
                    <h4 className="font-bold text-aksen mb-2">Tools</h4>
                    <p className="text-white/60 text-sm">Figma, Git, Next.js</p>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume