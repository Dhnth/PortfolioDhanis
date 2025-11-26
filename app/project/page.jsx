"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Suspense } from "react";

import { useSearchParams } from "next/navigation";

import {BsArrowUpRight, BsGithub } from "react-icons/bs";

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Web Application | Backend",
    title: "Student Attendance App",
    description: "A desktop-oriented web application for managing student attendance, including login authentication, CRUD operations, and user-friendly data display on desktops.",
    stack : [
      {name: "HTML"},
      {name: "CSS"},
      {name: "JavaScript"},
      {name: "MySQL"},
      {name: "PHP"},
      {name: "PhpSpreadsheet"},
      {name: "jQuery"},
    ],
    image: "/assets/projectImage/1.webp",
    live: "https://yourstudentlist.gt.tc",
    github: "https://github.com/Dhnth/daftarMurid",
  },
  {
    num: "02",
    category: "Frontend | Visual Design",
    title: "Parallax Landing Page",
    description: "A visually engaging landing page featuring smooth parallax scrolling and scroll-triggered animations, optimized exclusively for desktop viewing.",
    stack : [
      {name: "HTML"},
      {name: "CSS"},
      {name: "JavaScript"},
      {name: "AOS"},
    ],
    image: "/assets/projectImage/2.webp",
    live: "https://dhnth.github.io/tugasdhns/",
    github: "https://github.com/Dhnth/tugasdhns",
  },
  {
    num: "03",
    category: "Frontend | Responsive",
    title: "Responsive Landing Page",
    description: "A landing page built from scratch that adapts to different screen sizes, including desktop and tablet. Includes interactive elements and scroll animations to enhance user engagement.",
    stack : [
      {name: "HTML"},
      {name: "CSS"},
      {name: "JavaScript"},
      {name: "AOS"},
    ],
    image: "/assets/projectImage/3.webp",
    live: "https://cookbookku.netlify.app",
    github: "https://github.com/Dhnth/CookBookKu",
  },
]

const Project = () => {
  const [project, setProject] = useState(projects[0]);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const searchParams = typeof window !== "undefined" ? useSearchParams() : null;

  // baca query slide
  useEffect(()=> {
    if ( typeof window === "undefined" || !searchParams) return; 
    const slideValue = searchParams.get("slide");
    if( !slideValue ) return;
    const slideIndex = Number(slideValue) - 1;

    if (swiperInstance && slideIndex >= 0 && slideIndex < projects.length) {
      swiperInstance.slideTo(slideIndex);
      setProject(projects[slideIndex]);
    }
  }, [swiperInstance, searchParams]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setProject(projects[currentIndex]);
  }

  // Variants untuk animasi
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const staggerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="p-6 mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto text-center mt-20">
          <motion.h1 
            className="text-3xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            My <span className="text-aksen bg-gradient-to-r from-aksen to-aksen/70 bg-clip-text ">Projects</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Here are some of the projects I've worked on, showcasing my skills and what I enjoy building.
          </motion.p>
        </div>
      </motion.div>
      
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.5, ease: "easeIn" } }}
        className="min-h-[70vh] flex flex-col justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto p-6">
          <div className="flex flex-col xl:flex-row xl:gap-[40px]">
            {/* Left Column - Project Details */}
            <div className="w-full xl:w-[50%] xl:h-[460px] order-2 flex flex-col xl:justify-between xl:order-none">
              <div className="flex flex-col gap-[30px]">
                {/* number project */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={project.num}
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none font-bold text-transparent text-outline hover:text-aksen/20 transition-all duration-500 cursor-default"
                    transition={{ type: "spring", stiffness: 300 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                  >
                    {project.num}
                  </motion.div>
                </AnimatePresence>
                
                {/* Category(Tools yg dipake) */}
                <AnimatePresence mode="wait">
                  <motion.h2 
                  key={project.category}
                    className="text-[22px] md:text-[32px] lg:text-[42px] font-bold text-white group-hover:text-aksen transition-all duration-500 bg-gradient-to-r from-white to-white/80 bg-clip-text"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {project.category}
                  </motion.h2>
                </AnimatePresence>
                
                {/* Description*/}
                <AnimatePresence mode="wait">
                  <motion.p 
                  key={project.description}
                    className="text-white/70 text-sm md:text-lg leading-relaxed"
                    variants={textVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                  >
                    {project.description}
                  </motion.p>
                </AnimatePresence>
                
                {/* Stack */}
                <AnimatePresence mode="wait">
                  <motion.ul 
                    key={project.num + "-stack"}
                    className="flex flex-wrap gap-3"
                    variants={staggerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {project.stack.map((item, index) => (
                      <motion.li 
                        key={index}
                        className="text-sm md:text-lg lg:text-xl text-aksen bg-aksen/10 px-3 py-1 rounded-full border border-aksen/20 hover:bg-aksen/20 hover:border-aksen/40 transition-all duration-300 cursor-default"
                        whileHover={{ scale: 1.05, y: -2 }}
                        variants={itemVariants}
                      >
                        {item.name}
                      </motion.li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
                
                {/* Animated Border */}
                <motion.div 
                  className="border border-white/20"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                />
                
                {/* Buttons with Enhanced Interactions */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href={project.live} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger 
                            className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] rounded-full bg-white/5 flex justify-center items-center group relative overflow-hidden"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                          >
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-r from-aksen to-aksen/70 opacity-0 group-hover:opacity-100 transition-all duration-300"
                              initial={false}
                              animate={{ scale: isHovered ? 1 : 0 }}
                              transition={{ duration: 0.3 }}
                            />
                            <BsArrowUpRight className="text-white text-xl md:text-2xl lg:text-3xl group-hover:text-white relative z-10 transition-all duration-300" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href={project.github} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger 
                            className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] rounded-full bg-white/5 flex justify-center items-center group relative overflow-hidden"
                          >
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-r from-aksen to-aksen/70 opacity-0 group-hover:opacity-100 transition-all duration-300"
                              whileHover={{ scale: 1 }}
                              initial={{ scale: 0 }}
                            />
                            <BsGithub className="text-white text-xl md:text-2xl lg:text-3xl group-hover:text-white relative z-10 transition-all duration-300" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github Repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image Slider */}
            <div className="w-full xl:w-[50%] xl:mb-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  className="h-[400px] xl:h-[520px] relative rounded-2xl overflow-hidden group"
                  onSwiper={setSwiperInstance}
                  onSlideChange={handleSlideChange}
                  autoHeight={false}
                  modules={[Autoplay]}
                  speed={800}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                >
                  {projects.map((project, index) => (
                    <SwiperSlide key={index} className="w-full">
                      <motion.div 
                        className="h-full w-full overflow-hidden relative flex justify-center items-center rounded-2xl"
                        transition={{ duration: 0.3 }}
                      >
                        
                        <div className="relative w-full h-full max-w-[100%] max-h-[80%] aspect-video rounded-xl overflow-hidden group/image-container">
                          <Image 
                            alt={project.title} 
                            src={project.image} 
                            fill
                            className="object-contain transition-all duration-500 brightness-85"
                            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 40vw"
                            quality={85}
                            priority={index === 0}
                          />
                          
                          {/* Project title yang muncul dari bawah saat hover */}
                          <div className="hidden xl:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 transform translate-y-full group-hover/image-container:translate-y-0 transition-all duration-500">
                            <h3 className="text-white font-semibold text-sm md:text-base text-center">
                              {project.title}
                            </h3>
                          </div>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                  
                  {/* Enhanced Slider Buttons */}
                  <WorkSliderBtns 
                    containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] z-20 w-full justify-between px-4"
                    btnStyles="bg-black/40 hover:bg-aksen/80 text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-300 xl:text-[32px] xl:w-[54px] xl:h-[54px] rounded-full backdrop-blur-sm border border-white/20 hover:border-aksen/50 shadow-lg hover:shadow-aksen/20"
                  />
                  
                  {/* Custom Pagination */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          project.num === projects[index].num 
                            ? 'bg-aksen w-6' 
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                        onClick={() => {
                          if (swiperInstance) {
                            swiperInstance.slideTo(index);
                          }
                        }}
                      />
                    ))}
                  </div>
                </Swiper>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      </div>
    </Suspense>
    
  )
}

export default Project