"use client";

import { motion } from "framer-motion";
import React, {use, useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

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
      {name: "PhpSpreadsheet"},
      {name: "jQuery"},
    ],
    image: "/assets/projectImage/1.png",
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
    image: "/assets/projectImage/2.png",
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
    image: "/assets/projectImage/3.png",
    live: "https://cookbookku.netlify.app",
    github: "https://github.com/Dhnth/CookBookKu",
  },

]


const Project = () => {
  const [project, setProject] = useState(projects[0]);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const searchParams = useSearchParams();

  // baca query slide
  useEffect(()=> {
    const slideIndex = Number(searchParams.get("slide")) - 1;
    if (swiperInstance && slideIndex >= 0 && slideIndex < projects.length) {
      swiperInstance.slideTo(slideIndex);
      setProject(projects[slideIndex]);
    }
  }, [swiperInstance, searchParams]);

  const handleSlideChange = (swiper) => {
    // ambil slide skrg ke brp 
    const currentIndex = swiper.activeIndex;
    // perbarui project state berdasarkan state skrg
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {delay: 2.2, duration: 0.3, ease: "easeIn"}}}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto p-6">
        <div className="flex flex-col xl:flex-row xl:gap-[40px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] order-2 flex flex-col xl:justify-between xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/* outline num */}
              <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none font-bold text-transparent text-outline">
                {project.num}
              </div>
              {/* categoty project */}
              <h2 className="text-[22px] md:text-[32px] lg:text-[42px] font-bold text-white group-hover:text-aksen transition-all duration-300 ">
                {project.category}
              </h2>
              {/* description */}
              <p className="text-white/60 text-sm md:text-lg">
                {project.description}
              </p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index)=> {
                  return <li key={index} className=" text-sm md:text-lg lg:text-xl text-aksen">
                    {item.name}
                    {/* tambah , otomatis */}
                    {index !== project.stack.length -1 && ","}
                  </li>
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* Live Project */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-xl md:text-2xl lg:text-3xl group-hover:text-aksen" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github Project */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-xl md:text-2xl lg:text-3xl group-hover:text-aksen" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="h-[460px] xl:h-[520px] relative"
            onSwiper={setSwiperInstance}
            onSlideChange={handleSlideChange}
            autoHeight={false}
            >
              {projects.map((project, index)=> {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-full overflow-hidden relative group flex justify-center items-center">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* img */}
                    <div className="relative w-full h-full">
                      <Image alt="" src={project.image} fill className="object-contain"/>
                    </div>
                  </div>
                </SwiperSlide>
              })}
              {/* slider button */}
              <WorkSliderBtns 
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] z-20 w-full justify-between"
              btnStyles="bg-black/20 hover:bg-black/40 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-300 xl:text-[32px] xl:w-[54px] xl:h-[54px]"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Project