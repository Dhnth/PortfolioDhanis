import Link from "next/link";
import { Button } from "./ui/button";
// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
  <header className="py-7 xl:py-10 text-white">
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