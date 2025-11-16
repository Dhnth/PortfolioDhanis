import Link from "next/link";
import Image from "next/image";
import Social from "@/components/Social";
const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto">
            {/* desktop foot */}
            <div className="hidden md:flex items-center justify-between">
                <div className="w-1/4">
                    <h3 className="font-bold text-2xl mb-4">Portfolio</h3>
                    <p>Copyright &copy; 2025</p>
                    <p>Dhanis Fathan Gunawan</p>
                </div>
                <div className="w-3/4">
                    <div className="flex items-center mb-6 justify-between">
                        <div className="grid grid-cols-3 lg:w-3/4">
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
                        </div>
                    </div>
                    
                    <div className="border-t-4 relative">
                        <img src="giphy.gif" alt="gif" className="w-[170px] absolute right-0 top-0 -translate-y-30 h-auto"/>
                        <div className="mt-6 flex justify-end">
                            <Social 
                            containerSyles={"flex gap-6"}
                            iconStyles={"w-9 h-9 border border-aksen rounded-full flex justify-center items-center text-aksen hover:bg-aksen hover:text-primary hover:transition-all duration-300"}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile foot */}
            <div className="md:hidden flex flex-col mx-6">
                <div>
                    <h3 className="font-bold text-2xl mb-4">Portfolio</h3>
                    <p>Copyright &copy; 2025</p>
                    <p>Dhanis Fathan Gunawan</p>
                </div>
                <div className="mt-8">
                    <div className="flex items-center mb-6 justify-between">
                        <div className="grid grid-cols-2 w-2/3">
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
                        </div>
                    </div>
                    
                    <div className="border-t-4 relative">
                        <img src="giphy.gif" alt="gif" className="w-[170px] absolute right-0 top-0 -translate-y-30 h-auto"/>
                        <div className="mt-6 flex justify-end">
                            <Social 
                            containerSyles={"flex gap-6"}
                            iconStyles={"w-9 h-9 border border-aksen rounded-full flex justify-center items-center text-aksen hover:bg-aksen hover:text-primary hover:transition-all duration-300"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer