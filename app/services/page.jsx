"use client";
import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Application Development",
    description: "Build dynamic websites using PHP, MySQL, and JavaScript. Focused on essential features such as login systems, CRUD operations, and user-friendly data display.",
    href: "/project?slide=1"
  },
  {
    num: "02",
    title: "Frontend Visual & Parallax Design",
    description: "I’ve been learning how to create simple landing pages with parallax effects and scroll animations using AOS.I enjoy exploring how motion and layout can make a website look more alive while still keeping things lightweight and easy to maintain.",
    href: "/project?slide=2"
  },
  {
    num: "03",
    title: "Responsive Web Design & Interactivity",
    description: "I’m familiar with the basics of responsive design using HTML, CSS, and JavaScript.I focus on ensuring layouts remain clean and functional across devices, while gradually improving my understanding of interactivity and user experience.",
    href: "/project?slide=3"
  },
];

import { motion } from "framer-motion";


const Services = () => {
  return (
    <section className="min-h-[80vh] p-6 py-12 flex flex-col justify-center xl:py-0">
      <div className="container mx-auto">
        <motion.div
        initial={{opacity: 0}}
        animate={{
          opacity: 1, transition:{delay: 2.2, duration: 0.3, ease: "easeIn"}
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index)=> {
            return <div 
            key={index}
            className="min-h-[400px] flex flex-1 flex-col justify-between gap-6 group serGroup"
            >
              <div className="w-full justify-between flex  items-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-outline text-transparent">
                  {service.num}
                </div>
                  <Link 
                  href={service.href}
                  className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] rounded-full bg-white group-hover:bg-aksen transition-all duration-300 flex items-center justify-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-xl md:text-2xl lg:text-3xl"/>
                  </Link>
              </div>
              <h2 className="text-[22px] md:text-[32px] lg:text-[42px] font-bold text-white group-hover:text-aksen transition-all duration-300">{service.title}</h2>
              <p className="text-sm md:text-lg text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full">

              </div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services