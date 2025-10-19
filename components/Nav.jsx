"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

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

function Nav() {
    const pathname = usePathname();
  return <nav className="flex gap-8">
    {links.map((link, index) => {
        return <Link href={link.path} key={index} className={`${link.path === pathname && "text-aksen border-b-2 border-aksen"} capitalize font-medium hover:text-aksen transition-all duration-200`}>{link.name}</Link>
    })}
  </nav>
}

export default Nav