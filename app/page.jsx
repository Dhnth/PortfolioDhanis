import { Button } from "@/components/ui/button"
import { FiDownload, FiCode, FiServer, FiSmartphone } from "react-icons/fi"
import Link from "next/link"

// components
import Social from "@/components/Social"
import Photo from "@/components/Photo"

const Home = () => {
  return (
    <section className="h-full">
      <div className="p-6 container mx-auto h-full">
        {/* Hero Section (yang sudah ada) */}
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* teks */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 my-6">
              Hello I'm <br /> <span className="text-aksen">Dhanis Fathan Gunawan</span>
            </h1>
            <p className="max-w-[500px] mx-auto xl:mx-0 mb-9 text-white/80 text-sm md:text-lg">
              I'm a web developer passionate about creating modern websites and improving my skills through new technologies.
            </p>
            {/* button */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant={"outline"}
                size={"lg"}
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              {/* sosmed */}
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerSyles={"flex gap-6"}
                  iconStyles={"w-9 h-9 border border-aksen rounded-full flex justify-center items-center text-aksen hover:bg-aksen hover:text-primary hover:transition-all duration-300"}
                />
              </div>
            </div>
          </div>

          {/* foto */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>


        {/* Tech Stack Section */}
        <div className="py-16 border-t border-white/10">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Tech Stack</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Technologies I frequently use to build modern websites</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              'JavaScript',  
              'Node.js', 'Tailwind CSS', 'MySQL', 'PHP'
            ].map((tech) => (
              <div 
                key={tech}
                className="bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-lg hover:bg-aksen/20 hover:border-aksen/50 transition-all duration-300"
              >
                <span className="text-white font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>


        {/* Featured Projects Preview */}
        <div className="py-16 border-t border-white/10">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Featured Projects</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Beberapa project terbaik yang telah saya kerjakan</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-aksen/20 hover:border-aksen/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">Web Application</h3>
              <p className="text-white/60 mb-4">A desktop-oriented web application for managing student attendance, including login authentication, CRUD operations, and user-friendly data display on desktops.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-aksen/20 text-aksen px-3 py-1 rounded-full text-sm">Javascript</span>
                <span className="bg-aksen/20 text-aksen px-3 py-1 rounded-full text-sm">PHP</span>
                <span className="bg-aksen/20 text-aksen px-3 py-1 rounded-full text-sm">MySQL</span>
                <span className="bg-aksen/20 text-aksen px-3 py-1 rounded-full text-sm">PhpSpreadsheet</span>
                <span className="bg-aksen/20 text-aksen px-3 py-1 rounded-full text-sm">jQuery</span>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-aksen/20 hover:border-aksen/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">Portfolio Website</h3>
              <p className="text-white/60 mb-4">Modern portfolio website dengan responsive design dan smooth animations</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-aksen/20 text-aksen px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-aksen/20 text-aksen px-3 py-1 rounded-full text-sm">Tailwind</span>
                <span className="bg-aksen/20 text-aksen px-3 py-1 rounded-full text-sm">Framer Motion</span>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link href="/project">
            <Button 
              variant={"default"}
              size={"lg"}
              className="bg-aksen hover:bg-aksen/80 text-white"
            >
              See All Projects
            </Button>
            </Link>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="py-16 border-t border-white/10 text-center">
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
        </div>
      </div>
    </section>
  )
}

export default Home