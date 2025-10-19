"use client";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci"

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Project",
        path: "/project",
    },
    {
        name: "Resume",
        path: "/resume",
    },
    {
        name: "Contact",
        path: "/contact",
    },
]


const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries 
            className="text-[32px] text-aksen"
            />
        </SheetTrigger>
        <SheetContent className="flex flex-col ">
            {/* Logo */}
            <SheetHeader>
                <SheetTitle>
                    <div className="mt-32 mb-40 text-center text-2xl">
                        <Link href={"/"}>
                            <h1 className="text-4xl font-semibold text-white">
                                D<span className="text-aksen">F</span>G
                            </h1>
                        </Link>
                    </div>
                </SheetTitle>
            </SheetHeader>
            {/* nav */}

            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index)=> {
                    return <Link href={link.path} key={index} className={`${link.path === pathname && "text-aksen border-b-2 border-aksen"} text-xl capitalize hover:text-aksen transition-all`}>{link.name}</Link>
                })}
            </nav>
            

        </SheetContent>
    </Sheet>
  )
}

export default MobileNav