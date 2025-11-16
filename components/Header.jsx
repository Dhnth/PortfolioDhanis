import Link from "next/link";
import { Button } from "./ui/button";
// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
  <header className="py-7 text-white sticky top-0 z-50 bg-primary border-b border-white/10">
    <div className="container mx-auto flex justify-between">
        {/* logo */}
        <Link href={"/"} className="text-3xl font-semibold">
        D<span className="text-aksen">F</span>G
        </Link>
        {/* desktop nav $ download cv*/}
        <div className="hidden xl:flex items-center gap-8">
            <Nav/>
            <Link href={"/contact"}>
            <Button>Download CV</Button>
            </Link>
        </div>

        {/* mobile nav  */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
    </div>
  </header>

  );
}

export default Header