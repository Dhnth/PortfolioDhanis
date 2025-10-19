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

// about data
const about = {
  title: "About Me",
  description: "Hi! I’m Fathan — a web enthusiast who enjoys learning how things work behind every website.I started by exploring HTML, CSS, and JavaScript, then gradually moved into backend development with PHP and MySQL.Along the way, I’ve also learned to design simple user interfaces, create responsive layouts, and experiment with scroll animations to make web pages feel more interactive.I enjoy building small but functional projects that help me understand how frontend and backend connect — and I’m always looking for new things to learn and improve.",
  info : [
    {
      fieldName: "Name",
      fieldValue: "Dhanis Fathan Gunawan",
      href: "/"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 895 619 037 007",
      href: "https://api.whatsapp.com/send/?phone=0895619037007&text&type=phone_number&app_absent=0"
    },
    {
      fieldName: "Focus",
      fieldValue: "Web Development",
      href: "/"
    },
    {
      fieldName: "Email",
      fieldValue: "fathangunawan19@gmail.com",
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
      description: "Know some basic HTML tags from practice and small projects.",
    },
    {
      icon: <FaCss3 color="#1572B6" />,
      name: "CSS 3",
      description: "Know basic CSS properties and pseudo-classes for styling web pages.",
    },
    {
      icon: <FaJs color="#F7DF1E" />,
      name: "JavaScript",
      description: "Know the basics of JavaScript like variables, functions, and DOM manipulation.",
    },
    {
      icon: <FaPhp color="#777BB4" />,
      name: "PHP",
      description: "Know basic PHP, including using POST methods and connecting to databases.",
    },
    {
      icon: <SiTailwindcss color="#06B6D4" />,
      name: "Tailwind CSS",
      description: "Know how to use Tailwind for styling based on basic CSS knowledge.",
    },
    {
      icon: <FaPython color="#3776AB" />,
      name: "Python",
      description: "Know Python basics like data types, operators, and variables.",
    },
    {
      icon: <FaFigma color="#F24E1E" />,
      name: "Figma",
      description: "Know the basics of Figma such as creating frames and prototypes.",
    },
    {
      icon: <FaNodeJs color="#339933" />,
      name: "Node.JS",
      description: "Know the basic concept of Node.js like server and backend, still learning more.",
    },
    {
      icon: <SiNextdotjs color="#000000" />,
      name: "Next.JS",
      description: "Know the basics of Next.js and used it to build this portfolio.",
    },
    {
      icon: <FaReact color="#61DAFB" />,
      name: "React.JS",
      description: "Know the basic concept of React such as components and state.",
    },
  ],
};


import {Tabs, TabsContent, TabsTrigger, TabsList} from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const Resume = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1, transition:{delay: 2.2, duration: 0.3, ease: "easeIn"}}}
    className="p-6 min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
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
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[800px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=> {
                    return <li key={index} className="flex justify-center items-center xl:justify-start gap-4">
                      <span className="text-sm lg:text-lg text-white/60">
                        {item.fieldName}
                      </span>
                      <span className="text-sm md:text-lg lg:text-xl">
                        <a href={item.href} target="_blank">{item.fieldValue}</a>
                      </span>
                    </li>
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
                <ScrollArea className="h-[330px] md:h-[320px] xl:h-[350px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                    {skills.skillList.map((skill, index)=> {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#202B34] rounded-xl flex justify-center items-center group relative overflow-hidden">
                              {/* icon */}
                              <div className="absolute inset-0 justify-center flex items-center text-6xl transition-all duration-300 group-hover:opacity-0 ease-in-out">{skill.icon}</div>
                              {/* deskripsi */}
                              <div className="absolute inset-0 flex justify-center items-center text-center opacity-0 group-hover:opacity-100 px-3 transition-all duration-300 text-sm leading-snug text-white/70 ease-in-out">
                                {skill.description}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume