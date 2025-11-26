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
import { FiDownload, FiMail, FiPhone, FiUser, FiTarget } from "react-icons/fi"
import { 
  SiTailwindcss,
  SiNextdotjs,
  SiMysql
 } from "react-icons/si"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// about data
const about = {
  title: "About Me",
  description: "Hi! I’m Fathan — a web enthusiast who enjoys learning how things work behind every website.I started by exploring HTML, CSS, and JavaScript, then gradually moved into backend development with PHP and MySQL.Along the way, I’ve also learned to design simple user interfaces, create responsive layouts, and experiment with scroll animations to make web pages feel more interactive.I enjoy building small but functional projects that help me understand how frontend and backend connect — and I’m always looking for new things to learn and improve.",
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
  description:
    "Some of the skills I’ve learned and continue to develop, mainly in web development. This also includes the technologies I used to build this portfolio.",
  skillList: [
    {
      icon: <FaHtml5 color="#E44D26" />,
      name: "HTML 5",
      level: "Intermediate",
      description: "Know some basic HTML tags from practice and small projects.",
    },
    {
      icon: <FaCss3 color="#1572B6" />,
      name: "CSS 3",
      level: "Intermediate",
      description: "Know basic CSS properties and pseudo-classes for styling web pages.",
    },
    {
      icon: <FaJs color="#F7DF1E" />,
      name: "JavaScript",
      level: "Intermediate",
      description: "Know the basics of JavaScript like variables, functions, and DOM manipulation.",
    },
    {
      icon: <FaPhp color="#777BB4" />,
      name: "PHP",
      level: "Beginner",
      description: "Know basic PHP, including using POST methods and connecting to databases.",
    },
    {
      icon: <SiTailwindcss color="#06B6D4" />,
      name: "Tailwind CSS",
      level: "Intermediate",
      description: "Know how to use Tailwind for styling based on basic CSS knowledge.",
    },
    {
      icon: <FaPython color="#3776AB" />,
      name: "Python",
      level: "Beginner",
      description: "Know Python basics like data types, operators, and variables.",
    },
    {
      icon: <FaFigma color="#F24E1E" />,
      name: "Figma",
      level: "Beginner",
      description: "Know the basics of Figma such as creating frames and prototypes.",
    },
    {
      icon: <FaNodeJs color="#339933" />,
      name: "Node.JS",
      level: "Beginner",
      description: "Know the basic concept of Node.js like server and backend, still learning more.",
    },
    {
      icon: <SiNextdotjs color="#000000" />,
      name: "Next.JS",
      level: "Beginner",
      description: "Know the basics of Next.js and used it to build this portfolio.",
    },
    {
      icon: <FaReact color="#61DAFB" />,
      name: "React.JS",
      level: "Beginner",
      description: "Know the basic concept of React such as components and state.",
    },
  ],
};

import SkillsCard from "@/components/SkillsCard";
import InfoCard from "@/components/InfoCard";
import {Tabs, TabsContent, TabsTrigger, TabsList} from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const Resume = () => {
  const [isClient, setIsClient] = useState(false);
  const [floatingPositions, setFloatingPositions] = useState([]);

  useEffect(() => {
    setIsClient(true);
    // Generate random positions hanya di client side
    const positions = skills.skillList.slice(0, 5).map(() => ({
      top: Math.random() * 60,
      left: Math.random() * 300,
    }));
    setFloatingPositions(positions);
  }, []);
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1, transition:{delay: 2.2, duration: 0.3, ease: "easeIn"}}}
    className="p-6 min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto mt-32">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 h-[400px] bg-white/5 p-5 border-2 border-white/10">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>

             {/* floating animation */}
            <div className="mt-auto relative h-20">
              {isClient && floatingPositions.length > 0 ? (
                skills.skillList.slice(0, 5).map((skill, index) => {
                  const position = floatingPositions[index];
                  
                  return (
                    <motion.div
                      className="absolute cursor-pointer"
                      style={{
                        top: `${position.top}px`,
                        left: `${position.left}px`,
                      }}  
                      animate={{ 
                        y: [0, -10, 0], 
                        rotate: [0, 5, 0, -5, 0] 
                      }}
                      whileHover={{
                        scale: 1.3,
                        rotate: 360,
                        transition: { duration: 0.3 }
                      }}
                      key={index}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut", 
                        delay: index * 0.3
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                  );
                })
              ) : (
                // Fallback selama loading atau di server
                <div className="flex justify-center items-center h-full text-white/40">
                  Loading...
                </div>
              )}
            </div>


            {/* quick action */}
            <div className="mt-auto space-y-3 pt-6 border-t text-white border-white/10">
              <Link href="/contact">
                <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                  <FiMail size={16} />
                  Contact
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                  <FiTarget size={16} />
                  Projects
                </Button>
              </Link>
            </div>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* about */}
            <TabsContent 
            value="about"
            className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[750px] text-sm md:text-lg text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 gap-10 xl:grid-cols-2 gap-y-6 max-w-[800px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=> {
                    return <InfoCard key={index} item={item} index={index} />
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent 
            value="skills"
            className="w-full"
            >
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[750px] md:text-lg text-sm mx-auto xl:mx-0 text-white/60">{skills.description}</p>
                </div>
                <ScrollArea className="h-[330px] md:h-[320px] xl:h-[390px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4 mr-6">
                    {skills.skillList.map((skill, index)=> {
                      return <SkillsCard key={index} skill={skill} index={index} />
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      {/* Contact CTA */}
        <motion.div 
        className="py-16 border-t border-white/10 text-center"
        initial={{opacity: 0}}
        animate={{
          opacity: 1, transition:{delay: 2.2, duration: 0.3, ease: "easeIn"}
        }}
        >
          <h2 className="h2 mb-4">Want to collaborate?</h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Let's discuss your project! I'm ready to help you turn your digital ideas into reality.
          </p>
          <Link href="/contact">
          <Button 
            variant={"outline"}
            size={"lg"}
            className="uppercase"
          >
            Contact Me
          </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Resume