"use client";
import Link from "next/link";
import Image from "next/image";
import Social from "@/components/Social";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
        <motion.div 
        className="container mx-auto"
        initial={{opacity: 0}}
                    animate={{
                    opacity: 1, transition:{delay: 2, duration: 0.3, ease: "easeIn"}
                    }}
        >
            {/* desktop foot */}
            <div className="hidden md:flex items-center justify-between">
                <motion.div 
                className="w-1/4"
                initial={{opacity: 0}}
                animate={{
                opacity: 1, transition:{delay: 2, duration: 0.3, ease: "easeIn"}
                }}
                >
                    <h3 className="font-bold text-2xl mb-4">Portfolio</h3>
                    <p>Copyright &copy; 2025</p>
                    <p>Dhanis Fathan Gunawan</p>
                </motion.div>
                <motion.div 
                className="w-3/4"
                initial={{opacity: 0}}
                animate={{
                opacity: 1, transition:{delay: 2, duration: 0.3, ease: "easeIn"}
                }}
                >
                        <motion.div 
                        className="grid grid-cols-3 lg:w-3/4 mb-6"
                        initial={{opacity: 0}}
                        animate={{
                        opacity: 1, transition:{delay: 2.2, duration: 0.3, ease: "easeIn"}
                        }}
                        >
                            {[
                                {name: "Home", href: "/"},
                                {name: "Services", href: "/services"},
                                {name: "Resume", href: "/resume"},
                                {name: "Project", href: "/project"},
                                {name: "Contact", href: "/contact"},
                            ].map((item, index)=> {
                                return (
                                    <Link 
                                    key={index} 
                                    href={item.href}
                                    className="px-4 mx-5 my-2 border-l relative overflow-hidden group"
                                    >
                                    <span className="text-white group-hover:text-primary transition-colors duration-300 z-10 relative">
                                        {item.name}
                                    </span>
                                    <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0">

                                    </div>
                                    </Link>
                                )
                            })}
                        </motion.div>
                    
                    <motion.div 
                    className="border-t-4 relative"
                    initial={{opacity: 0}}
                    animate={{
                    opacity: 1, transition:{delay: 2, duration: 0.3, ease: "easeIn"}
                    }}
                    >
                        <Image src="/giphy.gif" alt="gif" width={170} height={170} className="absolute -right-1 top-0 -translate-y-30 h-auto"/>
                        <div className="mt-6 flex justify-end">
                            <Social 
                            containerSyles={"flex gap-6"}
                            iconStyles={"w-9 h-9 border border-aksen rounded-full flex justify-center items-center text-aksen hover:bg-aksen hover:text-primary hover:transition-all duration-300 z-20"}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            {/* mobile foot */}
            <div className="md:hidden flex flex-col mx-6">
                <motion.div 
                className="w-1/4"
                initial={{opacity: 0}}
                animate={{
                opacity: 1, transition:{delay: 2, duration: 0.3, ease: "easeIn"}
                }}
                >
                    <h3 className="font-bold text-2xl mb-4">Portfolio</h3>
                    <p>Copyright &copy; 2025</p>
                    <p>Dhanis Fathan Gunawan</p>
                </motion.div>
                <motion.div 
                className="mt-8"
                initial={{opacity: 0}}
                animate={{
                opacity: 1, transition:{delay: 2, duration: 0.3, ease: "easeIn"}
                }}
                >
                        <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 w-2/3 mb-6"
                        initial={{opacity: 0}}
                        animate={{
                        opacity: 1, transition:{delay: 2.2, duration: 0.3, ease: "easeIn"}
                        }}
                        >
                            {[
                                {name: "Home", href: "/"},
                                {name: "Services", href: "/services"},
                                {name: "Resume", href: "/resume"},
                                {name: "Project", href: "/project"},
                                {name: "Contact", href: "/contact"},
                            ].map((item, index)=> {
                                return (
                                    <Link 
                                    key={index} 
                                    href={item.href}
                                    className="px-4 mx-5 my-2 border-l relative overflow-hidden group"
                                    >
                                    <span className="text-white group-hover:text-primary transition-colors duration-300 z-10 relative">
                                        {item.name}
                                    </span>
                                    <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0">

                                    </div>
                                    </Link>
                                )
                            })}
                        </motion.div>
                    
                    <motion.div 
                    className="border-t-4 relative"
                    initial={{opacity: 0}}
                    animate={{
                    opacity: 1, transition:{delay: 2, duration: 0.3, ease: "easeIn"}
                    }}
                    >
                        <Image src="/giphy.gif" alt="gif" width={170} height={170} className="absolute right-0 top-0 -translate-y-30 h-auto"/>
                        <div className="mt-6 flex justify-end">
                            <Social 
                            containerSyles={"flex gap-6"}
                            iconStyles={"w-9 h-9 border border-aksen rounded-full flex justify-center items-center text-aksen hover:bg-aksen hover:text-primary hover:transition-all duration-300 z-20"}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    </footer>
  )
}

export default Footer