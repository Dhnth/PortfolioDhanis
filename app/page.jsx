import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

// components
import Social from "@/components/Social"
import Photo from "@/components/Photo"

const Home = () => {
  return (
    <section className="h-full">
      <div className="p-6 container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* teks */}
          <div className=" text-center xl:text-left order-2 xl:order-none">
            <span className="text-sm md:text-lg lg:text-xl">Web Developer</span>
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
                <FiDownload 
                className="text-xl"
                />
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
      </div>
    </section>
  )
}

export default Home